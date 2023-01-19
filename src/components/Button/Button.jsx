import React from "react";

const Button = ({ className, text, icon, iconClassName }) => {
  return (
    <button className={className} type="button">
      {icon && <span className={iconClassName}>{icon}</span>}
      {text}
    </button>
  );
};

export { Button };
