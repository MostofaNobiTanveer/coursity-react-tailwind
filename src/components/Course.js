import React from "react";
import { useHistory } from "react-router";

const Course = ({ title, image, author, price }) => {
  const history = useHistory();
  return (
    <article
      className="cursor-pointer"
      onClick={() => history.push(`/course/${title}`)}
    >
      <div className="block h-48 rounded-lg shadow-lg bg-white overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex items-start justify-between mt-3">
        <div className="flex-grow w-full">
          <h2 className="font-medium">{title}</h2>
          <p className="flex items-center">
            <span className="text-xs font-medium text-gray-600">by</span>
            <span className="text-xs font-medium ml-1 text-indigo-500">
              {author}
            </span>
          </p>
        </div>
        <span className="badge">${price}</span>
      </div>
    </article>
  );
};

export default Course;
