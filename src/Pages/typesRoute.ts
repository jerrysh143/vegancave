import { lazy } from "react";

import { RouteType } from "../Types/routeTypes";

export const ROUTE_NAME = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  NUTRITIONIST: "/nutritionist",
  STORE: "/store",
  LOGIN: "/login",
  SIGNUP: "/signup",
};

export const routes: RouteType[] = [
  {
    path: ROUTE_NAME.HOME,
    name: "Home",
    component: lazy(() => import("./homepage/Home")),
    isPublic: true,
  },
  {
    path: ROUTE_NAME.ABOUT,
    name: "AboutUs",
    component: lazy(() => import("./aboutUs/About")),
    isPublic: true,
  },
  {
    path: ROUTE_NAME.CONTACT,
    name: "Contact",
    component: lazy(() => import("./contactUs/Contact")),
    isPublic: true,
  },
  {
    path: ROUTE_NAME.NUTRITIONIST,
    name: "Nutritionist",
    component: lazy(() => import("./nutritionist/Nutritionist")),
    isPublic: true,
  },
  {
    path: ROUTE_NAME.STORE,
    name: "Store",
    component: lazy(() => import("./store/Store")),
    isPublic: false,
  },
  {
    path: ROUTE_NAME.LOGIN,
    name: "Login",
    component: lazy(() => import("./AuthPage/Login")),
    isPublic: true,
  },
  {
    path: ROUTE_NAME.SIGNUP,
    name: "SignUp",
    component: lazy(() => import("./AuthPage/SignUp")),
    isPublic: true,
  },
];
