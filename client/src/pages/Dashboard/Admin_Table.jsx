import React, { useState, useContext, useEffect } from "react";
import { Table, Input, Button, Space, Tag } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { getTickets, tickets } from "../../logic/ticket";
import { store } from "../../components/GlobalStoreProvider";
import UpdateTicketButton from "../../components/AdminUpdateTicketButton";
import { isAdmin } from "../../logic/authentication";
import {
  CheckCircleOutlined,
  SyncOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

export default function AdminDashboard() {
  const [searchText, setSearchText] = useState("");
  const [searchedCol, setSearchedCol] = useState("");
  const { dispatch, state } = useContext(store);

  useEffect(() => {
    getTickets(dispatch);
  }, []);

  const data = tickets(state);

  let searchInput;
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      console.log(searchInput);
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedCol === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedCol(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
      ...getColumnSearchProps("key"),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
      ...getColumnSearchProps("desc"),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      ...getColumnSearchProps("category"),
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "remarks",
      ...getColumnSearchProps("remarks"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      ...getColumnSearchProps("status"),
      render: (row) => {
        switch (row) {
          case "Open": {
            return (
              <Tag
                value={row}
                icon={<ExclamationCircleOutlined />}
                color="warning"
              >
                {row}
              </Tag>
            );
          }
          case "Assigned": {
            return (
              <Tag icon={<ClockCircleOutlined />} color="default">
                {row}
              </Tag>
            );
          }
          case "In-progress": {
            return (
              <Tag value={row} icon={<SyncOutlined spin />} color="processing">
                {row}
              </Tag>
            );
          }
          case "Resolved": {
            return (
              <Tag value={row} icon={<CheckCircleOutlined />} color="success">
                {row}
              </Tag>
            );
          }
          case "Archived": {
            return (
              <Tag value={row} color="default">
                {row}
              </Tag>
            );
          }
          default: {
            return (
              <Tag value="Unassigned" color="volcano">
                Unassigned
              </Tag>
            );
          }
        }
      },
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      ...getColumnSearchProps("priority"),
      render: (row) => {
        switch (row) {
          case "Low": {
            return (
              <Tag value={row} color="blue">
                {row}
              </Tag>
            );
          }
          case "Moderate": {
            return (
              <Tag value={row} color="magenta">
                {row}
              </Tag>
            );
          }
          case "High": {
            return (
              <Tag value={row} color="red">
                {row}
              </Tag>
            );
          }
          default: {
            return (
              <Tag value="Unassigned" color="volcano">
                Unassigned
              </Tag>
            );
          }
        }
      },
    },
    {
      title: "Created by",
      dataIndex: "created_by",
      key: "created_by",
      ...getColumnSearchProps("created_by"),
    },
    {
      title: "Actions",
      render: (row) => (
        <>
          <UpdateTicketButton ticket={row} type="primary" />
        </>
      ),
    },
  ];

  if (isAdmin(state)) {
    columns.splice(columns.length - 1, 0, {
      title: "Assigned",
      dataIndex: "assigned_to",
      key: "assigned_to",
      ...getColumnSearchProps("assigned_to"),
    });
  }

  return (
    <Table
      pagination={{
        position: ["bottomCenter"],
        pageSize: 2,
      }}
      style={{ margin: "0 auto", width: "90vw" }}
      columns={columns}
      dataSource={data}
    />
  );
}
