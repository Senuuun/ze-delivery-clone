import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './PasswordPage.css'; 

const PasswordPage = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (password === 'admin123') {
      navigate('/'); 
    } else {
    
      alert('Senha incorreta');
    }
  };

  return (
    <div className="password-container">
      <h2 className="password-message">Insira sua senha:</h2>
      <input 
        type="password" 
        placeholder="Senha" 
        value={password} 
        onChange={handlePasswordChange} 
      />
      <button className="submit-button" onClick={handleSubmit}>
        ENTRAR
      </button>
    </div>
  );
};

export default PasswordPage;
