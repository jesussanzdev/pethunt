import './App.css';
import Header from './components/Header';
import AnimalCard from './components/AnimalCard';
import bgImage1 from './assets/1.jpg';
import bgImage2 from './assets/2.webp';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import CreateForm from './components/CreateForm';
import { PlusCircle } from "react-feather";

interface Animal {
  name: string;
  description: string;
  image: string;
  location: string;
  lastSeen: string;
}

const animals: Animal[] = [
  {
    name: 'Toby',
    description:'Mezcla de gato montés con español, rayas naranjas y blancas. Tiene las patas blancas y los amarillos.',
    image: '',
    location: 'Zaragoza, España',
    lastSeen: '27 de septiembre',
  },
  {
    name: 'Luna',
    description:'Luna es una perrita de raza mestiza, de tamaño mediano, con un pelaje suave y color blanco y negro. Tiene una mancha negra en el pecho y una oreja caída.',
    image: '',
    location: 'Parque del Retiro en Madrid, España',
    lastSeen: '15 de septiembre',
  },
  {
    name: 'Simba',
    description: 'Simba es un gato siamés de ojos azules intensos. Es de tamaño pequeño y tiene un collar rojo con una chapa de identificación.',
    image: '',
    location: 'Barcelona, España',
    lastSeen: '5 de septiembre',
  },
  {
    name: 'Tommy',
    description: 'Gato de color canela con rayas marrones. Ojos amarillos, es muy tranquilo. Desde hace dos meses lleva un collar negro.',
    image: bgImage1,
    location: 'Zaragoza, España',
    lastSeen: '2 de septiembre',
  },
  {
    name: 'Kenai',
    description:'Mezcla de gato montés con español, rayas naranjas y blancas. Tiene las patas blancas y los amarillos.',
    image: '',
    location: 'Zaragoza, España',
    lastSeen: '27 de agosto',
  },
  {
    name: 'Miau',
    description: 'Miau es un gato de pelo largo y negro con ojos verdes. Es un felino tranquilo y curioso. Se perdió en Sevilla, España, el 8 de agosto.',
    image: '',
    location: 'Sevilla, España',
    lastSeen: '8 de agosto',
  },
  {
    name: 'Bobby',
    description: 'Bobby es un perro Labrador Retriever de pelaje dorado y amigable. Lleva un collar azul con una placa de identificación. Se perdió en Valencia, España, el 12 de junio.',
    image: '',
    location: 'Valencia, España',
    lastSeen: '12 de junio',
  },
  {
    name: 'Rex',
    description: 'Rex es un perro pastor alemán de pelaje negro y tostado. Es amigable y bien entrenado. Lleva un collar rojo con una etiqueta de identificación.',
    image: '',
    location: 'Madrid, España',
    lastSeen: '15 de mayo',
  },
  {
    name: 'Pelusa',
    description: 'Pelusa es una perrita mestiza de tamaño mediano. Su pelaje es blanco y negro. Tiene una personalidad juguetona y cariñosa. Se perdió en Málaga, España, el 20 de abril.',
    image: bgImage2,
    location: 'Málaga, España',
    lastSeen: '20 de abril',
  },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <div className="text-center">
            <h2 className="text-white text-2xl mt-4 mb-4">Últimas publicaciones</h2>
          </div>
          <div className="container mx-auto grid pt-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {animals.map((animal, index) => (
                <AnimalCard key={index} animal={animal} />
              ))}
            </div>
          </div>
          <a className="btn btn-danger" style={{position: 'fixed', top: '92%', right: 10}} href="crear-anuncio">
            <PlusCircle />
          </a>
        </>
      } />
      <Route path="/sobre-nosotros" element={
        <>
          <Header />
          <About />
        </>
      } />
      <Route path="/crear-anuncio" element={
        <>
          <Header />
          <CreateForm />
        </>
      } />
    </Routes>
  );
}

export default App;