import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidgetReactIcons = () => {
  const { cartQuantity } = useContext(CartContext);
  const quantity = cartQuantity(); // asumimos que es función

  // Si querés que vaya a /checkout solo si hay productos
  const destino = quantity > 0 ? "/checkout" : "/";

  return (
    <Link to={destino} style={{ textDecoration: "none", color: "inherit", position: "relative" }}>
      {quantity > 0 && (
        <Badge
          bg="danger"
          pill
          style={{ position: "absolute", top: "-8px", right: "-8px", zIndex: 1 }}
        >
          {quantity}
        </Badge>
      )}
      <BsCart4 fontSize="1.8rem" />
    </Link>
  );
};

export default CartWidgetReactIcons;
