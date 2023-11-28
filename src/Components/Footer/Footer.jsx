import React from "react";
import './Footer.css'
//import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src="" alt="" />
                <p>Ecommerce</p>
            </div>
            <ul className="footer-links">
                <li>Empresa</li>
                <li>Produtos</li>
                <li>Filiais</li>
                <li>Sobre Nós</li>
                <li>Contato</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - Italo Basilio</p>
            </div>
        </div>
    )
}

export default Footer