import React from "react";
import CourseList from "../components/CourseList";

const Courses = () => {
  return (
    <section className="pt-28 sm:pt-20 bg-gray-50">
      <CourseList count={Infinity} title="Our Courses" />
    </section>
  );
};

export default Courses;
