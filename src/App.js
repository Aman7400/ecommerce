import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/index";
import Dashboard from "./pages/dashboard/index";
import About from "./pages/About";

// TODO - Make all imports Lazy, Use Suspense

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/categories/:category" element={<p>You got me</p>} />
      </Routes>
    </>
  );
}

export default App;
