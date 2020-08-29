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
import { isAuth } from "./logic/authentication";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddTicketForm from "./pages/AddTicketForm";
import Navigation from "./components/Navigation";
function App() {
  const { state } = useContext(store);
  const isLogin = isAuth(state);

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
            <AddTicketForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
