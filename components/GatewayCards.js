import React from "react";

import gateway from "../images/gateway.png"
import gateway1 from "../images/gateway1.png"
import gateway2 from "../images/gateway2.png"
import gateway3 from "../images/gateway3.png"

let gatewayData = [
    {
        image: gateway,
        content:"RashiGateway",
        quote: "Located adjacent to the Bangalore-Pune highway in Nelamangala...",
        amount:"₹ 67.35 L - 1.6 Cr",
        info:"More Info"
    },
    {
        image: gateway1,
        content:"RashiGateway",
        quote: "Located adjacent to the Bangalore-Pune highway in Nelamangala...",
        amount:"₹ 67.35 L - 1.6 Cr",
        info:"More Info"
    },
    
    {
        image: gateway2,
        content:"RashiGateway",
        quote: "Located adjacent to the Bangalore-Pune highway in Nelamangala...",
        amount:"₹ 67.35 L - 1.6 Cr",
        info:"More Info"
    },
    {
        image: gateway3,
        content:"RashiGateway",
        quote: "Located adjacent to the Bangalore-Pune highway in Nelamangala...",
        amount:"₹ 67.35 L - 1.6 Cr",
        info:"More Info"
    },
]

function GatewayCards () {
    return (
<div className="container">
        <div className="gateway-cards">

        {gatewayData.map((d, index) => {
                    return <Gateway key={index} image={d.image} content={d.content} amount={d.amount} quote={d.quote} info={d.info} />
                })}

        </div>
        </div>
    )
}
const Gateway = ({ image, content, amount, quote,info }) => {
    return <div className="rashi-gateway">
        <img src={image} alt="ellip" />
         <div className="rashi-gateway-content">{content}</div>
        <p>{quote}</p>
        <div className="gateway-amount">{amount}</div>
        <div className="gateway-info">{info}</div>
    </div>
}


export default GatewayCards;