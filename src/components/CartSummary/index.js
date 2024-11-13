// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalAmount = cartList.reduce(
        (acc, currentItem) => acc + currentItem.price * currentItem.quantity,
        0,
      )

      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-title">Order Total: Rs {totalAmount}/-</h1>
          <p className="cart-summary-count">{cartList.length} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
