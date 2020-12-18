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
      <nav className="nav">
        <div className="container">
          <Link to="#">{this.props.appName}</Link>
          <Link to="#">{HeaderTabEnum.POSTS}</Link>
          <Link to="#">{HeaderTabEnum.QUESTIONS}</Link>
          <Link to="#">{HeaderTabEnum.DISCUSSIONS}</Link>
          <SearchForm></SearchForm>
        </div>
      </nav>
    );
  }
}

export default Header;
