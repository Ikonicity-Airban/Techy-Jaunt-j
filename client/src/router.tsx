import App from "./pages/App";
import ErrorPage from "./error-page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/",
                element: <App />,
            },

        ]
    }
])

export default router 