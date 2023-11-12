import React, { useState } from 'react';

function Navbar({ layout, setLayout, handleSubmit }) {
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
    setLayout(false);
  };

  const handleRegenerationDenial = (e) => {
    e.preventDefault();
    setConfirmation(false);
    // setLayout(false);
  };

  return (
    <div>
      <nav className="navbar">
      <div className="container">
        <div className="logo">Eclipse Layout Generator</div>
        <ul className="nav">
            <li className={confirmation ? 'warning' : 'hidden'}>
              <p onClick={handleRegenerationConfirmation}>Confirm Regeneration</p>
          </li>
            <li className={confirmation ? 'generate small-nav' : 'hidden'}>
              <p onClick={handleRegenerationDenial}>Deny Regeneration</p>
          </li>
            <li className={(layout && !confirmation) ? 'allow' : 'hidden'}>
              <p onClick={handleRegeneration}>Allow Regeneration</p>
          </li>
          <li className={layout ? 'generated' : 'generate'}>
              <p onClick={layout ? handleCheats : handleSubmit}>{ layout ? 'Deal With Game Layout' : 'Generate Game Layout' }</p>
          </li>
        </ul>
      </div>
      </nav>
    </div>
  )
}

export default Navbar
