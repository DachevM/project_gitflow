import React from "react";

interface IMissing {
  title: string;
}

const MissingError = ({ title }: IMissing) => {
  return <p>Здесь пока нет {title}</p>;
};

export default MissingError;
