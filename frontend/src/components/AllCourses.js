import React, { useState } from "react";
import Course from "./Course";

function AllCourses() {
  const [courses, setCourses] = useState([
    { title: "Java Course", description: "This is java course" },
    { title: "Django Course", description: "This is django course" },
    { title: "React Course", description: "This is react course" },
  ]);
  return (
    <>
      <h4>AllCourses</h4>
      <hr />
      {courses.length
        ? courses.map((course) => <Course course={course} />)
        : "There are no courses available"}
    </>
  );
}

export default AllCourses;
