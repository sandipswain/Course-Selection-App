import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Container,
} from "reactstrap";

function Course({ course }) {
  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button color="danger">Delete</Button>
          <Button color="warning" className="mx-2">
            Update
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
}

export default Course;
