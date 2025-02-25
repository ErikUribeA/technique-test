import Image from "next/image";
import Button from "../UI/button/button";
import './Footer.sass';

export default function Footer() {
    return (
        <section className="footer">
            <div className="footer-content">
                <Image src='/images/hydraIcon.png' alt="hydra icon" width={185} height={186} />

                <div className="quick-titles">
                    <h3>ABOUT</h3>
                    <h3>SERVICES</h3>
                    <h3>TECHNOLOGIES</h3>
                    <h3>HOW TO</h3>
                    <h3>JOIN HYDRA</h3>
                </div>

                <div className="border-class">
                    <h3>F.A.Q</h3>
                    <h3>SITEMAP</h3>
                    <h3>CONDITIONS</h3>
                    <h3>LICENSES</h3>
                </div>

                <div className="social-section">
                    <h2>SOCIALIZE WITH HYDRA</h2>
                    <div className="social-icons">
                        <Image src='/images/icons/facebook.png' alt='facebook' width={32} height={32} />
                        <Image src='/images/icons/twitter.png' alt='twitter' width={32} height={32} />
                        <Image src='/images/icons/linkedin.png' alt='linkedin' width={32} height={32} />
                        <Image src='/images/icons/youtube.png' alt='youtube' width={32} height={32} />
                        <Image src='/images/icons/instagram.png' alt='instagram' width={32} height={32} />
                        <Image src='/images/icons/pinterest.png' alt='pinterest' width={32} height={32} />
                    </div>
                    <Button text="BUILD YOUR WORLD" />
                </div>
            </div>

            <h3 className="footer-bottom">2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED</h3>
        </section >
    );
}
