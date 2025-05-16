import { Badge } from "react-bootstrap"
import { BsCart4 } from "react-icons/bs"

const CartWidgetReactIcons = () => {
    return(
        <div>
            <BsCart4 fontSize={'1.8rem'} />
            <Badge bg="danger">3</Badge>
        </div>
    )
}
export default CartWidgetReactIcons