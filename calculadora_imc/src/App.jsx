import { data } from "./data/data";

import { useState } from "react";

import "./App.css";
import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!height || !weight) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setinfo(item.info);
      }
    });

    setImc(imcResult);
  };

  const backForm = (e) => {
    e.preventDefault();
    setImc("");
  };

  const [imc, setImc] = useState("");
  const [info, setinfo] = useState("");
  return (
    <>
      <div className="container">
        {!imc ? (
          <ImcCalc calcImc={calcImc} />
        ) : (
          <ImcTable data={data} backForm={backForm} imc={imc} info={info} />
        )}
      </div>
    </>
  );
}

export default App;
