import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import Footer from "./components/Footer.js";
import UserContext from "./utils/UserContext.js";
import {Provider} from "react-redux";
import store from "./utils/store.js"
import Cart from "./components/Cart.js";

const GroceryStory = lazy(() => import("./components/GroceryStore.js"));

const AppLayout = () => {
  const [userName, SetUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Shivam",
    };
    SetUserName(data.name);
  }, []);

  return (

    <UserContext.Provider value={{ loggedInUser: userName, SetUserName }}>
      <Provider store={store}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
      </Provider>
    </UserContext.Provider>
  );
};

const approute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <GroceryStory />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
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

root.render(<RouterProvider router={approute} />);
