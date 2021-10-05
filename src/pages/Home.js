import React from "react";
import { useHistory } from "react-router";
import Banner from "../components/Banner";
import CourseList from "../components/CourseList";
import Features from "../components/Features";

const Home = () => {
  const history = useHistory();
  return (
    <main className="flex-grow flex flex-col justify-between">
      {/* banner */}
      <Banner />

      {/* courses */}
      <CourseList count={4} title="Popular Courses">
        <button
          className="btn btn-primary block mx-auto"
          onClick={() => history.push("/courses")}
        >
          All Courses
        </button>
      </CourseList>

      {/* features */}
      <Features />
    </main>
  );
};

export default Home;
