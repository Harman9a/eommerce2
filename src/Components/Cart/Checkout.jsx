import React from "react";
import Cards from "react-credit-cards";
import { Row, Col, Input } from "antd";
import "react-credit-cards/es/styles-compiled.css";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Row>
          <Col span={12}>
            <div id="PaymentForm">
              <Cards
                cvc={this.state.cvc}
                expiry={this.state.expiry}
                focused={this.state.focus}
                name={this.state.name}
                number={this.state.number}
              />
            </div>
          </Col>
          <Col span={12}>
            <form>
              <Input
                name="number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                placeholder="Card Number"
              />
              <Input
                name="name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                placeholder="Full Name"
              />
              <Row>
                <Col>
                  <Input
                    name="expiry"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    placeholder="Expiry Date"
                  />
                </Col>
                <Col>
                  <Input
                    name="cvc"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    placeholder="CVV"
                  />
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
