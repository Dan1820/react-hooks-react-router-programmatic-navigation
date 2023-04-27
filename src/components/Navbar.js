import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar({ onLogout }) {
  const history = useHistory();
  function handleClick(){
    onLogout()
    history.push("/login")
  }

  // function handleLogout() {
  //   // setIsLoggedIn(false);
  //   history.push("/login");
  // }

  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "brown",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "brown",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "brown",
        }}
      >
        Login
      </NavLink>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default Navbar;
