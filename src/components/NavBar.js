import React from 'react';

function NavBarComp() {
  return (
    <div className="centered-container">
      <div className="centered-items">
        <h1 className="brand-name" style={{ fontWeight: 'bold', fontFamily: 'SSENSE, sans-serif' }}>
          CRYSTAL YE
        </h1>
        <div className="nav-buttons">
          <button className="nav-button" onClick={() => window.location.href = '#about'}>ABOUT</button>
          <button className="nav-button" onClick={() => window.location.href = '#projects'}>PROJECTS</button>
          <button className="nav-button" onClick={() => window.location.href = '#contact'}>CONTACT</button>
        </div>
      </div>
    </div>
  );
}

export default NavBarComp;
