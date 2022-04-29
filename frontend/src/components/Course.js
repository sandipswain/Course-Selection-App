import axios from "axios";
import React from "react";
import { base_url } from "./../services/api";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Container,
} from "reactstrap";

function Course({ course, removeCourse }) {
  const deleteCourse = (id) => {
    axios
      .delete(`${base_url}/courses/${id}`)
      .then((res) => {
        toast.success(`${course.title} Course is deleted successfully`);
        removeCourse(id);
        console.log(res);
      })
      .catch((error) => {
        toast.error(
          `Something Went Wrong ! ${course.title} Course couldn't be deleted`
        );
        console.log(error.message);
      });
  };
  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button
            color="danger"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>
          <Button color="warning" className="mx-2">
            Update
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
}

export default Course;
