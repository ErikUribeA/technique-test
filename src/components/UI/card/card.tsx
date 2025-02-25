import React from "react";
import './card.sass'
import Image from "next/image";

interface CardProps {
    image: string;
    title: string;
    position?: string;
}


const Card: React.FC<CardProps> = ({ image, title, position = 'object-center' }) => {
    return (
        <div className="card">
            <div className="card__image">
                <Image src={image} alt={title} width={191} height={191} className={`w-full h-full object-cover ${position}`} />
            </div>
            <h3 className="card__title">{title}</h3>
            <p className="card__description">
                Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className="card__button">TRY IT NOW</button>
        </div>
    );
};

export default Card;
