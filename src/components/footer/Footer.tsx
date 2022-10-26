import { Link } from "@mui/material";
import React from "react";
import './Footer.css';
import instagramIcon from "../../assets/icon_instagram.png";
import facebookIcon from "../../assets/icon_facebook.png";
import linkedinIcon from "../../assets/icon_linkedin.png";

export const Footer = () => {
    return (
        <footer>
            <section className="footer-info">
                <div className="footer-info-sec">
                    <h3>Contato</h3>
                    <p>(99) 9 9999-9999</p>
                    <p>contato@mail.com.br</p>
                    <p>Rua Fulana de Tal, 999 - Vila Campinas, São Paulo - SP</p>
                </div>
                <div className="footer-info-sec">
                    <h3>Social</h3>
                    <Link href="" underline="none">
                        <img src={instagramIcon} alt="Instagram" className="icon" />
                        <p>Instagram</p>
                    </Link>
                    <Link href="" underline="none">
                    <img src={facebookIcon} alt="Facebook" className="icon" />
                        <span>Facebook</span>
                    </Link>
                    <Link href="" underline="none">
                    <img src={linkedinIcon} alt="Linkedin" className="icon" />
                        <span>LinkedIn</span>
                    </Link>
                </div>
            </section>
            <p>Copyright© A&C Advogados 2022</p>
        </footer>
    )
}