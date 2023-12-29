import { formatter } from "../util/investment";

export default function Result({ info }) {
  let initialInvestment =
    info[0].valueEndOfYear - info[0].interest - info[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {info &&
          info.map((column) => {
            const totalInterest =
              column.valueEndOfYear -
              column.annualInvestment * column.year -
              initialInvestment;

            const totalAmountInvested = column.valueEndOfYear - totalInterest;

            return (
              <tr key={column.year}>
                <td>{column.year}</td>
                <td>{formatter.format(column.valueEndOfYear)}</td>
                <td>{formatter.format(column.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
