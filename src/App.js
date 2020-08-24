import React from "react";
import Logo from "./components/Logo";
import Description from "./components/Description";
import Projects from "./components/Projects";
import GlobalStyles from "./components/GlobalStyles";

export default function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Logo />
      <Description />
      <Projects />
    </div>
  );
}
