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
} from "../three-components";
const root = document.getElementById("root") as HTMLDivElement;
const threeContainer = document.getElementById("three") as HTMLDivElement;

console.log("pathname:", window.location.pathname);
console.log("threeContainer:", threeContainer);
console.log("root:", root);
// Main App Router (for normal routes)
const MainApp = () => (
  <ContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/underdevelopment" element={<UnderDevelopment />} />
        <Route path="/threejs/*" element={null} /> {/* Reserve three-js path */}
      </Routes>
    </Router>
  </ContextProvider>
);

// ThreeJS App Router (for /three-js routes)
const ThreeJSApp = () => (
  <Router basename="/threejs">
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
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    {window.location.pathname.startsWith("/threejs") ? (
      <ThreeJSApp />
    ) : (
      <MainApp />
    )}
  </React.StrictMode>
);
