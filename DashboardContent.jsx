import React, { useEffect } from 'react';
import './DashboardContent.css';
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function DashboardContent() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="dashboard-content">

      <div className="Bienvenida" data-aos="zoom-in">
        <h1>Bienvenida a mi Pagina Web</h1>
      </div>

      <div className="section text-first" data-aos="fade-right">
        <div className="text-content">
          <h2>Diseño con Propósito</h2>
          <p>
            Jenny Duarte es una destacada marca peruana con más de 25 años de experiencia, dedicada a realzar la belleza de las mujeres con autenticidad y elegancia. Se distingue por el uso de materiales naturales y sostenibles, adoptando prácticas de moda ética que promueven el respeto por el medio ambiente. Cada creación refleja compromiso con la calidad, la sostenibilidad y la belleza consciente.
          </p>
          <Link to="/Diseño" className='link-button'>Descubrir más</Link>
        </div>

        <img 
          src="/img1.jpeg" 
          alt="Diseño con propósito" 
          className="image"
          loading="lazy"
        />
      </div>

      <div className="section image-first" data-aos="fade-left">
        <div className="text-content">
          <h2>Novias</h2>
          <p>
            Cada vestido de novia en Jenny Duarte es como una joya única, diseñada con el máximo cuidado y dedicación. Reflejan elegancia, sofisticación y un estilo personal, asegurando que resaltes tu esencia mientras celebras tu amor con un diseño exclusivo y atemporal.
          </p>
          <Link to="/Novias" className="link-button">Descubrir más</Link>
        </div>

        <img 
          src="img2.jpeg" 
          alt="Vestidos de novia" 
          className="image"
          loading="lazy"
        />
      </div>

      <div className="section text-first" data-aos="zoom-in-up">
        <div className="text-content">
          <h2>Couture</h2>
          <p>
            Cada vestido de Jenny Duarte Couture es una obra de arte única, donde se fusionan la fantasía del diseño con la belleza del color, el lujo de los materiales y el meticuloso trabajo manual. Diseños pensados para destacar con elegancia en cada ocasión.
          </p>
          <Link to='/Couture' className='link-button'>Descubrir más</Link>
        </div>

        <img 
          src="img3.jpeg" 
          alt="Couture" 
          className="image"
          loading="lazy"
        />
      </div>

      <div className="section image-first" data-aos="fade-right">
        <div className="text-content">
          <h2>Gama Alta</h2>
          <p>
            Nuestra línea de Gama Alta fusiona diseño contemporáneo con respeto por la tradición. Confeccionada con algodón Pima, baby alpaca y tintes naturales, esta colección representa lujo sostenible, trabajo artesanal y amor por nuestras raíces.
          </p>
          <Link to='/GamaAlta' className='link-button'>Descubrir más</Link>
        </div>

        <img 
          src="img4.jpeg" 
          alt="Gama Alta" 
          className="image"
          loading="lazy"
        />
      </div>

      <div className="section text-first" data-aos="zoom-in-up">
        <div className="text-content">
          <h2>Moda con Identidad</h2>
          <p>
            Cada diseño de Jenny Duarte celebra la historia, la tierra y la esencia peruana. Con piezas que rinden homenaje al arte textil y al alma femenina, la marca viste con propósito y elegancia cada paso de la mujer que quiere destacar.
          </p>
          <Link to='/Modas' className='link-button'>Descubrir más</Link>
        </div>

        <img 
          src="img5.jpeg" 
          alt="Moda con identidad" 
          className="image"
          loading="lazy"
        />
      </div>

      <div className='instagram-section' data-aos="fade-up">
        <div 
          className='elfsight-app-60138cae-ebda-4f15-8a65-e77e7eb870d1' 
          data-elfsight-app-lazy>
        </div>
      </div>

    </div>
  );
}

export default DashboardContent;