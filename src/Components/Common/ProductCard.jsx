import { Button, Card } from "antd";
import { updateCart } from "../../Redux/Actions/";
import { useDispatch } from "react-redux";

export default function ProductCard({ title, imgSrc, description }) {
  const { Meta } = Card;
  const dispatch = useDispatch();

  const addToCart = (data) => {
    dispatch(updateCart(data));
  };

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={imgSrc} />}
    >
      <Meta title={title} description={description} />
      <Button
        type="primary"
        style={{ marginTop: "10px" }}
        block
        onClick={() => addToCart({ name: title, image: imgSrc, description })}
      >
        Add to Cart
      </Button>
    </Card>
  );
}
