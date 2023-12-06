import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
// import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestrauntMenu";

// const heading  = React.createElement("h1",{key:"first"},'My Name is Gaurava Singh Rawat');
// const heading2 = React.createElement("h4",{key:"first2"},'my name is Gaurav Singh Rawat');
// const headerCon = React.createElement("div",{},[heading,heading2]);

const Cart = lazy(()=> import('./Components/Cart'))

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { 
       path:"/",
       element: <Body />,
       errorElement: <Error />},
      { 
       path: "/about",
       element: <About />,
       errorElement: <Error /> },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Suspense> <Cart /> </Suspense>,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
        elementElement: <Error />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
