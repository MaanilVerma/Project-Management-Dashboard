import React from "react";

const Button = ({ className, text }) => {
  return (
    <button className={className} type="button">
      {text}
    </button>
  );
};

export { Button };
