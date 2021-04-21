import React from "react";
import { HeaderTabEnum } from "./base.constant";
import SearchForm from "./SearchForm";
import { Link, NavLink } from "react-router-dom";
import { Path } from "../../pages/Home/Constant";

type Props = {
  appName: string;
};

class Header extends React.Component<Props> {
  render() {
    return (
      // <nav className="nav">
      <header>
        <div className="flex flex-row py-4 mr-auto ml-auto container items-center">
          <div className="w-1/2 flex flex-row">
            <NavLink
              className="mr-16 text-gray-500"
              activeClassName='text-black font-bold'
              to='/'
              >
              {this.props.appName}
            </NavLink>
            <div className="flex flex-row">
              <NavLink
                className="mr-16 text-gray-500"
                activeClassName='text-black font-bold'
                to={Path.POST}
              >
                {HeaderTabEnum.POSTS}
              </NavLink>
              <NavLink
                className="mr-16 text-gray-500"
                activeClassName="text-black"
                to="#"
              >
                {HeaderTabEnum.QUESTIONS}
              </NavLink>
              <NavLink
                className="mr-16 text-gray-500"
                activeClassName={"text-black"}
                to="#"
              >
                {HeaderTabEnum.DISCUSSIONS}
              </NavLink>
            </div>
          </div>
          <div className="items-center flex-grow flex flex-row justify-end">
            <div className="flex-auto">
              <SearchForm></SearchForm>
            </div>
            <Link className="" to="#">
              Login
            </Link>
          </div>
        </div>
      </header>

      // </nav>
    );
  }
}

export default Header;
