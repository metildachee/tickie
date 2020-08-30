import React, { useContext } from "react";
import CustomerTable from "./Client_Table";
import AddButton from "./Client_AddTicketButton";
import { store } from "../../components/GlobalStoreProvider";
import { isClient } from "../../logic/authentication";
import AdminDashboard from "./Admin_Panel";

function Dashboard() {
  const { state } = useContext(store);
  const client = isClient(state);
  return (
    <div>
      {client && <AddButton />}
      {client && <CustomerTable />}
      {!client && <AdminDashboard />}
    </div>
  );
}

export default Dashboard;
