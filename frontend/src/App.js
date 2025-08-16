import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Privacy, Terms } from "./pages/Legal";
import { Toaster } from "./components/ui/toaster";
import "./index.css";

function App() {
  return (
    <div className="App dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;