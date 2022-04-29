import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { base_url } from "../services/api";
import "./Course.css";

function AddCourse() {
  const [course, setCourse] = useState({});
  useEffect(() => {
    document.title = "Add Course";
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(course);
    postCourse(course);
  };

  const postCourse = (data) => {
    axios
      .post(`${base_url}/courses`, data)
      .then((res) => {
        console.log(res);
        toast.success("Course has been added successfully", {
          position: "bottom-left",
        });
        setCourse({ id: "", title: "", description: "" });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Went Wrong !", {
          position: "bottom-left",
        });
      });
  };
  return (
    <>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="id" tag="h5">
            Course Id
          </Label>
          <Input
            id="id"
            name="id"
            type="text"
            placeholder="Enter here"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
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
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
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
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button type="reset" color="warning" className="mx-2">
            Clear Course
          </Button>
        </Container>
      </Form>
    </>
  );
}

export default AddCourse;
