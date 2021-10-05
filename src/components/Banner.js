import React from "react";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory();
  return (
    <div className="bg-gray-50 w-full pt-28 sm:pt-16">
      <div className="grid lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="pb-12 px-6 max-w-md mx-auto sm:max-w-2xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0">
          <div className="xl:max-w-xl">
            <img
              className="
              mt-6
              rounded-lg
              shadow-xl
              sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center
              lg:hidden
            "
              src="https://aptschool.org/wp-content/uploads/2021/06/blog-feature-image-online-teaching-techniques-oxtjokaddw3bw0ba6iu643fkpdzt125gursh3sn1mo.jpg"
              alt="Woman workcationing on the beach"
            />
            <h1
              className="
              mt-6
              text-2xl
              font-bold
              text-gray-900
              sm:mt-8 sm:text-4xl
              lg:text-3xl
              xl:text-4xl
            "
            >
              Always something new to learn,
              <br className="hidden lg:inline" />
              <span className="text-indigo-500"> Enhance your skill.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:text-xl sm:mt-4">
              At Coursity, we’re all learners and instructors. We live out our
              values every day to create a culture that is diverse, inclusive,
              and committed to helping employees thrive.
            </p>
            <div className="mt-4 space-x-3 sm:mt-6">
              <button
                className="
                btn btn-primary
                shadow-lg
                hover:-translate-y-0.5
                transform
                transition
              "
                onClick={() => history.push("./courses")}
              >
                Our courses
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => history.push("/about")}
              >
                About us
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative m-3 rounded-2xl shadow-lg">
          <img
            className="absolute rounded-2xl inset-0 w-full h-full object-cover object-center"
            src="https://aptschool.org/wp-content/uploads/2021/06/blog-feature-image-online-teaching-techniques-oxtjokaddw3bw0ba6iu643fkpdzt125gursh3sn1mo.jpg"
            alt="woment learning from Coursity"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
