import React from "react";
import Card from "./RateCard";
import './RateCardsList.css'

const RatesList = ({displayedCurrencies, displayedRates, baseCurrency}) =>{
    const ind = displayedCurrencies.indexOf(baseCurrency);
    const currList = [...displayedCurrencies], ratesList=[...displayedRates];
    if (ind!==-1)
        {
            currList.splice(ind,1);
            ratesList.splice(ind,1);
        };    
    
    return (
        <div className="Rates-list">
            {
                currList.map((curr, ind) =>{
                    return(
                        <Card 
                            key = {curr}
                            currency={curr}
                            rate = {Number(ratesList[ind]).toFixed(3)}
                            />
                    );
                })
            }
        </div>
    );
}

export default RatesList;