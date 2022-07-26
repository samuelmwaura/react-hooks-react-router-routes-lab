import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">{/*{code here}*/}
  <NavLink to='/'>Home Page</NavLink>
  <NavLink to='/movies'>Movies Page</NavLink>
  <NavLink to='/directors'>Directors page</NavLink>
  <NavLink to='/actors'>Actors Page</NavLink>  
  </div>;
}

export default NavBar;
