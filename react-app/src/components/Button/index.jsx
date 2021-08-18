import React from "react";

function Button(props) {
  const { text, url } = props;
  return <a href={url}>{text}</a>;
}

export default Button;
