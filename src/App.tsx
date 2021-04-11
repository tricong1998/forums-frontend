import React from "react";
import "./App.css";
import Header from "./components/base/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <div className="App grid grid-rows-3">
      <Header appName='Forums'/>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
};

export default App;
