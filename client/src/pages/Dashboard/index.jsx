import React, { useContext } from "react";
import { store } from "../../components/GlobalStoreProvider";
import Table from "./Table";
import Navigation from "../../components/Navigation";

function Dashboard() {
  return (
    <div>
      <Navigation />
      <Table />
    </div>
  );
}

export default Dashboard;
