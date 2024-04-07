import {
  RouterProvider,
  createBrowserRouter,
  //RouterProvider,
  //Routes,
  //Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
//import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Footer from "./components/footer/Footer";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Shop />

      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
