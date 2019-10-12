import React from "react";

function Rate(props) {
  const { inr, onhandleChange } = props;
  return (
    <>
      <label className="conveter__label" htmlFor="inr">
        INR:
      </label>
      <input
        id="inr"
        className="conveter__input"
        type="number"
        name="inr"
        value={inr}
        onChange={e => onhandleChange(e)}
      />
    </>
  );
}
export default Rate;
