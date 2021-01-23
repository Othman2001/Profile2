import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from "./components/SideBar";
import {Home} from "@material-ui/icons";
import HomePage from "./components/HomePage";
import Work from "./components/Work";
import Contact from './components/Contact'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, BrowserRouter
} from "react-router-dom";
import AboutPage from "./components/AboutPage";

function App() {
  return (
      <Router>
          <div className="App">
                  <SideBar />
                   <Switch>
                       <Route path="/" component={HomePage} exact></Route>
                       <Route path="/about" component={AboutPage}></Route>
                       <Route path="/work" component={Work} ></Route>
                       <Route path="/contact" component={Contact}></Route>
                   </Switch>


          </div>
      </Router>
  );
}

export default App;
