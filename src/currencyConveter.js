import React from "react";
import Rate from "./Rate";
import Inr from "./Inr";
import Usd from "./Usd";

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 70,
      inr: "",
      usd: ""
    };
  }

  onhandleChange = e => {
    const inputValue = e.target.value;
    const name = e.target.name;
    const usd = this.state.usd;
    this.setState(
      {
        [name]: inputValue
      },
      () => {
        if (this.state.usd || this.state.inr) {
          if (usd !== this.state.usd) {
            let inrValue = this.state.usd / this.state.rate;
            this.setState({
              inr: inrValue
            });
          } else {
            let usdValue = this.state.inr * this.state.rate;
            this.setState({
              usd: usdValue
            });
          }
        }
      }
    );
  };

  render() {
    const { inr, usd, rate } = this.state;
    return (
      <div className="converter__wrapper">
        <Rate rate={rate} onhandleChange={this.onhandleChange} />
        <Inr inr={inr} onhandleChange={this.onhandleChange} />
        <Usd usd={usd} onhandleChange={this.onhandleChange} />
      </div>
    );
  }
}

export default CurrencyConverter;
