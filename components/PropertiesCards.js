import React from "react";

import property from "../images/property.png"
import property1 from "../images/property1.png"
import property2 from "../images/property2.png"
import property3 from "../images/property3.png"

let gatewayData = [
    {
        image: property,
        propertycontent:"RashiGateway",
        quote: "Located adjacent to the Bangalore-Pune highway in Nelamangala...",
        propertyamount:"₹ 67.35 L - 1.6 Cr",
        info:"More Info"
    },
    {
        image: property1,
        propertycontent:"RashiGateway",
        quote: "Located adjacent to the Bangalore-Pune highway in Nelamangala...",
        propertyamount:"₹ 67.35 L - 1.6 Cr",
        info:"More Info"
    },
    
    {
        image: property2,
        propertycontent:"RashiGateway",
        quote: "Located adjacent to the Bangalore-Pune highway in Nelamangala...",
        propertyamount:"₹ 67.35 L - 1.6 Cr",
        info:"More Info"
    },
    {
        image: property3,
        propertycontent:"RashiGateway",
        quote: "Located adjacent to the Bangalore-Pune highway in Nelamangala...",
        propertyamount:"₹ 67.35 L - 1.6 Cr",
        info:"More Info"
    },
]

function PropertiesCards () {
    return (
<div className="container">
        <div className="property-cards">

        {gatewayData.map((d, index) => {
                    return <Properties key={index} image={d.image} propertycontent={d.propertycontent} propertyamount={d.propertyamount} quote={d.quote} info={d.info} />
                })}

        </div>
        </div>
    )
}
const Properties = ({ image, propertycontent, propertyamount, quote,info }) => {
    return <div className="rashi-gateway">
        <img src={image} alt="ellip" />
         <div className="property-content">{propertycontent}</div>
        <p>{quote}</p>
        <div className="property-amount">{propertyamount}</div>
        <div className="property-info">{info}</div>
    </div>
}


export default PropertiesCards;