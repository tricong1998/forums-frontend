import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faWindowClose } from "@fortawesome/free-solid-svg-icons";

class SearchForm extends React.Component {
  render() {
    return (
      // <form>
      <div className="relative mr-4">
        <input
          placeholder="Search"
          className="search-form w-full rounded-sm border-2"
          type="text"
        ></input>
        <button className="absolute top-0 right-10 h-full justify-center items-center">
          <FontAwesomeIcon
            className="top-0 right-10 h-full justify-center items-center"
            icon={faWindowClose}
          />
        </button>
        <button type="submit" className="btn btn-primary">
          <div className="absolute top-0 right-0 h-full justify-center items-center	 w-8">
            <FontAwesomeIcon className="h-full" icon={faSearch} />
          </div>
        </button>
      </div>
      // </form>
    );
  }
}

export default SearchForm;
