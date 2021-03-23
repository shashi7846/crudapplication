import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Dashboard from "./dashboard";
import User from "./user";
import Profile from './profile';
import EditUser from './edituser';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateUser from "./createuser";


function App() {
  return (
    <>
      <Router>
        <div id="wrapper">
          <Sidebar></Sidebar>
          
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar>

              <div class="container-fluid">
                <Switch>
                  <Route path="/dashboard" exact="true">
                    <Dashboard></Dashboard>
                  </Route>
               
                <Route path="/user" exact="true">
                  <User></User>
                </Route>
                <Route path="/createuser" exact="true">
                  <CreateUser></CreateUser>
                </Route>
                <Route path="/edituser/:id" component={EditUser} exact={true}>
                  <EditUser></EditUser>
                </Route>
                <Route path="/profile/:id" component={Profile} exact={true}>
                <Profile></Profile>
                </Route>
                </Switch>
              </div>
            </div>
          </div>
          
        </div>
      </Router>
    </>
  );
}

export default App;
