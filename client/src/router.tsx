import {
    AccommodationPage,
    AccommodationTypePage,
    CreateAccountPage,
    HomePage,
    LoginPage,
    MarketPlacePage,
    NavigationPage,
    OnBoardingPage,
    ProfilePage,
    WifiPage,
    WifiPlacePage,
} from "./pages";
import {
    AppLayout,
    AuthLayout,
    BackLayout,
    OnboardingLayout,
    RootLayout,
} from "./layouts";

import ErrorPage from "./error-page";
import Loading from "./pages/landing";
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
                                children: [
                                    {
                                        path: "",
                                        element: <AccommodationPage />
                                    },
                                    {
                                        path: ":acmId",
                                        element: <AccommodationTypePage />
                                    }
                                ]
                            },
                            {
                                path: "profile",
                                children: [
                                    {
                                        path: "",
                                        element: <ProfilePage />
                                    },
                                    {
                                        path: ":profileId",
                                        element: <ProfilePage />
                                    }
                                ]
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
                                path: "market-place",
                                children:
                                    [
                                        {
                                            path: "",
                                            element: <MarketPlacePage />,
                                        },
                                        {
                                            path: ":marketId",
                                            element: "",

                                        }
                                    ]
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
