import React from 'react';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import privacidad from './terms';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">

        <div className="container-fluid">

          <span className="font-weight-bold">© 2020 AtomicLabs. Todos los derechos reservados.</span>

            <div className="FooterRight">

              {/* <a className="Footer__brandPriv" href="/">
                <span className="font-weight-bold">Aviso de privacidad</span>
              </a> */}

              <div className="Footer__brandPriv">
                    <Link to="/terms" className="btn btn-primary">
                      Aviso de privacidad
                    </Link>
                  </div>

              <span className="spaces">  &nbsp;&nbsp;&nbsp;&nbsp;</span>

              
              <a className="Footer__brand" href="https://twitter.com/crisCruzCodes">
                <img className="Footer-logo" src={twitter} alt="Logo"/>
              </a>

              <span className="spaces">  &nbsp;&nbsp;&nbsp;&nbsp;</span>

              <a className="Footer__brand2" href="https://mx.linkedin.com/">
                <img className="Footer-logo2" src={linkedin} alt="Logo" />
              </a>
            </div>
        </div>        
      </div>
    );
  }
}

export default Footer;
