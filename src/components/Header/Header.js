import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Auth from "../Auth/auth";

const Header = () => {
  const auth = Auth();
  return (
    <Navbar collapseOnSelect expand="sm" bg="info">
      <NavLink id="RouterNavLink" to="/">
        <img
          src="https://i.ibb.co/Zh2JfVJ/logo3.png"
          width="30"
          height="30"
          alt=""
        />
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="navItem" to="/">
            Home
          </NavLink>
          <NavLink className="navItem" to="/dashboard">
            Doctors Portal
          </NavLink>
          {auth.user && (
            <NavLink className="navItem" to="/">
              {auth.user.name}
            </NavLink>
          )}
          {auth.user ? (
            <NavLink className="navItem" to="/signIn">
              Sign out
            </NavLink>
          ) : (
            <NavLink className="navItem" to="/signIn">
              Sign in
            </NavLink>
          )}
          <NavLink className="navItem" to="/">
            About
          </NavLink>
          <NavDropdown
            className="navContent"
            title=""
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item className="navItems" href="#dental">
              Dental Care
            </NavDropdown.Item>
            <NavDropdown.Item className="navItems" href="#services">
              Our Services
            </NavDropdown.Item>
            <NavDropdown.Item className="navItems" href="#blog">
              Blog
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="navItems" href="#contact">
              Contact us
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
