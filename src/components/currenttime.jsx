import React from "react";

const CurrentTime = () => {
  let time = new Date();

  return (
    <div className="badge text-bg-primary text-wrap">
      This is the current time: {time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </div>
  );
};

export default CurrentTime;
