import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';


const Galeria = () => {

    const images = [
        "/galeria/1.jpg",
        "/galeria/2.jpg",
        "/galeria/3.jpg",
        "/galeria/4.jpg",
        "/galeria/5.jpg",
        "/galeria/6.jpg",
        "/galeria/7.jpg",
        "/galeria/8.jpg",
        "/galeria/9.jpg",
        "/galeria/10.jpg",
        "/galeria/11.jpg",
        "/galeria/12.jpg",
        "/galeria/13.jpg",
        "/galeria/14.jpg",
        "/galeria/15.jpg",
        "/galeria/16.jpg",
        "/galeria/17.jpg",
        "/galeria/18.jpg",
      ];

      const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    return (
        <div className="galeria-container">
            <div className="p-movil col-12">
                <div className="row title mt-2">
                    <h2 className="text-center">Galeria</h2>
                </div>
            </div>
            <Carousel className="mt-3" activeIndex={index} onSelect={handleSelect}>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                <div className="galeria-image">
                    <img className="d-block w-100" src={image}  alt="First slide" />
                </div>
                </Carousel.Item>
            ))}
            </Carousel>
        </div>
    );
    }

export default Galeria;
