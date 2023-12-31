import { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Loader from "../components/loader/Loader";
import { useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import { ROUTE_NAME, routes } from "../Pages/typesRoute";

const RootComponent = () => {
  const isAuthenticated = useSelector((store) => store.user.isLoggedIn);

  const FinalRoute = ({ routeProps: { isPublic, component: Component } }) => {
    if (!isPublic && !isAuthenticated) {
      return <Navigate to={ROUTE_NAME.LOGIN} replace />;
    }

    return (
      <>
        <Suspense fallback={<Loader />}>
          <Layout>
            <Component />
          </Layout>
        </Suspense>
      </>
    );
  };

  return (
    <RouterProvider
      router={createBrowserRouter(
        routes.map((routeItem) => {
          return {
            path: routeItem.path,
            element: <FinalRoute routeProps={routeItem} />,
          };
        })
      )}
    />
  );
};

export default RootComponent;
