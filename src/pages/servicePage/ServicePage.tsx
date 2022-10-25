import React, { ReactNode, useState } from 'react';
import './ServicePage.css';
import iconContratual from "../../assets/icon_contratual.png";
import iconPenal from "../../assets/icon_penal.png";
import iconTributaria from "../../assets/icon_tributaria.png";
import iconConsumidor from "../../assets/icon_consumidor.png";
import iconWhatsapp from "../../assets/icon_whatsapp.png";
import roberta from "../../assets/roberta.png";

export const ServicePage = () => {

    const [city, setCity] = useState('');
    const [service, setService] = useState('');
    const numberPhone = '5511964523031';

    const controlClassElementSelect = (element: string) => {
        const elements = document.querySelectorAll(element);

        elements.forEach(el => {

            if(el.classList.contains('btn-click')){
                el.classList.remove('btn-click');
                el.classList.add('btn');
            }
        });
    }

    const handleSelectCity = (city: string, e: HTMLButtonElement) => {
        setCity(city);
        controlClassElementSelect('button');
        e.classList.remove('btn');
        e.classList.add('btn-click');
    }

    const handleSelectService = (service: string, e: HTMLAnchorElement) => {
        if(city != ''){
            setService(service);
            controlClassElementSelect('a');
            e.classList.remove('btn');
            e.classList.add('btn-click');
        }
        else {
            alert('Selecione uma cidade por favor !!!');
        }
    }

    const handleGoWhatsapp = (e: HTMLAnchorElement) => {
        if(service != '' && city != '') {
            const apiWhatsapp = `https://api.whatsapp.com/send?phone=${numberPhone}&text=Ol%C3%A1!%20Preciso%20de%20um%20Advogado%20${service}%20em%20${city}!%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es,%20por%20favor?`;
            e.href = apiWhatsapp;
        }
        else {
            alert('Selecione uma cidade e um serviço, por favor!!!');
        }
    }

    return (
        <main className='service-page'>
            <h1 className='page-title'>Serviços</h1>

            <section className='services'>
                <div className="services-left">
                    <div className='service-circle'>
                        <figure className='img-lg'>
                            <img src={iconContratual} alt="Icone de folha contratual" />
                        </figure>
                        Contratual
                    </div>

                    <div className='service-circle'>
                        <figure className='img-lg'>
                            <img src={iconPenal} alt="Icone de danos penais" />
                        </figure>
                        Penal
                    </div>
                    <div className='service-circle'>
                        <figure className='img-lg'>
                            <img src={iconTributaria} alt="Icone de tributos (balança)" />
                        </figure>
                        Tributária
                    </div>
                    <div className='service-circle'>
                        <figure className='img-lg'>
                            <img src={iconConsumidor} alt="Icone busto de uma pessoa" />
                        </figure>
                        Consumidor
                    </div>
                </div>

                <div className='services-right'>
                    <h3 className='title-service-right'>
                        Te ajudamos a escolher o melhor profissional para o seu caso
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.5 12.6248L23.2969 10.4216L14.5625 19.1404V0.124756H11.4375V19.1404L2.71875 10.406L0.5 12.6248L13 25.1248L25.5 12.6248Z" fill="#6B3938" />
                        </svg>
                    </h3>

                    <div className='select-citys'>
                        <p>Selecione a sua cidade</p>

                        <div className='select-buttons-1'>
                            <button className='btn' onClick={e => handleSelectCity('São Paulo', e.currentTarget)}>São Paulo</button>
                            <button className='btn' onClick={e => handleSelectCity('Rio de janeiro', e.currentTarget)}>Rio de Janeiro</button>
                            <button className='btn' onClick={e => handleSelectCity('Belo horizonte', e.currentTarget)}>Belo Horizonte</button>
                        </div>

                        <div className='select-buttons-2'>
                            <button className='btn'onClick={e => handleSelectCity('Taubaté', e.currentTarget)}>Taubaté</button>
                            <button className='btn'onClick={e => handleSelectCity('Osasco', e.currentTarget)}>Osasco</button>
                        </div>
                    </div>

                    <div className='select-services'>
                        <p>Selecione o serviço</p>

                        <div className='select-buttons-3'>
                            <a target='blank' className='btn' onClick={e => handleSelectService('Contratual', e.currentTarget)}>Contratual</a>
                            <a target='blank' className='btn' onClick={e => handleSelectService('Penal', e.currentTarget)}>Penal</a>
                            <a target='blank' className='btn' onClick={e => handleSelectService('Tributária', e.currentTarget)}>Tributária</a>
                            <a target='blank' className='btn' onClick={e => handleSelectService('Consumidor', e.currentTarget)}>Consumidor</a>
                        </div>
                    </div>

                    <div className='lawyer-contact'>
                        <figure>
                            <img src={roberta} alt="Imagem da roberta advogada" />
                        </figure>

                        <div className='details'>
                            <div className='nameOAB'>
                                <p className='name'>Roberta dos Santos </p>
                                <span className='oab'>OAB-SP N°. 999.999</span>
                            </div>
                            
                            <div className='whatsapp'>
                                <a className='numberWhataspp' id='whatsapp' target='blank' onClick={e => handleGoWhatsapp(e.currentTarget)}>
                                    <figure >
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
    )
}