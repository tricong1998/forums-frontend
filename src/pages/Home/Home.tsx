import React from "react";
import {
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { HomeTabs, Path } from "./Constant";
import NewestActicles from "./components/Newest";
import NoMatch from "../../components/base/NotFound.pages";
import {Tabs} from "../../components/base/Tabs";

const Home = () => {
  let { path, url } = useRouteMatch();


  const getPath = (suffixPath: string) => `${url}${suffixPath}`;
  const getRoute = (suffixRoute: string) => `${path}${suffixRoute}`;
  console.log( getPath(Path.NEWEST))

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
          <Tabs
            tabList={[
              { to: getPath(Path.NEWEST), name: HomeTabs.NEWEST },
              { to: getPath(Path.SERIES), name: HomeTabs.SERIES },
              { to: "#", name: HomeTabs.TRENDING },
              { to: "#", name: HomeTabs.VIDEOS },
            ]}
            className="mr-1 ml-4 text-white"
          ></Tabs>
        </div>
      </div>
      <div className="flex container pt-10">
        <div className="col-lg-9 mr-10">
          <Switch>
            <Route
              exact
              path={Path.POST}
              render={() => {
                return <Redirect to={getPath(Path.NEWEST)} />;
              }}
            />
            <Route
              path={getRoute(Path.NEWEST)}
              component={NewestActicles}
              default={true}
            />
            <Route
              path={getRoute(Path.SERIES)}
              component={NewestActicles}
              default={true}
            />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
        <div className="col-lg-3">Newest questions</div>
      </div>
    </div>
  );
};

export default Home;
