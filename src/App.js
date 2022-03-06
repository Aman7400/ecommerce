import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Cart from "./components/dashboard/Cart";
import Category from "./components/dashboard/Category";
import Dashboard from "./pages/dashboard/index";
import DashboardHome from "./components/dashboard/DashboardHome";
import Home from "./pages/home/index";
import Login from "./pages/auth/Login";
import OrderList from "./components/dashboard/OrderList";
import Popular from "./components/dashboard/Popular";
import Profile from "./components/dashboard/Profile";
import Register from "./pages/auth/Register";

// TODO - Make all imports Lazy, Use Suspense

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/categories/:category" element={<Category />} />
          <Route path="/popular/:name" element={<Popular />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
