import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { store } from "./components/GlobalStoreProvider";
import AddTicketForm from "./pages/AddTicketForm";

export default function Routes() {
  const { state } = useContext(store);
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          {state.isAuth ? <Redirect to="/" /> : <Login />}
        </Route>

        <Route path="/create" exact>
          {state.isAuth ? <AddTicketForm /> : <Login />}
        </Route>

        <Route path="/" exact>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}
