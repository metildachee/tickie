import React, { useContext } from "react";
import CustomerTable from "./CustomerTable";
import AddButton from "./AddButton";
import { store } from "../../components/GlobalStoreProvider";
import { isClient, isAdmin } from "../../logic/authentication";
import AdminDashboard from "./AdminPanel";

function Dashboard() {
  const { state } = useContext(store);
  const client = isClient(state);
  const admin = isAdmin(state);
  return (
    <div>
      {client && <AddButton />}
      {client && <CustomerTable />}
      {admin && <AdminDashboard />}
    </div>
  );
}

export default Dashboard;
