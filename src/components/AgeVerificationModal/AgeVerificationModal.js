import React, { useState } from 'react';
import './AgeVerificationModal.css';
import logo from '../../assets/images/logo2.png'; 

const AgeVerificationModal = ({ onConfirm }) => {
  const [showModal, setShowModal] = useState(true);

  const handleConfirm = (isOfAge) => {
    setShowModal(false);
    onConfirm(isOfAge);
  };

  return (
    showModal && (
      <div className="age-verification-modal">
        <div className="modal-content">
          <img src={logo} alt="Ze Delivery Logo" className="modal-logo" />
          <h2>Você tem 18 anos ou mais?</h2>
          <div className="modal-buttons">
            <button onClick={() => handleConfirm(false)}>Não</button>
            <button onClick={() => handleConfirm(true)}>Sim</button>
          </div>
        </div>
      </div>
    )
  );
};

export default AgeVerificationModal;
