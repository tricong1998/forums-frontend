import React from "react";
import "./App.css";
import Header from "./components/base/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Path } from "./pages/Home/Constant";

const App: React.FC = () => {
  return (
    <div className="App grid grid-rows-3">
      <Header appName="Forums" />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to={Path.POST} />;
          }}
        />
        <Route path={Path.POST} component={Home} />
      </Switch>
    </div>
  );
};

export default App;
