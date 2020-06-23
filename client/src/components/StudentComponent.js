import React, { Component } from "react";
import { NavbarBrand, Button } from "reactstrap";
import { Link } from "react-router-dom";

class StudentLanding extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    //window.open("http://localhost:5000/logout", "_self");
    window.open("http://localhost:5000/logout", "_self");
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavbarBrand>Team 9</NavbarBrand>
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
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item ">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-lg-right">Welcome</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Button
                  className="nav-link text-lg-right"
                  onClick={this.handleLogout}
                >
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container outsideDiv">
          <div className="jumbotron jumboAlign">
            <h1>Welcome to the playground!</h1>
            <p>Improve Upon your Social and Emotional Learning skills!</p>
          </div>

          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4  ">
            <div className="col mb-4">
              <div className="card h-100 border border-dark">
                <img
                  src="https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  className="card-img-top"
                  alt="cardImage1"
                />
                <div className="card-body">
                  <h5 className="card-title">Game Name</h5>
                  <p className="card-text">
                    The basic description of the game will come here.
                  </p>
                  <button className="btn btn-primary">Play Game!</button>
                </div>
              </div>
            </div>

            <div className="col mb-4">
              <div className="card h-100 border border-dark">
                <img
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  className="card-img-top"
                  alt="cardImage2"
                />
                <div className="card-body">
                  <h5 className="card-title">Game Name</h5>
                  <p className="card-text">
                    The basic description of the game will come here.
                  </p>
                  <button className="btn btn-primary">Play Game!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StudentLanding;
