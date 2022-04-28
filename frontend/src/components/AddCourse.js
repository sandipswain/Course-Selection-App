import React, { useEffect } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import "./Course.css";

function AddCourse() {
  useEffect(() => {
    document.title = "Add Course";
  }, []);
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="id" tag="h5">
            Course Id
          </Label>
          <Input id="id" name="id" type="text" placeholder="Enter here" />
        </FormGroup>
        <FormGroup>
          <Label for="id" tag="h5">
            Course Title
          </Label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Enter the Title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description" tag="h5">
            Course Description
          </Label>
          <Input
            id="description"
            name="description"
            type="textarea"
            placeholder="Enter the description"
            className="addCourseDesc"
          />
        </FormGroup>
        <Container className="text-center">
          <Button color="success">Add Course</Button>
          <Button color="warning" className="mx-2">
            Clear Course
          </Button>
        </Container>
      </Form>
    </>
  );
}

export default AddCourse;
