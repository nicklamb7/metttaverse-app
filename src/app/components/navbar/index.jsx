import React from 'react';
import './style.scss';

function Navbar() {
  const logo = 'Metttaverse';
  return (
    <div className="navbar">
      <div className="left-sectio">
        <h2>{logo}</h2>
      </div>
      <div className="right-section">
        <ul>
          <li><a>Sign in</a></li>
          <li>
            <button>
              Sign up
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
