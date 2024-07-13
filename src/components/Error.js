import {useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <>
      <h1>Ooops!</h1>
      <h2>There's an errror!</h2>
      <h3>{error.status}: {error.statusText}</h3>
    </>
  );
};

export default Error;
