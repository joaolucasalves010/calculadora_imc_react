import { data } from "./data/data";

import { useState } from "react";

import "./App.css";
import ImcCalc from "./components/ImcCalc";
import imcTable from "./components/ImcTable";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();
    console.log("Executou!");
  };

  const [imc, setImc] = useState("");
  const [info, setinfo] = useState("");
  const [infoClass, setInfoClass] = useState("");
  return (
    <>
      <div className="container">
        {!imc ? <ImcCalc calcImc={calcImc} /> : <imcTable />}
      </div>
    </>
  );
}

export default App;
