import React from "react";

export default function CurrencyRow(props) {
  const { currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount } = props;
  return (
    <div>
      <input type="number" value={amount} className="input" onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency} className="select">
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
