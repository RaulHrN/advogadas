import lawyer1  from "../../assets/Fernanda Zanon Costa.jpeg";
import lawyer2  from "../../assets/Caroline Campanha Vicentin.jpeg";
import iconWhatsapp from "../../assets/icon_whatsapp.png";

import './LawyerCardService.css';

interface LawyerProps {
    id: number;
    name: string;
    oab: string;
    resume: string;
    whatsapp: string;
    number: string;
    email: string;
    left?: boolean;
  }

interface LawyerCardProps {
    city?: string;
    service?: string;
    lawyer: LawyerProps;
}

const imagens = [lawyer1, lawyer2];

export function LawyerCardService(props: LawyerCardProps) {
    const hrefWhatsApp = `https://api.whatsapp.com/send?phone=${props.lawyer.whatsapp}&text=Ol%C3%A1!%20Preciso%20de%20um%20Advogado%20${props.service}%20em%20${props.city}!%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es,%20por%20favor?`;

    return (
        <div className="lawyer-contact">
        <figure className="lawyer-photo-service">
            <img src={imagens[props.lawyer.id]} alt="Imagem da roberta advogada" />
        </figure>

        <div className="details">
            <div className="nameOAB">
                <p className="name">{props.lawyer.name} </p>
                <span className="oab">OAB-SP N°. {props.lawyer.oab}</span>
            </div>

            <div className="whatsapp">
                <a
                    className="numberWhataspp"
                    id="whatsapp"
                    target="blank"
                    href={hrefWhatsApp}
                >
                    <figure className="iconWhatsapp">
                        <img src={iconWhatsapp} alt="Icone do whatsapp" />
                    </figure>
                    {props.lawyer.number}
                </a>
            </div>
        </div>
    </div>
    );
}