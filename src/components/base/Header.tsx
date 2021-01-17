import React from "react";
import { HeaderTabEnum } from "./base.constant";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

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
            <Link className="mr-16" to="#">
              {this.props.appName}
            </Link>
            <div className="flex flex-row">
              <Link className="mr-10" to="#">
                {HeaderTabEnum.POSTS}
              </Link>
              <Link className="mr-10" to="#">
                {HeaderTabEnum.QUESTIONS}
              </Link>
              <Link className="mr-10" to="#">
                {HeaderTabEnum.DISCUSSIONS}
              </Link>
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
