import React, { useContext } from "react";
import { store } from "../../components/GlobalStoreProvider";
import { logout } from "../../logic/authentication";
import Table from "./Table";

function Dashboard() {
  const { dispatch } = useContext(store);

  return (
    <div>
      this is the dashboard
      <Table />
      <button onClick={() => logout(dispatch)}>Logout</button>
    </div>
  );
}

export default Dashboard;
