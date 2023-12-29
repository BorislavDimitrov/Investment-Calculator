import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";

const INITIAL_INVEST_INFO = {
  initialInvestment: 10000,
  annualInvestment: 500,
  expectedReturn: 5,
  duration: 8,
};

function App() {
  const [investInfoGlobal, setInvestInfoGlobal] = useState({
    ...INITIAL_INVEST_INFO,
  });

  const inputIsValid = investInfoGlobal.duration > 0;

  let resultInfo = calculateInvestmentResults({ ...investInfoGlobal });

  return (
    <div>
      <Header />
      <UserInput
        setInvestInfoGlobal={setInvestInfoGlobal}
        investInfoGlobal={investInfoGlobal}
      />
      {!inputIsValid && (
        <p className="center">Please pick duration bigger than zero.</p>
      )}
      {inputIsValid && <Result info={resultInfo} />}
    </div>
  );
}

export default App;
