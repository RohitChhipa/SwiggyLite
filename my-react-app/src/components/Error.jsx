import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page" >
      <h1>Oops!!</h1>
      <h2>Something Went Wrong!!</h2>
      {error && (
        <div>
          <h3>{error.status ? `${error.status} - ${error.statusText}` : "Unknown Error"}</h3>
          <p>{error.message || "An unexpected error occurred."}</p>
        </div>
      )}
    </div>
  );
};

export default Error;


