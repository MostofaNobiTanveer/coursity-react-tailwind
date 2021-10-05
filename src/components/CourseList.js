import React from "react";
import { useGlobalContext } from "../context";
import Course from "./Course";

const CourseList = ({ count, title, children }) => {
  const { courses } = useGlobalContext();

  return (
    <section className="w-full py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start mb-6 px-8">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900">
            {title}
          </h2>
          <div className="w-12 md:w-20 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
        </div>
        <div className="grid self-center xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 px-6 mt-6 mb-12">
          {courses.slice(0, `${count}`).map((course) => (
            <Course key={course.id} {...course} />
          ))}
        </div>
        {children}
      </div>
    </section>
  );
};

export default CourseList;
