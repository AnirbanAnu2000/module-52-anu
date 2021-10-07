import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const style = {
          fontWeight: "700",
          color: "#fff",
          fontSize: "22px",
          backgroundColor: "darkBlue",
          textDecoration: "none",
          padding: "10px 25px",
          borderRadius: "6px",
          margin: "0 10px",
        }
  const activeStyle = {
          color: "#fff",
          backgroundColor: "#444",
        }
  return (
    <nav>
      <NavLink activeStyle={activeStyle} style={style} to="/home">Home</NavLink>
      <NavLink activeStyle={activeStyle} style={style} to="/friends">Friends</NavLink>
      <NavLink activeStyle={activeStyle} style={style} to="/about">About</NavLink>
      <NavLink activeStyle={activeStyle} style={style} to="/about/culture">Culture</NavLink>
    </nav>
  );
};

export default Header;