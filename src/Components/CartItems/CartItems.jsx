import React, { useContext } from "react";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Produto</p>
                <p>Titulo</p>
                <p>Preço</p>
                <p>Qty</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className="carticon-product-icon" />
                            <p> {e.name}</p>
                            <p> R${e.new_price} </p>
                            <button className="cartitems-quantity" > {cartItems[e.id]} </button>
                            <p> R${e.new_price * cartItems[e.id]} </p>
                            <img className="cartitems-remove-icon" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }

                return null;

            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Total carrinho</h1>

                    <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>R${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Taxa de Entrega</p>
                        <p>Grátis</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>R${getTotalCartAmount()}</h3>
                        
                    </div>
                   
                </div>
                <button className="cartitems-total-item-button">CHECKOUT</button> 
                
                </div>

                <div className="cartitem-promocode">
                <p>Se você tem um cupom de desconto, Entre aqui</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder="Cupom" />
                    <button>Usar cupom</button>
                </div>
            </div>
                
            </div>
            
        </div>
    )
}

export default CartItems