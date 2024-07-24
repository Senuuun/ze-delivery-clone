import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ imagem, texto }) => {
  return (
    <div className="category-card">
      <img src={imagem} alt={texto} className="category-image" />
      <div className="category-text">{texto}</div>
    </div>
  );
};

export default CategoryCard;