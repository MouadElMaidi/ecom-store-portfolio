import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  RootLayout,
  HomePage,
  AboutPage,
  ProductsPage,
  SingleProductPage,
  ErrorPage,
  CartPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/:productId",
        element: <SingleProductPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
