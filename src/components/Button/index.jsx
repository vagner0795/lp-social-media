import React from "react";
import { StylesButton } from "./styles.js";

const Button = ({ children, ...props }) => {
  return (
    <>
      <StylesButton {...props}>{children}</StylesButton>
    </>
  );
};

export default Button;
