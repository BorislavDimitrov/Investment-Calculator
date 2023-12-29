export default function UserInput({ investInfoGlobal, setInvestInfoGlobal }) {
  function handleOnChange(name, target) {
    setInvestInfoGlobal((prev) => {
      const updatedInfo = { ...prev, [name]: Number(target.value) };
      return updatedInfo;
    });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label for="fname">Initial investment</label>
          <input
            onChange={(event) =>
              handleOnChange("initialInvestment", event.target)
            }
            type="number"
            name="initialInvestment"
            value={investInfoGlobal.initialInvestment}
          />
        </p>
        <p>
          <label for="fname">Annual investment</label>
          <input
            onChange={(event) =>
              handleOnChange("annualInvestment", event.target)
            }
            type="number"
            name="annualInvestment"
            value={investInfoGlobal.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label for="fname">Expected return</label>
          <input
            onChange={(event) => handleOnChange("expectedReturn", event.target)}
            type="number"
            name="expectedReturn"
            value={investInfoGlobal.expectedReturn}
          />
        </p>
        <p>
          <label for="fname">Duration</label>
          <input
            onChange={(event) => handleOnChange("duration", event.target)}
            type="number"
            name="duration"
            value={investInfoGlobal.duration}
          />
        </p>
      </div>
    </div>
  );
}
