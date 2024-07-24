import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css'; 

import ofertasImage from '../../assets/images/offers/ofertas.png';
import cervejasImage from '../../assets/images/offers/cervejas.png';
import aguasEgelosImage from '../../assets/images/offers/aguas-e-gelos.png';
import semAlcoolImage from '../../assets/images/offers/sem-alcool.png';
import choppImage from '../../assets/images/offers/chopp.png';
import churrascoImage from '../../assets/images/offers/churrasco.png';
import merceariaImage from '../../assets/images/offers/mercearia.png';
import beatsEiceImage from '../../assets/images/offers/beers-and-ice.png';
import vinhosImage from '../../assets/images/offers/vinhos.png';
import petiscosImage from '../../assets/images/offers/petiscos.png';
import destiladosImage from '../../assets/images/offers/destilados.png';
import bomboniereImage from '../../assets/images/offers/bomboniere.png';
import convenienciaImage from '../../assets/images/offers/conveniencia.png';
import novidadesImage from '../../assets/images/offers/novidades.png';

import CategoryCard from '../CategoryCard/CategoryCard';

const Hero = () => {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setAddress(e.target.value);
  };

  const offers = [
    { name: 'Ofertas', image: ofertasImage },
    { name: 'Cervejas', image: cervejasImage },
    { name: 'Águas e Gelos', image: aguasEgelosImage },
    { name: 'Sem Álcool', image: semAlcoolImage },
    { name: 'Chopp', image: choppImage },
    { name: 'Churrasco', image: churrascoImage },
    { name: 'Mercearia', image: merceariaImage },
    { name: 'Beers and Ice', image: beatsEiceImage },
    { name: 'Vinhos', image: vinhosImage },
    { name: 'Petiscos', image: petiscosImage },
    { name: 'Destilados', image: destiladosImage },
    { name: 'Bomboniere', image: bomboniereImage },
    { name: 'Conveniência', image: convenienciaImage },
    { name: 'Novidades', image: novidadesImage }
  ];

  const handleProductClick = (productName) => {
    navigate(`/produtos/${productName}`);
  };

  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-content">
          <p className="hero-text">
            <span>Bebida rápida, gelada e no precinho?</span>
            <span>O zé entrega tudo.</span>
          </p>
          <input
            type="text"
            className="hero-input"
            placeholder="Inserir endereço para ver preço"
            value={address}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="offers-section">
        {offers.map((offer, index) => (
          <div key={index} onClick={() => handleProductClick(offer.name)}>
            <CategoryCard
              imagem={offer.image}
              texto={offer.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
