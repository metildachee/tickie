import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "antd/dist/antd.css";
import "./App.css";
import { store } from "./components/GlobalStoreProvider";
import { isAuth, isAdmin, isClient, isAgent } from "./logic/authentication";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddTicketForm from "./pages/AddTicketForm";
import Navigation from "./components/Navigation";
import NoEntry from "./pages/NoEntry";
function App() {
  const { state } = useContext(store);
  const isLogin = isAuth(state);
  const client = isClient(state);

  return (
    <div className="App">
      <Router>
        {isLogin && <Navigation />}
        <Switch>
          <Route path="/login" exact>
            {isLogin ? <Redirect to="/" /> : <Login />}
          </Route>

          <Route path="/" exact>
            {isLogin ? <Dashboard /> : <Login />}
          </Route>

          <Route path="/create" exact>
            {isLogin && client ? <AddTicketForm /> : <NoEntry />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
