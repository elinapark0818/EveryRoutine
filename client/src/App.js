import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <header></header>
      <h1>App.js</h1>
    </div>
  );
}

export default App;
