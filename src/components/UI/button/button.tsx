import React from "react";
import './button.sass'

type ButtonProps = {
    text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
    return <button className="button-ui">{text}</button>;
};

export default Button;
