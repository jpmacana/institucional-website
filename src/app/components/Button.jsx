import React from "react";

const Button = ({ link, text }) => {
  return (
    <a className="" href={link}>
      {text}
    </a>
  );
};

export default Button;
