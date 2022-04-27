import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

function LeftMenu() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: "none",
    };
  };
  return (
    <>
      <ListGroup>
        <ListGroupItem>
          <NavLink style={navLinkStyles} to="/">
            Home
          </NavLink>
        </ListGroupItem>
        <ListGroupItem>
          <NavLink style={navLinkStyles} to="/addCourse">
            Add Course
          </NavLink>
        </ListGroupItem>
        <ListGroupItem>
          <NavLink style={navLinkStyles} to="/allCourses">
            View Courses
          </NavLink>
        </ListGroupItem>
        <ListGroupItem>
          <NavLink style={navLinkStyles} to="/aboutUs">
            About Us
          </NavLink>
        </ListGroupItem>
        <ListGroupItem>
          <NavLink style={navLinkStyles} to="/contactUs">
            Contact Us
          </NavLink>
        </ListGroupItem>
      </ListGroup>
    </>
  );
}

export default LeftMenu;
