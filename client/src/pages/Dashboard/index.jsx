import React, { useContext } from "react";
import { store } from "../../components/GlobalStoreProvider";
import { logout } from "../../logic/authentication";

export default function Dashboard() {
  const { dispatch } = useContext(store);

  return (
    <div>
      this is the dashboard
      <button onClick={() => logout(dispatch)}>Logout</button>
    </div>
  );
}
