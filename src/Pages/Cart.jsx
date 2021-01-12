import React from "react";
import { Statistic, Divider } from "semantic-ui-react";
import { Steps, Button, Row, Col } from "antd";

import { useSelector, useDispatch } from "react-redux";

import "semantic-ui-css/semantic.min.css";
import CartTable from "../Components/Cart/CartTable";
import DetailForm from "../Components/Cart/DetailForm";
import PaymentForm from "../Components/Cart/Checkout";

const { Step } = Steps;

export default function Cart() {
  const totalPrice = useSelector((state) => state.Cart.totalPrice);
  const [current, setCurrent] = React.useState(0);
  const [status1, setStatus1] = React.useState("process");
  const [status2, setStatus2] = React.useState("wait");
  const [status3, setStatus3] = React.useState("wait");

  const goToNextPage = () => {
    let c = current + 1;
    if (c === 1) {
      setStatus1("finish");
      setStatus2("process");
    } else if (c === 2) {
      setStatus2("finish");
      setStatus3("process");
    }
    setCurrent(c);
  };
  const goToBackPage = () => {
    let c = current - 1;
    if (c === 1) {
      setStatus3("wait");
      setStatus2("process");
    }
    if (c === 0) {
      setStatus2("wait");
      setStatus1("process");
    }
    setCurrent(c);
  };

  return (
    <>
      <Steps
        type="navigation"
        size="small"
        className="site-navigation-steps"
        current={current}
      >
        <Step title="Cart" status={status1} description="Your Cart items" />
        <Step
          title="Detail"
          status={status2}
          description="Your address details"
        />
        <Step title="Checkout" status={status3} description="Payment info" />
      </Steps>

      {current === 0 ? (
        <>
          <CartTable />
          <Row>
            <Col span={22}></Col>
            <Col span={2}>
              <Statistic size="small">
                <Statistic.Label>Total Price</Statistic.Label>
                <Statistic.Value>${totalPrice}</Statistic.Value>
              </Statistic>
            </Col>
          </Row>
        </>
      ) : (
        <PaymentForm />
      )}

      <Divider />

      <Row style={{ marginTop: "25px" }}>
        <Col span="23">
          {current === 0 ? (
            <Button type="primary" disabled>
              Back
            </Button>
          ) : (
            <Button type="primary" onClick={() => goToBackPage()}>
              Back
            </Button>
          )}
        </Col>
        <Col span="1">
          {current === 2 ? (
            <Button type="primary" disabled>
              Next
            </Button>
          ) : (
            <Button type="primary" onClick={() => goToNextPage()}>
              Next
            </Button>
          )}
        </Col>
      </Row>
    </>
  );
}
