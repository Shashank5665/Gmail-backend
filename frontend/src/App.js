import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/signin";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
