import React from "react";

const Error = () => {
  return (
    <div>
      <h1>Error</h1>
      <button onClick={() => window.location.reload()}>Reload page</button>
    </div>
  );
};

export default Error;
