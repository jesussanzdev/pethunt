import React from 'react';
import shelter from '../assets/shelter.png';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-2">
      <h2 className="text-white text-2xl mt-4 mb-4">Sobre nosotros</h2>
      <div className="text-sm text-white">
        <p>
          Salvapatas es una aplicación OpenSource que busca centralizar todas las mascotas perdidas de España. Nuestra misión es conectar a dueños preocupados con sus amados animales extraviados. Con una amplia base de datos de animales desaparecidos en toda España, ofrecemos un espacio centralizado y de confianza para reportar y encontrar mascotas perdidas. Con Salvapatas, unimos corazones peludos con sus hogares, brindando esperanza y felicidad a cada paso del camino. ¡Somos la voz de los animales perdidos en España!
        </p> 
        <br />
        <img src={shelter} className="max-w-xs" alt="Salvapatas Refugio"/>          
      </div>
    </div>
  );
};

export default About;