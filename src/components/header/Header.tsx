'use client'
import { useState } from "react";
import Button from "../UI/button/button";
import Image from "next/image";
import "./Header.sass";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="container-logo">
                <Image src="/images/hydraIcon.png" alt="hydra" width={102} height={103} className="logo" />
                <Image src="/images/hydra-word.png" alt="hydra-word" width={76} height={46} />
            </div>

            {/* Icono de menú hamburguesa */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <Image  src='/images/icons/humburger-icon.png' alt="hamburger icon" width={33} height={26}/>
            </div>

            {/* Contenedor del menú y botones */}
            <nav className={`menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>TECHNOLOGIES</li>
                    <li>HOW TO</li>
                </ul>

                <div className="buttons">
                    <button className="contact-button">CONTACT US</button>
                    <Button text="JOIN HYDRA" />
                </div>
            </nav>
        </header>
    );
}
