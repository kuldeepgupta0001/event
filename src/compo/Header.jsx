import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>Event Creation...</h1>
      <main>
        <HashLink to={"/"}>Home</HashLink>
        <Link to={"/eventList"}>Events</Link>
      </main>
    </nav>
  );
};

export default Header;
