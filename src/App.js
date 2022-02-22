import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/index";
import Dashboard from "./pages/dashboard/index";
import About from "./pages/About";
import DashboardHome from "./components/dashboard/DashboardHome";

// TODO - Make all imports Lazy, Use Suspense

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/categories/:category" element={<p>Category</p>} />
          <Route path="/popular/:name" element={<p>Popular</p>} />
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
