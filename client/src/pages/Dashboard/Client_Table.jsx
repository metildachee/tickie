import React, { useEffect, useContext } from "react";
import { Table, Tag } from "antd";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import {
  MenuOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import arrayMove from "array-move";
import { getTickets, tickets, updateSort } from "../../logic/ticket";
import { store } from "../../components/GlobalStoreProvider";
const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: "pointer", color: "#999" }} />
));

const columns = [
  {
    title: "Sort",
    dataIndex: "sort",
    width: 30,
    className: "drag-visible",
    render: () => <DragHandle />,
  },
  {
    title: "ID",
    dataIndex: "key",
    className: "drag-visible",
  },
  {
    title: "Title",
    dataIndex: "name",
    className: "drag-visible",
  },
  {
    title: "Description",
    dataIndex: "desc",
  },
  {
    title: "Status",
    dataIndex: "status",
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
        case "In-Progress": {
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
    title: "Assigned",
    dataIndex: "assigned_to",
  },
  {
    title: "Remarks",
    dataIndex: "remarks",
  },
];

export default function SortableTable() {
  const { dispatch, state } = useContext(store);

  useEffect(() => {
    getTickets(dispatch);
  }, []);

  const dataSource = tickets(state);

  const SortableItem = sortableElement((props) => <tr {...props} />);
  const SortableContainer = sortableContainer((props) => <tbody {...props} />);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMove(
        [].concat(dataSource),
        oldIndex,
        newIndex
      ).filter((el) => !!el);
      updateSort(dispatch, newData);
    }
  };

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const index = dataSource.findIndex(
      (x) => x.index === restProps["data-row-key"]
    );
    return <SortableItem index={index} {...restProps} />;
  };

  const DraggableContainer = (props) => (
    <SortableContainer
      useDragHandle
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  return (
    <Table
      pagination={false}
      dataSource={dataSource}
      columns={columns}
      rowKey="index"
      components={{
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow,
        },
      }}
    />
  );
}
