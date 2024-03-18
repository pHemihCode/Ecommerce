import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import ErrorBoundary from "./Components/ErrorBoundary";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";
import Products from "./Pages/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
      <Route
        path="/products"
        element={<Products />}
        errorElement={<ErrorBoundary />}
      />
      <Route path="/cart" element={<Cart />} errorElement={<ErrorBoundary />} />
      <Route
        path="/contact"
        element={<Contact />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/login"
        element={<Login />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/register"
        element={<Register />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/success"
        element={<Success />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/cancel"
        element={<Cancel />}
        errorElement={<ErrorBoundary />}
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
