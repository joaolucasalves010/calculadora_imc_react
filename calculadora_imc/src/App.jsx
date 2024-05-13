import { useState } from "react";

import "./App.css";

import ImcCalc from "./components/ImcCalc";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <ImcCalc />
      </div>
    </>
  );
}

export default App;
