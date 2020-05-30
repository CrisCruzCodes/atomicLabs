import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import potencial from '../../assets/Group 4032.png';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };
  render() {
    return (
      
      <body >      
        <header>
          <Navbar />
        </header>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8" >
                <img className="Home-logo" src={potencial} alt="Logo" />
              </div>
              <div className="col-lg-4">
                <center className="mt-5">
                  <h1>        
                    <span className="font-weight-bold" class="white">Desarrolla todo <br/>
                    <strong className="orange"> tu POTENCIAL</strong> <br/> dentro del equipo <br/>
                    <strong className="orange"> ATOMIC</strong>LABS</span>
                  </h1>

                  <div className="Form__button">
                    <Link to="/form" className="btn btn-primary">
                      ¡Quiero ser parte!
                    </Link>
                  </div>

                </center>
              </div>
            </div>
          </div>
        </section>
        
        <center className="mt-5">
          
        <footer>
          <Footer />
        </footer>      
          </center>
      </body>
    );
  }
}

export default Home;