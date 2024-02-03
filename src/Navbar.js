import React, { useState } from 'react';

function Navbar({ generated, setGenerated, handleMainFormSubmit }) {
  const [confirmation, setConfirmation] = useState(false);

  const handleCheats = (e) => {
    e.preventDefault();
    alert("It's done, deal with it!");
  };

  const handleRegeneration = (e) => {
    e.preventDefault();
    setConfirmation(true);
  };

  const handleRegenerationConfirmation = (e) => {
    e.preventDefault();
    setConfirmation(false);
    setGenerated(false);
  };

  const handleRegenerationDenial = (e) => {
    e.preventDefault();
    setConfirmation(false);
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='container'>
          <div className='logo'>Eclipse Layout Generator</div>
          <ul className='nav'>
            <li className={confirmation ? 'generate small-nav' : 'hidden'}>
              <p onClick={handleRegenerationDenial}>Deny Regeneration</p>
            </li>
            <li className={confirmation ? 'warning' : 'hidden'}>
              <p onClick={handleRegenerationConfirmation}>
                Confirm Regeneration
              </p>
            </li>
            <li className={generated && !confirmation ? 'allow' : 'hidden'}>
              <p onClick={handleRegeneration}>Allow Regeneration</p>
            </li>
            <li className={generated ? 'generated' : 'generate'}>
              <p onClick={generated ? handleCheats : handleMainFormSubmit}>
                {generated ? 'Deal With Game Layout' : 'Generate Game Layout'}
              </p>
            </li>
            <li className={`generate calculator-link ${!confirmation ? '' : 'hidden'}`}>
              <a
                href='https://eclipse-battle-calculator.onrender.com'
                target='_blank'
                rel='noopener noreferrer'>
                Battle Calculator
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
