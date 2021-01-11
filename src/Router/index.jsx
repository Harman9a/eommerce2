import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import "antd/dist/antd.css";
import "./style.css";
import { Layout } from "antd";

const { Content } = Layout;

export const RouterCom = () => {
  return (
    <Layout>
      <Router>
        <Header />
        <Content className="site-layout" style={{ marginTop: 64 }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Switch>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Content>
      </Router>
    </Layout>
  );
};
