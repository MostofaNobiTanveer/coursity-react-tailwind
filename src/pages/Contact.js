import React from "react";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative bg-gray-50 pt-20">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col justify-center items-center text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2 text-gray-900">
            Contact Us
          </h1>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-4"></div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Please get in touch and our expert support team will answer all your
            questions.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field leading-8"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field leading-8"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="leading-6 h-32 input-field"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full flex justify-center">
              <button className="btn btn-primary ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
