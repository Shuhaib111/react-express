import React, { Component } from "react";

class StudentLanding extends Component {
  render() {
    return (
      <React.Fragment>
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
