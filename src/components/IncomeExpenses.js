import React from "react";

export default function IncomeExpenses() {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +₹0.00
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -₹0.00
        </p>
      </div>
    </div>
  );
}
