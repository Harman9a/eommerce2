import React from "react";
import { useSelector } from "react-redux";
import { Button, Layout, Menu, Badge } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const CartBtn = () => {
  const rState = useSelector((state) => state);
  return (
    <Badge count={rState.Cart.noOfItem}>
      <Button>Cart</Button>
    </Badge>
  );
};

export default function Index() {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/products">All Products</Link>
        </Menu.Item>
        <Menu.Item style={{ float: "right" }}>
          <Link to="/cart">
            <CartBtn />
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
