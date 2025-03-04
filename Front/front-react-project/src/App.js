import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import PhotoList from "./page/Photo-list.tsx";
import InputDreamPage from "./page/InputDreamPage.tsx";

function App() {
  return (
    <Router basename="/Cherry-Pic">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo-list" element={<PhotoList />} />
        <Route path="/input" element={<InputDreamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
