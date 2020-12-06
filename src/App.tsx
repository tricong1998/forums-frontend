import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/base/Header";
import { Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header appName='Forums'/>
      <Switch>
        <Route exact path='/' component={} />
      </Switch>
    </div>
  );
};

export default App;
