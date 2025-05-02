import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "../context/Context";
import ThreeApp from "../three-src/ThreeApp";
import UnderDevelopment from "../Components/UnderDevelopment";
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
const threeContainer = document.getElementById("three") as HTMLDivElement;

// Main App Router (for normal routes)
const MainApp = () => (
  <ContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/underdevelopment" element={<UnderDevelopment />} />
        <Route path="/three-js/*" element={null} />{" "}
        {/* Reserve three-js path */}
      </Routes>
    </Router>
  </ContextProvider>
);

// ThreeJS App Router (for /three-js routes)
const ThreeJSApp = () => (
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
);

// Render the appropriate app based on route
if (window.location.pathname.startsWith("/three-js")) {
  if (threeContainer) {
    ReactDOM.createRoot(threeContainer).render(
      <React.StrictMode>
        <ThreeJSApp />
      </React.StrictMode>
    );
  }
} else {
  if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <MainApp />
      </React.StrictMode>
    );
  }
}
