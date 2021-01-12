import { Button, Card } from "antd";
import { updateCart } from "../../Redux/Actions/";
import { useDispatch } from "react-redux";

export default function ProductCard({
  title,
  imgSrc,
  description,
  price,
  quen,
  product_id,
}) {
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
      <Meta
        style={{ textAlign: "center" }}
        title={title}
        description={description}
      />
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <h1>${price}</h1>
      </div>
      <Button
        type="primary"
        style={{ marginTop: "10px" }}
        block
        onClick={() =>
          addToCart({
            name: title,
            image: imgSrc,
            description,
            price,
            quen,
            product_id,
          })
        }
      >
        Add to Cart
      </Button>
    </Card>
  );
}
