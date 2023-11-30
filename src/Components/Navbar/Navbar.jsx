//import React from 'react' 6.9k (gzipped: 2.7k)
import React, { useContext, useState } from 'react';
import './Navbar.css';// importando css
//import logo from '../Assets/logo2.png'
import cart_icon from '../Assets/cart_3.png'
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {

    const [menu, setMenu] = useState("loja")
    const {getTotalCartItems} = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src="" alt="" />
                <p>Ecommerce</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link style={{textDecoration:'none'}} to='/'>LOJA</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link style={{textDecoration:'none'}} to='/mens'>HOMEM</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link style={{textDecoration:'none'}} to='womens'>MULHER</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{textDecoration:'none'}} to='/kids'>INFANTIL</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Entrar</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )

}

export default Navbar