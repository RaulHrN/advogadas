import React from "react";
import { LawyerCard } from "../../components/lawyerCard/LawyerCard";
import { getData } from "../../services/dataCVLawyers";
import "./AboutUsPage.css";

export const AboutUsPage = () => {

  const dataLawyers = getData();

  return (
    <section className="page">
      <h1 className="page-title">Sobre nós</h1>

      <p className="slogan">
        "Fundado em Junho de 2016, é o fruto da união de profissionais que
        buscam oferecer um atendimento personalizado, acolhedor e humanizado aos
        seus clientes, participando, pessoalmente, de todas as etapas do
        trabalho que é entregue."
      </p>

      <div className="main-section">
        {dataLawyers.lawyers.map((lawyer) => {
          console.log(lawyer);
          return <LawyerCard name={lawyer.name} oab={lawyer.oab} resume={lawyer.resume} whatsapp={lawyer.whatsapp} number={lawyer.number} email={lawyer.email} left={lawyer.id === 2 ? true : false } />
        })}
        
      </div>
    </section>
  );
};
