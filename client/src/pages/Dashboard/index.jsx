import React, { useContext } from "react";
import CustomerTable from "./Client_Table";
import AddButton from "./Client_AddTicketButton";
import AddCategoryButton from "../../components/AddCategoryButton";
import AddOrganisationButton from "../../components/AddOrganisationButton";
import { store } from "../../components/GlobalStoreProvider";
import { isClient, isAdmin } from "../../logic/authentication";
import AdminDashboard from "./Admin_Table";
import { Row, Col } from "antd";

function Dashboard() {
  const { state } = useContext(store);
  const client = isClient(state);
  const admin = isAdmin(state);

  return (
    <>
      <Row justify="space-around" style={{ padding: "10px" }}>
        <Col style={{ display: "flex" }}>
          {client && <AddButton />} {admin && <AddCategoryButton />}{" "}
          {admin && <AddOrganisationButton />}
        </Col>
      </Row>
      <Row justify="space-around">
        <Col>
          {client && <CustomerTable />}
          {!client && <AdminDashboard />}
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
