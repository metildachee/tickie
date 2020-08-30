import React, { useEffect, useContext } from "react";
import { Table } from "antd";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import { MenuOutlined } from "@ant-design/icons";
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
    dataIndex: "_id",
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
  },
  {
    title: "Assigned",
    dataIndex: "assigned_to",
  },
  {
    title: "Remarks",
    dataIndex: "remarks",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

export default function SortableTable() {
  const { dispatch, state } = useContext(store);

  useEffect(() => {
    getTickets(dispatch);
  }, []);

  const dataSource = tickets(state);

  const SortableItem = sortableElement((props) => {
    // console.log(props)
    return <tr {...props} />;
  });
  const SortableContainer = sortableContainer((props) => <tbody {...props} />);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMove(
        [].concat(dataSource),
        oldIndex,
        newIndex
      ).filter((el) => !!el);
      // console.log("Sorted items: ", newData);
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
      style={{ width: "90vw", margin: "0 auto" }}
      components={{
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow,
        },
      }}
    />
  );
}
