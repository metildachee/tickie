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
import { isAuth, isClient } from "./logic/authentication";
import Dashboard from "./pages/Dashboard";
import AddTicketForm from "./pages/AddTicketForm";
import Navigation from "./components/Navigation";
import NoEntry from "./pages/NoEntry";
import Landing from "./pages/Landing";

function App() {
  const { state } = useContext(store);
  const isLogin = isAuth(state);
  const client = isClient(state);

  return (
    <div className="App">
      <Router>
        {isLogin && <Navigation />}
        <Switch>
          <Route path="/tickie/" exact>
            {isLogin ? <Dashboard /> : <Landing />}
          </Route>

          <Route path="/tickie/create" exact>
            {isLogin && client ? <AddTicketForm /> : <NoEntry />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
