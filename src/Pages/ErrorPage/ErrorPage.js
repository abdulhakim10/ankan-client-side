import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto text-center">
        <img
          className="w-full"
          src="https://www.cdgi.com/wp-content/uploads/2019/05/404-Pages.jpg"
          alt=""
        />
        <br />
        <Link className="bg-yellow-400 font-semibold text-white px-8 py-4 rounded-lg" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;