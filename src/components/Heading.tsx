import React from "react";

const Heading = ({ text }: { text: string }) => {
  return (
    <h1
      style={
        {
          //maxWidth: "800px",
        }
      }
    >
      {text}
    </h1>
  );
};

export default Heading;
