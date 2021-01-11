import React from "react";
import { Row, Col } from "antd";
import ProductCard from "../Components/Common/ProductCard";

export default function Products() {
  return (
    <div style={{ marginLeft: "60px" }}>
      <Row>
        <Col span={8}>
          <ProductCard
            imgSrc="https://cdn11.bigcommerce.com/s-fa8ae9fe8j/content/pdp_images/1280x1280_5329_12186.jpg"
            title="Skullcandy 1"
            description="Airpods"
          />
        </Col>
        <Col span={8}>
          <ProductCard
            imgSrc="https://cdn11.bigcommerce.com/s-fa8ae9fe8j/content/pdp_images/1280x1280_5329_12186.jpg"
            title="Skullcandy 2"
            description="Airpods"
          />
        </Col>
        <Col span={8}>
          <ProductCard
            imgSrc="https://cdn11.bigcommerce.com/s-fa8ae9fe8j/content/pdp_images/1280x1280_5329_12186.jpg"
            title="Skullcandy 3"
            description="Airpods"
          />
        </Col>
      </Row>
    </div>
  );
}
