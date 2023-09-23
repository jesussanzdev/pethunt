import './App.css';
import ContactButton from './components/ContactButton';
import Header from './components/Header';
import defaultImage from './assets/default.png';
import bgImage1 from './assets/1.jpg';
import bgImage2 from './assets/2.webp';
import bgImage3 from './assets/3.avif';

import ImageCard from './components/ImageCard';

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <div className="container mx-auto grid pt-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            <div className="flex justify-center">
              <ImageCard imgSrc={bgImage1}>
              <h3 className="text-xl font-bold mb-2">Tommy</h3>
              <p className="text-sm h-20 mb-2" maxLength="150">
                  Mezcla de gato montés con español, rayas naranjas y blancas. Tiene las patas blancas y los amarillos.
                </p>

                <div className="space-x-4 mt-4 flex justify-center">
                  <ContactButton></ContactButton>

                </div>
                <div className="justify-center mt-4">
                <p className="text-xs mb-1">
                    Última vez visto/a en Zaragoza, España el 27 de septiembre
                </p>
                </div>
              </ImageCard>
            </div>
            <div className="flex justify-center">
              <ImageCard imgSrc={bgImage2}>
                <h3 className="text-xl font-bold mb-2">Luna</h3>
                <p className="text-sm h-20 mb-2" maxLength="150">
                  Luna es una perrita de raza mestiza, de tamaño mediano, con un pelaje suave y color blanco y negro. Tiene una mancha negra en el pecho y una oreja caída.
                </p>
                <div className="space-x-4 mt-4 flex justify-center">
                  <ContactButton></ContactButton>
                </div>
                <div className="justify-center mt-4">
                  <p className="text-xs mb-1">
                    Última vez vista en el Parque del Retiro en Madrid, España el 15 de septiembre
                  </p>
                </div>
              </ImageCard>
              </div>
              <div className="flex justify-center">
              <ImageCard imgSrc={bgImage3}>
                <h3 className="text-xl font-bold mb-2">Simba</h3>
                <p className="text-sm h-20 mb-2" maxLength="150">
                  Simba es un gato siamés de ojos azules intensos. Es de tamaño pequeño y tiene un collar rojo con una chapa de identificación.
                </p>
                <div className="space-x-4 mt-4 flex justify-center">
                  <ContactButton></ContactButton>
                </div>
                <div className="justify-center mt-4">
                  <p className="text-xs mb-1">
                    Última vez visto en Barcelona, España el 5 de septiembre
                  </p>
                </div>
              </ImageCard>
              </div>


              <div className="flex justify-center">
              <ImageCard imgSrc={defaultImage}>
                <h3 className="text-xl font-bold mb-2">Miau</h3>
                <p className="text-sm h-20 mb-2" maxLength="150">
                  Miau es un gato de pelo largo y negro con ojos verdes. Es un felino tranquilo y curioso. Se perdió en Sevilla, España, el 8 de agosto.
                </p>
                <div className="space-x-4 mt-4 flex justify-center">
                  <ContactButton></ContactButton>
                </div>
                <div className="justify-center mt-4">
                  <p className="text-xs mb-1">
                    Última vez visto en Sevilla, España el 8 de agosto
                  </p>
                </div>
              </ImageCard>
              </div>
              <div className="flex justify-center">
              <ImageCard imgSrc={defaultImage}>
                <h3 className="text-xl font-bold mb-2">Simba</h3>
                <p className="text-sm h-20 mb-2" maxLength="150">
                  Simba es un gato siamés de ojos azules intensos. Es de tamaño pequeño y tiene un collar rojo con una chapa de identificación.
                </p>
                <div className="space-x-4 mt-4 flex justify-center">
                  <ContactButton></ContactButton>
                </div>
                <div className="justify-center mt-4">
                  <p className="text-xs mb-1">
                    Última vez visto en Barcelona, España el 5 de julio
                  </p>
                </div>
              </ImageCard>

              </div>
              <div className="flex justify-center">
              <ImageCard imgSrc={defaultImage}>
                <h3 className="text-xl font-bold mb-2">Bobby</h3>
                <p className="text-sm h-20 mb-2" maxLength="150">
                  Bobby es un perro Labrador Retriever de pelaje dorado y amigable. Lleva un collar azul con una placa de identificación. Se perdió en Valencia, España, el 12 de junio.
                </p>
                <div className="space-x-4 mt-4 flex justify-center">
                  <ContactButton></ContactButton>
                </div>
                <div className="justify-center mt-4">
                  <p className="text-xs mb-1">
                    Última vez visto en Valencia, España el 12 de junio
                  </p>
                </div>
              </ImageCard>
              </div>
              <div className="flex justify-center">
              <ImageCard imgSrc={defaultImage}>
                  <h3 className="text-xl font-bold mb-2">Rex</h3>
                  <p className="text-sm h-20 mb-2" maxLength="150">
                    Rex es un perro pastor alemán de pelaje negro y tostado. Es amigable y bien entrenado. Lleva un collar rojo con una etiqueta de identificación.
                  </p>
                  <div className="space-x-4 mt-4 flex justify-center">
                    <ContactButton></ContactButton>
                  </div>
                  <div className="justify-center mt-4">
                    <p className="text-xs mb-1">
                      Última vez visto en Madrid, España el 15 de mayo
                    </p>
                  </div>
              </ImageCard>
              </div>
              <div className="flex justify-center">
              <ImageCard imgSrc={defaultImage}>
                <h3 className="text-xl font-bold mb-2">Pelusa</h3>
                <p className="text-sm h-20 mb-2" maxLength="150">
                  Pelusa es una perrita mestiza de tamaño mediano. Su pelaje es blanco y marrón. Tiene una personalidad juguetona y cariñosa. Se perdió en Málaga, España, el 20 de abril.
                </p>
                <div className="space-x-4 mt-4 flex justify-center">
                  <ContactButton></ContactButton>
                </div>
                <div className="justify-center mt-4">
                  <p className="text-xs mb-1">
                    Última vez vista en Málaga, España el 20 de abril
                  </p>
                </div>
              </ImageCard>
              </div>
              <div className="flex justify-center">
              <ImageCard imgSrc={defaultImage}>
                <h3 className="text-xl font-bold mb-2">Tommy</h3>
                <p className="text-sm h-20 mb-2" maxLength="150">
                  Mezcla de spaniard con collie, pelo blanco y negro. Es muy juguetón y tiene los ojos marrones.
                </p>

                <div className="space-x-4 mt-4 flex justify-center">
                  <ContactButton></ContactButton>

                </div>
                <div className="justify-center mt-4">
                <p className="text-xs mb-1">
                    Última vez visto/a en Zaragoza, España el 27 de febrero
                </p>
                </div>
              </ImageCard>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
