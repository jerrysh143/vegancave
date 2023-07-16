import { lazy } from "react";

import { RouteType } from "../Types/routeTypes.ts";

export const routes: RouteType[] = [
  {
    path: "/home",
    name: "tesa",
    component: lazy(() => import("../pages/Homepage/index.tsx")),
  },
  {
    path: "/about",
    name: "tesa",
    component: lazy(() => import("../AboutUs/index.tsx")),
  },
  {
    path: "/contact",
    name: "tesa",
    component: lazy(() => import("../pages/ContactUs/index.tsx")),
  },
  {
    path: "/nutritionist",
    name: "tesa",
    component: lazy(() => import("../pages/Nutritionist/index.tsx")),
  },
  {
    path: "/videos",
    name: "tesa",
    component: lazy(() => import("../pages/Videos/index.tsx")),
  },
  {
    path: "/Store",
    name: "tesa",
    component: lazy(() => import("../pages/Store/index.tsx")),
  },
];
