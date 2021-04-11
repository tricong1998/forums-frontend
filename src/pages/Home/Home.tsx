import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { HomeTabs, Path } from "./Constant";
import NewestActicles from "./components/Newest";
import NoMatch from "../../components/base/NotFound.pages";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="banner bg-red-800">
          <div className="mr-auto ml-auto container items-center">
            <div className="w-full">
              <img src="7790d490-af3c-4e8b-8dfa-021f38200beb.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="mr-auto ml-auto flex py-4 bg-blue-900">
          <div className="mr-auto ml-auto container">
            <Link className="mr-1 ml-1" to={Path.NEWEST}>
              {HomeTabs.NEWEST}
            </Link>
            <Link className="mr-1 ml-1" to="#">
              {HomeTabs.SERIES}
            </Link>
            <Link className="mr-1 ml-1" to="#">
              {HomeTabs.TRENDING}
            </Link>
            <Link className="mr-1 ml-1" to="#">
              {HomeTabs.VIDEOS}
            </Link>
          </div>
        </div>
        <div className="flex container">
          <div className="col-lg-9">
            <Switch>
              <Route path={Path.NEWEST} component={NewestActicles} />
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
          <div className="col-lg-3">Newest questions</div>
        </div>
      </div>
    );
  }
}

export default Home;
