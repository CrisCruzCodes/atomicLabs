import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import '../../global.css';

class Form extends React.Component {
  state = {
    firstName: 'Cristian',
    lastName: 'Cruz',
    email: 'cristianhhg@gmail.com',
    telefono: '5572767702'
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div>

        <header>
          <Navbar />
        </header>

        <h1>Te queremos conocer</h1>

        <h2>Queremos saber que eres tú, por favor ingresa los siguientes datos:</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="telefono"
              name="telefono"
              value={this.state.telefono}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Enviar
          </button>
        </form>

        <footer>
          <Footer />
        </footer>

      </div>
    );
  }
}

export default Form;
