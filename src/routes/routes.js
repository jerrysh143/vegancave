import { Suspense, useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ROUTE_NAME, routes } from "../Pages/typesRoute";
import Header from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";
import Loader from "../components/loader/Loader.jsx";
import { useSelector } from "react-redux";

const RootComponent = () => {
  const [defaultRoute, setDefaultRoute] = useState(ROUTE_NAME.HOME);

  const isAuthenticated = useSelector((store) => store.user.isLoggedIn);

  const FinalRoute = ({ routeProps: { isPublic, component: Component } }) => {
    if (isPublic && isAuthenticated) {
      return <Navigate to={defaultRoute} replace />;
    }
    if (!isPublic && !isAuthenticated) {
      return <Navigate to={ROUTE_NAME.LOGIN} replace />;
    }

    return (
      <>
        <Suspense fallback={<Loader />}>
          <Header />
          <Component />
          <Footer />
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
