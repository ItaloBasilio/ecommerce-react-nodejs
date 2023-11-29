import React from "react";
import './CSS/LoginSignup.css'

const LoginSignup = () =>{
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Entrar</h1> 
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Seu Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                </div>
                <button>Criar conta</button>
                <p className="loginsignup-login">Você tem uma conta? <span>Entre aqui</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>Para continuar, eu aceito os termos de uso & políticas de privacidade</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup