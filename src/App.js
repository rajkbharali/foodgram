import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./utils/store";

import Header from "./components/Header";
import Body from "./components/Body";
import Help from "./components/Help";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import CardShimmer from "./components/CardShimmer";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import LoginSignUpModal from "./components/LoginSignUpModal";
import FoodCategory from "./components/FoodCategory";

//lazy loading //chunking //demand loading //dynamic bundling //code splitting
const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  // const isLoginForm = useSelector((state) => state.modal.loginModel);
  // console.log(isLoginForm);
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      // {
      //   path: "/help",
      //   element: <Help />,
      // },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "food/:id1/:id2",
        element: <FoodCategory />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<CardShimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
