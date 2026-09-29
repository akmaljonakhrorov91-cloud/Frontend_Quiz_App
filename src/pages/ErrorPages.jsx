import React from "react";
// rrd
import { Link, useRouteError } from "react-router-dom";
function ErrorPages() {
  const error = useRouteError();
  if (error.status == 404) {
    return (
      <div>
        <h3> 404 Page not found</h3>
        <Link to="/" className="btn">
          Back to home
        </Link>
      </div>
    );
  }
  return (
    <div className="error-container container">
      <div>oops! developers are trying to solve this problem</div>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </div>
  );
}

export default ErrorPages;
