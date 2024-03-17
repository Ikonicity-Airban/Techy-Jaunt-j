import { AppLayout, AuthLayout, BackLayout, OnboardingLayout, RootLayout } from "./layouts";
import { CreateAccountPage, HomePage, LoginPage, NavigationPage, OnBoardingPage } from "./pages";

import ErrorPage from "./error-page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <AppLayout />,
                children: [
                    {
                        path: "",
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
                                path: "free-wifi",
                                element: "",
                            },
                            {
                                path: "navigation",
                                element: "",
                            },
                        ]
                    }
                ]
            },
            {
                path: "/onboarding",
                element: <OnboardingLayout />,
                children: [
                    {
                        path: "",
                        element: <OnBoardingPage />,
                    },
                ]
            },
            {
                path: "/",
                element: <AuthLayout />,
                children: [
                    {
                        path: "Login",
                        element: < LoginPage />,
                    },
                    {
                        path: "create-account",
                        element: <CreateAccountPage />,
                    },
                ]
            },

        ]
    }
])

export default router 