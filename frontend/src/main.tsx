import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "../context/Context";
import ThreeApp from "../three-src/ThreeApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ThreeAbout,
  ThreeContact,
  ThreeSkills,
  ThreeWork,
  ThreeWrapperComponent,
  ThreeHome,
} from "../three-components";
const root = document.getElementById("root") as HTMLDivElement;
const three = document.getElementById("three") as HTMLDivElement;
if (root && location.pathname === "/") {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ContextProvider>
        <Router basename="/">
          <Routes>
            <Route index element={<App />}></Route>
          </Routes>
        </Router>
      </ContextProvider>
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(three).render(
    <React.StrictMode>
      <Router basename="/three-js">
        <Routes>
          <Route path="/" element={<ThreeApp />}>
            <Route path="home" element={<ThreeWrapperComponent />} />
            <Route path="contact" element={<ThreeContact />} />
            <Route path="about" element={<ThreeAbout />} />
            <Route path="work" element={<ThreeWork />} />
            <Route path="skills" element={<ThreeSkills />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
