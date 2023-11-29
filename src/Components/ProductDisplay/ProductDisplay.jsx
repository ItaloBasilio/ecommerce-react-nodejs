import React from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">R${product.old_price}</div>
                    <div className="productdisplay-right-price-new">R${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, ducimus in excepturi dignissimos ipsum sunt at optio fugit, minima quisquam iure nobis doloribus velit repellat autem beatae enim quia odio?
                </div>
                <div className="productdisplay-right-sizes">
                    <h1>Escolha o tamanho:</h1>
                    <div className="productdisplay-right-size">
                        <div>P</div>
                        <div>M</div>
                        <div>G</div>
                        <div>GG</div>
                        <div>G1</div>
                    </div>
                </div>
                <button>ADICIONAR AO CARRINHO</button>
                <p className="productdisplay-right-category"> <span>Categorias :</span>Women , T-Shirt, Crop Top</p>
                <p className="productdisplay-right-category"> <span>Tags :</span>Moderno , Últimos</p>
            </div>
        </div>
    )
}

export default ProductDisplay