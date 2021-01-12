import React from "react";
import { PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "semantic-ui-react";
import { Image, Row, Col } from "antd";
import { increaseQuAc, decreaseQuAc } from "../../Redux/Actions";

export default function CartTable() {
  const rItems = useSelector((state) => state.Cart.items);
  const dispatch = useDispatch();
  const CartQuBtn = {
    fontSize: "25px",
  };
  const increaseQu = (q) => {
    dispatch(increaseQuAc(q));
  };
  const decreaseQu = (q) => {
    dispatch(decreaseQuAc(q));
  };
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center">Image</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Product Name</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Description</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">quantity</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Price</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {rItems.map((x) => (
          <Table.Row size="small">
            <Table.Cell width={1}>
              <Image width={200} src={x.image} />
            </Table.Cell>
            <Table.Cell singleLine width={2} textAlign="center">
              {x.title}
            </Table.Cell>

            <Table.Cell textAlign="center">{x.description}</Table.Cell>
            <Table.Cell textAlign="right" width={2} textAlign="center">
              <Row>
                <Col style={CartQuBtn} span={8}>
                  <PlusCircleTwoTone
                    onClick={() =>
                      increaseQu({ quen: 1, product_id: x.product_id })
                    }
                  />
                </Col>
                <Col style={CartQuBtn} span={8}>
                  {x.quen}
                </Col>
                <Col style={CartQuBtn} span={8}>
                  <MinusCircleTwoTone
                    onClick={() =>
                      decreaseQu({ quen: 1, product_id: x.product_id })
                    }
                  />
                </Col>
              </Row>
            </Table.Cell>
            <Table.Cell textAlign="center" width={2}>
              ${x.quenPrice}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
