import { Link } from "@mui/material";
import React from "react";
import "./Footer.css";
import instagramIcon from "../../assets/icon_instagram.png";

export const Footer = () => {
  return (
    <footer>
      <section className="footer-info">
        <div className="footer-info-sec">
          <h3>Contato</h3>
          <p>(11) 2311-3904 / (11) 2311-3906</p>
          <p>atendimento@costavicentin.com.br</p>
          <p>
            R. Taipas, 200 - 04 - Santa Maria, São Caetano do Sul - SP,
            09560-200
          </p>
        </div>
        <div className="footer-info-sec">
          <h3>Social</h3>
          <Link
            href="https://www.instagram.com/costa.vicentin.advogados/"
            underline="none"
          >
            <img src={instagramIcon} alt="Instagram" className="icon" />
            <p>Instagram</p>
          </Link>
        </div>
      </section>
      <p>Copyright© A&C Advogados 2022</p>
    </footer>
  );
};
