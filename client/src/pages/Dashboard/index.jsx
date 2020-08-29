import React, { useContext } from "react";
import Table from "./Table";
import Navigation from "../../components/Navigation";
import AddButton from "./AddButton";
function Dashboard() {
  return (
    <div>
      <AddButton />
      <Table />
    </div>
  );
}

export default Dashboard;
