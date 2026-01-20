import React, { useState } from 'react';

export default function ListaBoda() {
  const [copied, setCopied] = useState(false);
  const iban = "ES81 2100 8014 6002 0008 5555";

  const handleCopyIban = async () => {
    try {
      await navigator.clipboard.writeText(iban.replace(/\s/g, ''));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <section id="lista-boda" className="lista-section">
      <div className="lista-container">
        <div className="lista-content">
          <h3 className="lista-title">Lista de boda</h3>
          <p className="lista-description">
            Lo más importante ya lo tenemos: compartir este día con vosotros. Si además queréis ayudarnos en esta nueva etapa, estaremos muy agradecidos.
          </p>
          <div className="lista-iban-container">
            <span className="lista-iban-label">Número de cuenta (IBAN)</span>
            <div className="lista-iban-wrapper">
              <p className="lista-iban">{iban}</p>
              <button 
                onClick={handleCopyIban} 
                className={`copy-iban-icon-btn ${copied ? 'copied' : ''}`}
                title={copied ? "¡Copiado!" : "Copiar IBAN"}
                aria-label="Copiar IBAN"
              >
                {copied ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {copied && <span className="copy-tooltip">¡Copiado!</span>}
              </button>
            </div>
            <p className="lista-iban-name">Celia Gómez Labrador</p>
            <p className="lista-iban-name">Miguel Alonso Sánchez</p>
          </div>
          <img src="/images/photos/flor.png" alt="Flor" className="lista-ornament" />
        </div>
        <div className="lista-image-col">
          <img src="/images/photos/pedida1.jpg" alt="Pareja" className="lista-img" />
        </div>
      </div>
    </section>
  );
}
