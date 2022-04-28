import React, { useEffect, useState } from "react";
import Course from "./Course";
import { base_url } from "../services/api";
import axios from "axios";
import { toast } from "react-toastify";

function AllCourses() {
  useEffect(() => {
    // alert("Hello World");
    document.title = "View Courses";
    fetchAllCourses();
  }, []);

  // function to call server
  const fetchAllCourses = () => {
    axios
      .get(`${base_url}/courses`)
      .then((res) => {
        //success
        console.log(res);
        toast.success("Courses has been loaded successfully", {
          position: "bottom-left",
        });
        setCourses(res.data);
      })
      .catch((error) => {
        console.log(error);
        toast.success("Something went wrong", {
          position: "bottom-left",
        });
      });
  };

  const [courses, setCourses] = useState([]);
  return (
    <>
      <h4>AllCourses</h4>
      <hr />
      {courses.length
        ? courses.map((course) => <Course course={course} key={course.id} />)
        : "There are no courses available"}
    </>
  );
}

export default AllCourses;
