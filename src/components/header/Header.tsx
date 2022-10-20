import React from "react";
import "./Header.css";
import phoneIcon from "../../assets/icon_phone.png";
import emailIcon from "../../assets/icon_email.png";
import logo from "../../assets/Logo.png";
import { Link } from "@mui/material";

export const Header = () => {
  return (
    <header>
      <section className="header-contact">
        <div>
          <img src={phoneIcon} alt="Phone number" className="icon" />
          <p>11 9 XXXX - XXXX</p>
        </div>
        <div>
          <img src={emailIcon} alt="Email" className="icon" />
          <p>advogadas@mail.com.br</p>
        </div>
      </section>

      <section className="header-nav">
        <Link href="/" underline="none">
          <img src={logo} alt="C&V" />
        </Link>

        <nav>
          <Link href="/" underline="none">
            Home
          </Link>
          <Link href="/servicos" underline="none">
            Serviços
          </Link>
          <Link href="/sobre-nos" underline="none">
            Sobre Nós
          </Link>
        </nav>
      </section>
    </header>
  );
};
