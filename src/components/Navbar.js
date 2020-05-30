import React from 'react';
import logo from '../assets/atomicLogo.webp';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" class="m-5" src={logo} alt="Logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;