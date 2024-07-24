import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductsPage.css';

const ProductsPage = () => {
  const { produtoNome } = useParams();

  return (
    <div className="products-page-container">
      {produtoNome ? (
        <>
          <h1>Produtos</h1>
          <p>Você selecionou o produto: {produtoNome}</p>
        </>
      ) : (
        <h1>Selecione algum produto</h1>
      )}
    </div>
  );
};

export default ProductsPage;
