import React from "react";

interface IError {
  error: string;
}

const Error = ({ error }: IError) => {
  if (!error) {
    return null;
  }
  return <h2>{error}</h2>;
};

export default Error;
