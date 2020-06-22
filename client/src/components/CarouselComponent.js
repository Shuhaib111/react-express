import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class CarouselImg extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img
            src="https://images.unsplash.com/photo-1503847752244-32e931070a43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            alt="image1"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1574758324765-a29c77fb9c91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="image2"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            alt="image3"
          />
        </div>
      </Carousel>
    );
  }
}

export default CarouselImg;
