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
  GETAQUOTE: "/getaquote",
  CART: "/cart",
<<<<<<< HEAD
  PROFILE: "/Login",
=======
  CHECKOUT: "/checkout",
  PROFILE: "/profile",
  FILLDETAIL: "/filldetail",
  PRODUCTDETAIL: "/productdetail",
>>>>>>> 1733af046a9ade092236438090fdbaa36af1786f
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
    isPublic: true,
  },
  {
    path: ROUTE_NAME.PRODUCTDETAIL,
    name: "Product Detail",
    component: lazy(() => import("./ProductDetail/productDetail")),
    isPublic: true,
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
  {
<<<<<<< HEAD
    path: ROUTE_NAME.GETAQUOTE,
    name: "Getaquote",
    component: lazy(() => import("./getQuote/GetAQuote")),
    isPublic: true,
  },
   { path: ROUTE_NAME.CART,
=======
    path: ROUTE_NAME.CART,
>>>>>>> 1733af046a9ade092236438090fdbaa36af1786f
    name: "Cart",
    component: lazy(() => import("./AuthPage/Login")),
    isPublic: true,
  },
  {
    path: ROUTE_NAME.PROFILE,
    name: "Profile",
    component: lazy(() => import("./AuthPage/SignUp")),
    isPublic: false,
  },
<<<<<<< HEAD
  // {
  //   path: "*",
  //   name: "Not Found",
  //   component: lazy(() => import("./homepage/Home")),
  //   isPublic: true,
  // },
=======
  {
    path: ROUTE_NAME.GETAQUOTE,
    name: "Getaquote",
    component: lazy(() => import("./getQuote/GetAQuote")),
    isPublic: true,
  },
  {
    path: ROUTE_NAME.FILLDETAIL,
    name: "FillDetail",
    component: lazy(() => import("./AuthPage/FillDetail")),
    isPublic: true,
  }
>>>>>>> 1733af046a9ade092236438090fdbaa36af1786f
];
