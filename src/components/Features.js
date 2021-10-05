import React from "react";
import { features } from "../data";

const Features = () => {
  return (
    <section className="w-full px-3 py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:items-start mb-6 px-5">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900">
            Our Features
          </h2>
          <div className="w-12 md:w-20 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3">
          {features.map(({ id, title, text, icon }) => {
            return (
              <article
                key={id}
                className="flex flex-col gap-3 items-center sm:items-start shadow-lg p-4 bg-white rounded-xl"
              >
                <div className="h-16 w-16">{icon}</div>
                <div className="flex-grow flex flex-col text-center sm:text-left">
                  <span className="text-2xl font-semibold">{title}</span>
                  <span className="text-gray-500">{text}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
