import { Link } from "@mui/material";
import React from "react";
import "./LawyerCard.css";
import whatsappIcon from "../../assets/icon_whatsapp.png";
import emailIcon from "../../assets/icon_email.png";

interface LawyerProps {
  name: string;
  oab: string;
  resume: string;
  whatsapp: string;
  number: string;
  email: string;
  left?: boolean;
}

export const LawyerCard = (props: LawyerProps) => {
  return (
    <div className={`lawyer-card ${props.left ? "left" : "right"}`}>
      <img
        src={require(`../../assets/${props.name}.jpeg`)}
        alt={props.name}
        className="lawyer-photo"
      />
      <div className="info-section">
        <div className="info-title">
          <h4>{props.name}</h4>
          <p>OAB-SP N°. {props.oab}</p>
        </div>
        <p className="lawyer-resume">{props.resume}</p>

        <div className="social">
        <div className="lawyer-link">
          <Link href={props.whatsapp} underline="none">
            <img src={whatsappIcon} alt="Whatsapp" className="icon" />
          </Link>
          <p>{props.number}</p>
          </div>
          <div className="lawyer-link">
            <img src={emailIcon} alt="Email" className="icon" />
            <p>{props.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
