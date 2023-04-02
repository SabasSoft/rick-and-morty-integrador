import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
      <SearchBar onSearch={props.onSearch} />
      <Link to="/About">
        <button>ABOUT</button>
      </Link>
      <Link to="/Home">
        <button>HOME</button>
      </Link>
    </div>
  );
}
