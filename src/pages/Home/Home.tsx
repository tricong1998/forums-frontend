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
            <Link className="mr-1 ml-1 text-white	" to={Path.NEWEST}>
              {HomeTabs.NEWEST}
            </Link>
            <Link className="mr-1 ml-1 text-white	" to="#">
              {HomeTabs.SERIES}
            </Link>
            <Link className="mr-1 ml-1 text-white	" to="#">
              {HomeTabs.TRENDING}
            </Link>
            <Link className="mr-1 ml-1 text-white	" to="#">
              {HomeTabs.VIDEOS}
            </Link>
          </div>
        </div>
        <div className="flex container pt-10">
          <div className="col-lg-9 mr-10">
            <Switch>
              <Route path={Path.NEWEST} component={NewestActicles} default={true} />
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
