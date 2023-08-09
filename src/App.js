import React from "react";
import Home from "./pages/Home";
import Item from './pages/Item'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Nav from './component/Nav'
import Error404 from "./pages/Error404";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Details from "./pages/Details";
import CostemItemContext from './ContextApi'
import Payment from "./pages/Payment";
import CartModel from "./pages/CartModel";
const router = createBrowserRouter([
  {
    path: "/", element: <Nav />, children: [
      { index: true, element: <Home /> },
      {
        path: "/item", children: [
          { index: true, element: <Item /> },
          { path: ':itemId', element: <Details /> },
        ]
      },
      {
        path: '/detail/:itemId', element: <Payment />,
        //  children: [
        //   { path: ':paymentid', element: <Payment /> }
        // ]
      },

      { path: '/cart', element: <CartModel /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },

      // { path: '/*', element: <Error404 /> }
    ]
  },
  { path: "*", element: <Error404 /> }

])

function App() {
  return (
    <>
      <CostemItemContext>
        <RouterProvider router={router} />
      </CostemItemContext>
    </>
  );
}

export default App;
