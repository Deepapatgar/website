import React from "react";

import Ellipse from "../images/Ellipse.png"
import jhon from "../images/jhon.png"
import jhon1 from "../images/jhon1.png"
import jhon2 from "../images/jhon2.png"
import Vector from "../images/Vector.png"
import Vector1 from "../images/Vector1.png"
import rectangle from "../images/rectangle.png"
let testimonialData = [
    {
        image: Ellipse,
        profileIamge: jhon,
        quote: "It really saves me time and effort. Chamer is exactly what our business has been lacking. business business",
        name: "JHON CLERK"
    },
    {
        image: Ellipse,
        profileIamge: jhon1,
        quote: "It really saves me time and effort. Chamer is exactly what our business has been lacking. business business",
        name: "JHON CLERK"
    },
    
    {
        image: Ellipse,
        profileIamge: jhon2,
        quote: "It really saves me time and effort. Chamer is exactly what our business has been lacking. business business",
        name: "JHON CLERK"
    },
]
function TestimonialCards() {
    return (
        <div className="container">
            <div className="testimonial-content">Testimonials</div>
            <div className="testimonial-cards">
                {testimonialData.map((d, i) => {
                    return <Testimonial key={i} image={d.image} name={d.name} profileIamge={d.profileIamge} quote={d.quote} />
                })}
            </div>

        </div>
    )

}

const Testimonial = ({ image, profileIamge, name, quote }) => {
    return <div className="testimonial-card">
        <li><img src={image} alt="ellip" />
            <div className="jhon-image"><img src={profileIamge} alt="jhon" width={72} height={72} /></div>
        </li>
        <div className="vector-image">
            <img src={Vector} alt="vector" />
            <div className="vector-image-1">
                <img src={Vector} alt="vector" /></div>
        </div>
        <div className="vector-image-2">
            <img src={Vector1} alt="vector" />
            <div className="vector-image-3">
                <img src={Vector1} alt="vector" /></div>
        </div>
        <p>{quote}</p>
        <div className="rectangle-image"><img src={rectangle} alt="rect" /></div>
        <div className="author-name">{name}</div>
    </div>
}

export default TestimonialCards;