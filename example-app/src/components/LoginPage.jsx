import React, { useState } from 'react';
import './LoginPage.css';
// Import images
import rodeKorsLogo from '../assets/Redcross_logo.svg';
import vippsLogo from '../assets/vipps_logo.svg';
import oktaLogo from '../assets/okta_logo.svg';
import emailIcon from '../assets/e-mail icon.svg';
import externalIcon from '../assets/icon_external_page.svg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="login-page">
      <header className="header">
        <div className="logo-container">
          <img src={rodeKorsLogo} alt="Røde Kors Logo" className="rode-kors-logo" />
        </div>
      </header>

      <main className="main-content">
        <div className="login-container">
          <h1 className="login-title">Login</h1>
          
          <div className="login-columns">
            <div className="left-column">
              <div className="vipps-section">
                <h2 className="section-title">Ny <br />VIPPS-pålogging</h2>
                
                <p className="info-text">
                  Hvis du er <strong>ny bruker</strong> og har registrert deg hos Vipps er det bare 
                  å logge på videre med vipps-knappen.
                </p>
                
                <p className="info-text">
                  Hvis du er en <strong>eksisterende bruker</strong> og ønsker å logge inn med 
                  vipps for første gang, må vi koble profilen din til vipps.
                </p>
                
                <h3 className="subsection-title">Andre alternativer</h3>
                
                <p className="info-text">
                  Bruk Okta-appen eller brukernavnet og passordet du har fått fra 
                  frivillighetstjenesten vår.
                </p>
                
                <div className="help-link-container">
                  <a href="#" className="help-link">Trenger hjelp? <span className="external-icon"><img src={externalIcon} alt="External link" /></span></a>
                </div>
              </div>
            </div>
            
            <div className="right-column">
              <div className="login-options">
                <button className="vipps-button">
                  <div className="vipps-button-content">
                    <img src={vippsLogo} alt="Vipps" className="vipps-logo" />
                  </div>
                </button>
                
                <div className="divider">
                  <span>ELLER</span>
                </div>
                
                <button className="okta-button">
                  <div className="okta-button-content">
                    <span className="okta-text">OKTA FASTPASS</span>
                    <img src={oktaLogo} alt="Okta" className="okta-logo" />
                  </div>
                </button>
                
                <div className="divider">
                  <span>ELLER</span>
                </div>
                
                <form className="login-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">E-post</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="password">Passord</label>
                    <input 
                      type="password" 
                      id="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="forgot-password">
                    <a href="#">Glemt passord?</a>
                  </div>
                  
                  <button type="submit" className="login-button">
                    LOGIN <span className="login-icon"><img src={emailIcon} alt="Email" /></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <div className="footer-links">
          <a href="#">Personvern</a>
          <a href="#">Informasjonskapsler</a>
          <div className="footer-service">
            <span>FRIVILLIGSERVICE:</span>
            <span>E-post: frivilligservice@redcross.no</span>
            <span>Telefon: 22 05 40 00 (tastvalg 3)</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
