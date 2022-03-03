import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import About from "./page/About";
import Footer from "./components/Footer";
import MyPage from "./components/MyPage";
import SignUp from "./components/SignUp";
import UserMain from "./User/UserMain";
import UserDelete from "./User/UserDelete";

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/myPage" element={<MyPage />}>
          <Route path="" element={<UserMain />} />
          <Route path="userDelete" element={<UserDelete />} />
        </Route>

        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
