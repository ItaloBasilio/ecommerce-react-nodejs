import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () =>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Descrição</div>
                <div className="descriptionbox-nav-box fade">Comentários(122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus magnam doloremque ullam fugit, eaque expedita velit ducimus iure at repellendus? Ad maiores inventore reiciendis corporis numquam. Dolorum possimus repellat iste!</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam quasi minima voluptatum nostrum laboriosam reprehenderit perspiciatis! Asperiores accusamus assumenda nemo ea odit magnam necessitatibus eius saepe quos, quasi aperiam.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox