import { Card } from "flowbite-react";
import { useRouteError } from "react-router-dom";

interface IError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as IError;
  console.error(error);

  return (
    <div
      id="error-page"
      className="min-h-screen max-w-md w-full grid place-items-center font-sans p-2"
    >
      <Card className="p-2 space-y-2 rounded-lg">
        <h3 className="text-center">Oops!</h3>
        <p>Sorry, an unexpected error has occurred.</p>
        <code className="shadow-bevel p-2 rounded-md text-sm text-red-600">
          <>{error.statusText || error.message}</>
        </code>
      </Card>
    </div>
  );
}
