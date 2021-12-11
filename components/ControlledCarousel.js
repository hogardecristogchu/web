import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const images = [
  "/carrusel/1.jpg",
  "/carrusel/2.jpg",
  "/carrusel/3.jpg",
  "/carrusel/4.jpg",
  "/carrusel/5.jpg",
  "/carrusel/6.jpg",
  "/carrusel/7.jpg",
  "/carrusel/8.jpg",
];

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <div className="img-carousel" data-overlay="1">
            <img className="d-block w-100" height={645} src={image}  alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3 className="no-m titulo-caption">HOGAR DE CRISTO GUALEGUAYCHÚ</h3>
            <h6 className="solo-m subtitulo-caption">HOGAR DE CRISTO GUALEGUAYCHÚ</h6>
            <h6 className="no-m subtitulo-caption">“RECIBIR LA VIDA COMO VIENE”</h6>
            <p className="text-caption">“Una respuesta integral a la exclusión”</p>
            <Button className="boton-slider-1"><Link href="/quienes_somos"><a className="a-blancos">CONOCENOS</a></Link></Button>
            <Button className="boton-slider-2"><Link href="/como_colaborar"><a className="a-blancos">COLABORÁ CON NOSOTROS</a></Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
