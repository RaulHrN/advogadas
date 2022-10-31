import React from "react";
import "./Header.css";
import logo from "../../assets/Logo.png";
import { Link } from "@mui/material";

export const Header = () => {
  return (
    <header>
      <section className="header-nav">
        <Link href="/" underline="none">
          <img src={logo} alt="C&V Advogados" className="header-logo " />
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
