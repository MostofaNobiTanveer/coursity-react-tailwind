import React from "react";
import { Link } from "react-router-dom";
import { links, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="text-white bg-indigo-500">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-between mt-6 px-4 md:flex-row">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold hover:text-indigo-100"
            >
              <svg
                className="h-8 inline fill-current"
                enableBackground="new 0 0 511.795 511.795"
                viewBox="0 0 511.795 511.795"
              >
                <path d="m255.895 363.795c-30.089 0-59.521-10.438-82.877-29.393l-105.022-85.232c-42.525-33.28-42.519-101.475 0-134.75l105.022-85.232c46.584-38.918 119.171-38.916 165.754 0l105.022 85.232c26.838 21.781 38.188 57.396 28.917 90.734-2.96 10.641-13.98 16.871-24.628 13.91-10.642-2.959-16.869-13.985-13.909-24.627 5.004-17.995-1.113-37.212-15.587-48.958l-105.022-85.233c-33.416-27.119-81.924-27.119-115.34 0l-105.022 85.233c-22.928 17.944-22.925 54.692 0 72.633l105.022 85.232c33.358 27.072 81.758 27.12 115.169.138l17.543-14.921c8.413-7.156 21.035-6.139 28.192 2.276 7.156 8.414 6.138 21.036-2.276 28.192l-17.727 15.078c-.117.1-.235.198-.354.295-23.355 18.955-52.788 29.393-82.877 29.393zm82.877 118.607 105.022-85.232c42.525-33.28 42.519-101.475 0-134.75l-105.022-85.232c-46.584-38.918-119.171-38.916-165.754 0l-14.806 12.144c-19.849 17.644 4.202 46.935 25.365 30.928l14.681-12.04c33.417-27.09 81.903-27.082 115.307.027l105.022 85.232c22.928 17.944 22.925 54.692 0 72.633l-105.022 85.232c-33.416 27.119-81.924 27.119-115.34 0l-105.022-85.232c-13.26-10.762-19.602-27.91-16.551-44.751 1.969-10.869-5.246-21.276-16.114-23.245-10.862-1.966-21.275 5.245-23.245 16.114-5.652 31.201 6.112 62.982 30.703 82.94l105.022 85.232c23.355 18.954 52.788 29.393 82.877 29.393s59.522-10.438 82.877-29.393z" />
              </svg>
              <span>Coursity</span>
            </Link>
          </div>

          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              {links.map(({ id, text, href }) => {
                return (
                  <Link
                    key={id}
                    to={href}
                    className="px-4 text-sm text-white font-medium hover:text-indigo-100"
                  >
                    {text}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* divider */}
        <hr className="h-px bg-indigo-400 border-none my-5" />
        {/* /divider */}

        {/* social links */}
        <div className="p-2 w-full pb-6 text-center">
          <span className="flex gap-10 justify-center items-center">
            {socialLinks.map(({ id, icon, href }) => {
              return (
                <Link
                  key={id}
                  to={{
                    pathname: `${href}`,
                  }}
                  target="_blank"
                >
                  {icon}
                </Link>
              );
            })}
          </span>
        </div>
        {/* /sicial links */}
      </div>
    </footer>
  );
};

export default Footer;
