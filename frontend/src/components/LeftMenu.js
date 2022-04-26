import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function LeftMenu() {
  return (
    <>
      <ListGroup>
        <ListGroupItem tag="a" href="#!" action>
          Home
        </ListGroupItem>
        <ListGroupItem tag="a" href="#!" action>
          Add Course
        </ListGroupItem>
        <ListGroupItem tag="a" href="#!" action>
          View Courses
        </ListGroupItem>
        <ListGroupItem tag="a" href="#!" action>
          About Us
        </ListGroupItem>
        <ListGroupItem tag="a" href="#!" action>
          Contact Us
        </ListGroupItem>
      </ListGroup>
    </>
  );
}

export default LeftMenu;
