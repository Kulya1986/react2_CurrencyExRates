import React from "react";
import './RateCard.css'

const Card = ({currency,rate}) =>{
    return(
        <div className="RateCard">
            <p className="Currency">
                {currency}
            </p>
            <hr/>
            <p className="Rate">
                {rate}
            </p>
        </div>
    );
}

export default Card;