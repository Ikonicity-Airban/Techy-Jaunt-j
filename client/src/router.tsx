import {
  AccommodationPage,
  AccommodationTypePage,
  AccountChoicePage,
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
  NavigationLayout,
  OnboardingLayout,
  RootLayout,
} from "./layouts";

import ErrorPage from "./error-page";
import FourOhFour from "./404";
import { createBrowserRouter } from "react-router-dom";

// import Loading from "./pages/landing";

// import AdminPage from "./pages/admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "",
      //   element: <NavigationPage />,
      // },
      {
        path: "",
        element: <AppLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "",
            element: <BackLayout />,
            children: [
              {
                path: "navigation",
                element: <NavigationLayout />,
                children: [
                  {
                    path: "",
                    element: <NavigationPage />,
                  },
                  {
                    path: ":result",
                    element: <NavigationPage />,
                  },
                ],
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
                    element: <AccommodationPage />,
                  },
                  {
                    path: ":acmId",
                    element: <AccommodationTypePage />,
                  },
                ],
              },
              {
                path: "profile",
                children: [
                  {
                    path: "",
                    element: <ProfilePage />,
                  },
                  {
                    path: ":profileId",
                    element: <ProfilePage />,
                  },
                ],
              },
              {
                path: "wifi",
                children: [
                  {
                    path: "",
                    element: <WifiPage />,
                  },
                  {
                    path: ":wifiId",
                    element: <WifiPlacePage />,
                  },
                ],
              },
              {
                path: "market-place",
                children: [
                  {
                    path: "",
                    element: <MarketPlacePage />,
                  },
                  {
                    path: ":marketId",
                    element: "",
                  },
                ],
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
          {
            path: ":id",
            element: <AccountChoicePage />,
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
  {
    path: "*",
    element: <FourOhFour />,
  },
]);

export default router;
