import React from "react";

const About = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-50 pt-24">
      <div className="container px-5 py-12 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="coursity"
              className="object-cover object-bottom h-full w-full"
              src="https://umaine.edu/canam/wp-content/uploads/sites/149/2018/01/lib.png"
            />
          </div>
          <div className="flex flex-col items-center sm:flex-row mt-8">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-24 h-24 rounded-full inline-flex items-center justify-center bg-blue-50 text-gray-400">
                <svg
                  fill="#4F46E5"
                  className="h-10 inline"
                  enableBackground="new 0 0 511.795 511.795"
                  viewBox="0 0 511.795 511.795"
                >
                  <path d="m255.895 363.795c-30.089 0-59.521-10.438-82.877-29.393l-105.022-85.232c-42.525-33.28-42.519-101.475 0-134.75l105.022-85.232c46.584-38.918 119.171-38.916 165.754 0l105.022 85.232c26.838 21.781 38.188 57.396 28.917 90.734-2.96 10.641-13.98 16.871-24.628 13.91-10.642-2.959-16.869-13.985-13.909-24.627 5.004-17.995-1.113-37.212-15.587-48.958l-105.022-85.233c-33.416-27.119-81.924-27.119-115.34 0l-105.022 85.233c-22.928 17.944-22.925 54.692 0 72.633l105.022 85.232c33.358 27.072 81.758 27.12 115.169.138l17.543-14.921c8.413-7.156 21.035-6.139 28.192 2.276 7.156 8.414 6.138 21.036-2.276 28.192l-17.727 15.078c-.117.1-.235.198-.354.295-23.355 18.955-52.788 29.393-82.877 29.393zm82.877 118.607 105.022-85.232c42.525-33.28 42.519-101.475 0-134.75l-105.022-85.232c-46.584-38.918-119.171-38.916-165.754 0l-14.806 12.144c-19.849 17.644 4.202 46.935 25.365 30.928l14.681-12.04c33.417-27.09 81.903-27.082 115.307.027l105.022 85.232c22.928 17.944 22.925 54.692 0 72.633l-105.022 85.232c-33.416 27.119-81.924 27.119-115.34 0l-105.022-85.232c-13.26-10.762-19.602-27.91-16.551-44.751 1.969-10.869-5.246-21.276-16.114-23.245-10.862-1.966-21.275 5.245-23.245 16.114-5.652 31.201 6.112 62.982 30.703 82.94l105.022 85.232c23.355 18.954 52.788 29.393 82.877 29.393s59.522-10.438 82.877-29.393z" />
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Coursity Online
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  At Coursity, we’re all learners and instructors. We live out
                  our values every day to create a culture that is diverse,
                  inclusive, and committed to helping employees thrive.We’re
                  committed to changing the future of learning for the better.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                We help organizations of all types and sizes prepare for the
                path ahead — wherever it leads. Our curated collection of
                business and technical courses help companies, governments, and
                nonprofits go further by placing learning at the center of their
                strategies.Whether you want to learn or to share what you know,
                you’ve come to the right place. As a global destination for
                online learning, we connect people through knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
