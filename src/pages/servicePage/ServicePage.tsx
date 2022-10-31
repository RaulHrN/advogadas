/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./ServicePage.css";
import iconPrevidenciario from "../../assets/icon_previdenciario.png";
import iconFamilia from "../../assets/icon_familia.png";
import iconTrabalhista from "../../assets/icon_trabalhista.png";
import iconCivel from "../../assets/icon_civel.png";
import iconWhatsapp from "../../assets/icon_whatsapp.png";

export const ServicePage = () => {
  const [city, setCity] = useState("");
  const [service, setService] = useState("");
  const [numberPhone, setNumberPhone] = useState("");

  const controlClassElementSelect = (element: string) => {
    const elements = document.querySelectorAll(element);

    elements.forEach((el) => {
      if (el.classList.contains("btn-click")) {
        el.classList.remove("btn-click");
        el.classList.add("btn");
      }
    });
  };

  const handleSelectCity = (city: string, e: HTMLButtonElement) => {
    setCity(city);
    controlClassElementSelect("button");
    e.classList.remove("btn");
    e.classList.add("btn-click");
  };

  const handleSelectService = (service: string, e: HTMLAnchorElement) => {
    if (city !== "") {
      setService(service);
      controlClassElementSelect("a");
      e.classList.remove("btn");
      e.classList.add("btn-click");
    } else {
      alert("Selecione uma cidade por favor !!!");
    }
  };

  const handleGoWhatsapp = (e: HTMLAnchorElement) => {
    if (service !== "" && city !== "") {
      const apiWhatsapp = `https://api.whatsapp.com/send?phone=${numberPhone}&text=Ol%C3%A1!%20Preciso%20de%20um%20Advogado%20${service}%20em%20${city}!%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es,%20por%20favor?`;
      e.href = apiWhatsapp;
    } else {
      alert("Selecione uma cidade e um serviço, por favor!!!");
    }
  };

  return (
    <main className="service-page page">
      <h1 className="page-title">Serviços</h1>

      <section className="services">
        <div className="services-left">
          <div className="service-circle">
            <figure className="img-lg">
              <img src={iconPrevidenciario} alt=" Previdenciário" />
            </figure>
            Previdenciário
          </div>

          <div className="service-circle">
            <figure className="img-lg">
              <img src={iconFamilia} alt="Família" />
            </figure>
            Família
          </div>
          <div className="service-circle">
            <figure className="img-lg">
              <img src={iconTrabalhista} alt="Trabalhista" />
            </figure>
            Trabalhista
          </div>
          <div className="service-circle">
            <figure className="img-lg">
              <img src={iconCivel} alt="Civel" />
            </figure>
            Civel
          </div>
        </div>

        <div className="services-right">
          <h3 className="title-service-right">
            Te ajudamos a escolher o melhor profissional para o seu caso
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5 12.6248L23.2969 10.4216L14.5625 19.1404V0.124756H11.4375V19.1404L2.71875 10.406L0.5 12.6248L13 25.1248L25.5 12.6248Z"
                fill="#6B3938"
              />
            </svg>
          </h3>

          <div className="select-citys">
            <p>Selecione a sua cidade</p>

            <div className="select-buttons-1">
              <button
                className="btn"
                onClick={(e) => handleSelectCity("São Paulo", e.currentTarget)}
              >
                São Paulo
              </button>
              <button
                className="btn"
                onClick={(e) =>
                  handleSelectCity("São Caetano do Sul", e.currentTarget)
                }
              >
                São Caetano do Sul
              </button>
            </div>

            <div className="select-buttons-2">
              <button
                className="btn"
                onClick={(e) =>
                  handleSelectCity("Santo André", e.currentTarget)
                }
              >
                Santo André
              </button>
              <button
                className="btn"
                onClick={(e) =>
                  handleSelectCity("São Bernardo", e.currentTarget)
                }
              >
                São Bernardo
              </button>
            </div>
          </div>

          <div className="select-services">
            <p>Selecione o serviço</p>

            <div className="select-buttons-3">
              <a
                target="blank"
                className="btn"
                onClick={(e) =>
                  handleSelectService(" Previdenciário", e.currentTarget)
                }
              >
                Previdenciário
              </a>
              <a
                target="blank"
                className="btn"
                onClick={(e) => handleSelectService("Família", e.currentTarget)}
              >
                Família
              </a>
              <a
                target="blank"
                className="btn"
                onClick={(e) =>
                  handleSelectService("Trabalhista", e.currentTarget)
                }
              >
                Trabalhista
              </a>
              <a
                target="blank"
                className="btn"
                onClick={(e) => handleSelectService("Cível", e.currentTarget)}
              >
                Cível
              </a>
            </div>
          </div>

          <div className="lawyer-contact">
            <figure>
              <img src="" alt="Imagem da roberta advogada" />
            </figure>

            <div className="details">
              <div className="nameOAB">
                <p className="name">Roberta dos Santos </p>
                <span className="oab">OAB-SP N°. 999.999</span>
              </div>

              <div className="whatsapp">
                <a
                  className="numberWhataspp"
                  id="whatsapp"
                  target="blank"
                  onClick={(e) => handleGoWhatsapp(e.currentTarget)}
                >
                  <figure>
                    <img src={iconWhatsapp} alt="Icone do whatsapp" />
                  </figure>
                  (99) 9 9999 - 9999
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
