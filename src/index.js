import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function useWindowDimensions() {
  const [width, setWidth] = useState(() => window.innerWidth);
  const [height, setHeight] = useState(() => window.innerHeight);

  useEffect(() => {
    const listener = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return { width, height };
}

function App() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="App">
      <h2>width: {width}</h2>
      <h2>height: {height}</h2>
      <p>Resize the window.</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
