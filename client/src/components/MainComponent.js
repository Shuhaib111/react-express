import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavbarBrand } from "reactstrap";
import CarouselImg from "./CarouselComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    window.open("http://localhost:5000/google", "_self");
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavbarBrand>Team-9</NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <form className="form-inline">
                  <Link to="/google">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-light"
                      onClick={this.handleLogin}
                    >
                      Login with gmail account!!
                    </button>
                  </Link>
                </form>
              </li>
            </ul>
          </div>
        </nav>

        <CarouselImg />
      </React.Fragment>
    );
  }
}

export default Main;
