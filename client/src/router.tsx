import {
    AppLayout,
    AuthLayout,
    BackLayout,
    OnboardingLayout,
    RootLayout,
} from "./layouts";
import {
    CreateAccountPage,
    HomePage,
    LoginPage,
    NavigationPage,
    OnBoardingPage,
    WifiPage,
    WifiPlacePage,
} from "./pages";

import ErrorPage from "./error-page";
import Loading from "./pages/loading";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Loading />
            },
            {
                path: "/",
                element: <AppLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <HomePage />,
                    },
                    {
                        path: "",
                        element: <BackLayout />,
                        children: [
                            {
                                path: "navigation",
                                element: <NavigationPage />,
                            },
                            {
                                path: "profile",
                                element: "",
                            },
                            {
                                path: "accommodation",
                                element: "",
                            },
                            {
                                path: "wifi",
                                children:
                                    [
                                        {
                                            path: "",
                                            element: <WifiPage />,
                                        },
                                        {
                                            path: ":wifiId",
                                            element: <WifiPlacePage />,

                                        }
                                    ]
                            },
                            {
                                path: "wifi",
                                element: <WifiPage />,
                            },
                            {
                                path: "wifi",
                                element: <WifiPage />,
                            },
                            {
                                path: "navigation",
                                element: "",
                            },
                        ],
                    },
                ],
            },
            {
                path: "/onboarding",
                element: <OnboardingLayout />,
                children: [
                    {
                        path: "",
                        element: <OnBoardingPage />,
                    },
                ],
            },
            {
                path: "/",
                element: <AuthLayout />,
                children: [
                    {
                        path: "Login",
                        element: <LoginPage />,
                    },
                    {
                        path: "create-account",
                        element: <CreateAccountPage />,
                    },
                ],
            },
        ],
    },
]);

export default router;
