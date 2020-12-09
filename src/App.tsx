import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/base/Header";
import { Switch, Route } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { ArticleState, Article } from "./components/Article/Article.type";
import Home from "./components/Home/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header appName='Forums'/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
};

export default App;
