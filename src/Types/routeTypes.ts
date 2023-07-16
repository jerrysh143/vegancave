import { LazyExoticComponent } from "react";

export interface RouteType {
  path: string;
  name: string;
  component: LazyExoticComponent<React.ComponentType<any>>;
}
