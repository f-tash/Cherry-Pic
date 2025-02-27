import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import InputDreamPage from "./page/InputDreamPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<InputDreamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
