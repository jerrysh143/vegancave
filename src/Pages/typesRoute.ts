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
  CHECKOUT: "/checkout",
  PROFILE: "/profile",
  FILLDETAIL: "/filldetail",
  PRODUCTDETAIL: "/productdetail",
  RESETPASSWORD: "/resetpassword",
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
    path: "/productdetail/:id",
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
    path: ROUTE_NAME.RESETPASSWORD,
    name: "ResetPassword",
    component: lazy(() => import("./AuthPage/ResetPassword")),
    isPublic: true,
  },
  {
    path: ROUTE_NAME.CART,
    name: "Cart",
    component: lazy(() => import("./AuthPage/Login")),
    isPublic: true,
  },
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
  },
  {
    path: ROUTE_NAME.PROFILE,
    name: "Profile",
    component: lazy(() => import("./user/Profile")),
    isPublic: false,
  },
  {
    path: ROUTE_NAME.CHECKOUT,
    name: "Checkout",
    component: lazy(() => import("./checkout/checkout")),
    isPublic: false,
  },
];
