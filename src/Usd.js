import React from "react";

function Rate(props) {
  const { usd, onhandleChange } = props;
  return (
    <>
      <label htmlFor="usd" className="conveter__label">
        USD:
      </label>
      <input
        id="usd"
        className="conveter__input"
        type="number"
        name="usd"
        value={usd}
        onChange={e => onhandleChange(e)}
      />
    </>
  );
}
export default Rate;
