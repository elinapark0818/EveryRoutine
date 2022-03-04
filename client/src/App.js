import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import About from "./page/About";
import Footer from "./components/Footer";
import MyPage from "./components/MyPage";
import UserMain from "./User/UserMain";
import UserDelete from "./User/UserDelete";
import UserRoutine from "./Routines/UserRoutine";
import GroupRoutines from "./Routines/GroupRoutines";
import GroupRoutine from "./Routines/GroupRoutine";

import Modal from "react-modal";
import ModalLogin from "./components/ModalLogin";
import ModalSignup from "./components/ModalSingup";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [signModalIsOpen, setSignModalIsOpen] = useState(false);
  const settingModalIsOpen = () => {
    setModalIsOpen(true);
  };
  const settingModalIsClose = () => {
    setModalIsOpen(false);
    setSignModalIsOpen(true);
  };

  Modal.setAppElement("#root");
  useEffect(() => {
    AOS.init();
  });

  return (
    <Router>
      <Navbar settingModalIsOpen={settingModalIsOpen} />

      <Routes>
        <Route
          path="/"
          element={<Home settingModalIsOpen={settingModalIsOpen} />}
        >
          <Route path="" element={<UserRoutine />} />
          <Route path="groupRoutine" element={<GroupRoutine />} />
          <Route path="groupRoutines" element={<GroupRoutines />} />
        </Route>
        <Route path="/about" element={<About />} />

        <Route path="/myPage" element={<MyPage />}>
          <Route path="" element={<UserMain />} />
          <Route path="userDelete" element={<UserDelete />} />
        </Route>

        <Route
          path="*"
          element={
            <main
              style={{
                padding: "1rem",
                backgroundColor: "orange",
                width: "500px",
                height: "500px",
                textAlign: "center",
              }}
            >
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

      <Footer />

      {/* 로그인 모달입니다. */}
      <Modal
        style={{
          content: {
            background: "#F3F8F2",
            left: "30%",
            right: "30%",
            border: "5px solid #697F6E",
            borderRadius: "2em",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <ModalLogin
          settingModalIsOpen={settingModalIsOpen}
          settingModalIsClose={settingModalIsClose}
        />
      </Modal>

      {/* 회원가입 모달입니다. */}
      <Modal
        style={{
          content: {
            background: "#F3F8F2",
            left: "30%",
            right: "30%",
            border: "5px solid #697F6E",
            borderRadius: "2em",
          },
        }}
        isOpen={signModalIsOpen}
        onRequestClose={() => setSignModalIsOpen(false)}
      >
        <ModalSignup />
      </Modal>
    </Router>
  );
}

export default App;
