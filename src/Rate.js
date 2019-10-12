import React from "react";

function Rate(props) {
  const { rate, onhandleChange } = props;
  return (
    <>
      <label className="conveter__label" htmlFor="rate">
        Rate of USD (1 rs = {rate} usd):
      </label>

      <input
        id="rate"
        className="conveter__input"
        type="number"
        name="rate"
        value={rate}
        onChange={e => onhandleChange(e)}
      />
    </>
  );
}
export default Rate;
