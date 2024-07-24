import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';
import logo3 from '../../assets/images/logo3.png'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (email === 'admin@admin.com') {
      navigate('/password'); 
    } else {
    
      alert('E-mail inválido');
    }
  };

  return (
    <div className="login-container">
      <span className="back-arrow" onClick={() => window.history.back()}>
        &#8592; Voltar
      </span>
      <div className="login-form">
        <img src={logo3} alt="Logo" className="login-logo" />
        <h2 className="login-message">Insira seu e-mail para entrar ou se cadastrar:</h2>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={handleEmailChange} 
        />
        <button className="Entrar-botao" onClick={handleSubmit}>
          CONTINUAR COM E-MAIL
        </button>
      </div>
      <div className="footer">
        <div className="footer-text">
          <span className="footer-link">Termos de uso</span> | <span className="footer-link">Política de privacidade</span>
        </div>
        <div className="footer-company-info">
          ZE SOLUCOES TECNOLOGICAS DE COMERCIO DE BEBIDAS LTDA. - CNPJ: 37.657.197/0001-46
          <br />
          Rua Fradique Coutinho, 1632 - CEP: 05.416-002
          <br />
          Pinheiros - São Paulo/SP
        </div>
      </div>
    </div>
  );
};

export default Login;