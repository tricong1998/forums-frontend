import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchForm extends React.Component {
  render() {
    return (
      // <form>
      <div className="relative mr-4">
        <input className="w-full rounded-sm border-2" type="text"></input>
        <button type="submit" className="btn btn-primary">
          <div className="absolute top-0 right-0 h-full justify-center">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </button>
      </div>
      // </form>
    );
  }
}

export default SearchForm;
