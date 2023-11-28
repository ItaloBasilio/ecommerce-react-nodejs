import React from "react";
import './Newsletter.css';

const Newsletter = () => {
    return(
        <div className="newsletter">
            <h1>Receba Ofertas Exclusivas por Email</h1>
            <p>Inscreva-se em nossa newsletter</p>
            <div>
                <input type="email" placeholder='Digite Seu Email' />
                <button>Inscreva-se</button>
            </div>
        </div>
    )
}

export default Newsletter