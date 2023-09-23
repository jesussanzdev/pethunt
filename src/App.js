import './App.css';
import ContactButton from './components/ContactButton';
import bgImage1 from './assets/1.webp';
import bgImage3 from './assets/3.jpg';

import ImageCard from './components/ImageCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="text-4xl pt-6 pb-6">
          ¡Bienvenidos a PetHunt!
        </h2>
        <br></br>
        <main className="App">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex justify-center">
              <ImageCard imgSrc={bgImage1}>
                <h3 className="text-xl font-bold mb-2">Tommy</h3>
                <p className="text-sm h-14 mb-2" maxLength="150">
                  Mezcla de spaniard con collie, pelo blanco y negro
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
            <div className="flex justify-center">
              <ImageCard imgSrc={bgImage3}>
              <h3 className="text-xl font-bold mb-2">Tommy</h3>
              <p className="text-sm h-14 mb-2" maxLength="150">
                  Mezcla de gato montés con español, rayas naranjas y blancas. Tiene las patas blancas y los amarillos.
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
            <div className="flex justify-center">
              <ImageCard imgSrc={bgImage1}>
                <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
                <p className="text-sm h-14 mb-2" maxLength="150">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, deleniti odit perspiciatis nemo iste error illo labore voluptate.
                </p>
                <div className="space-x-4 mt-4 flex justify-center">
                  <ContactButton></ContactButton>
                </div>
              </ImageCard>
            </div>
            <div className="flex justify-center">
              <ImageCard imgSrc={bgImage3}>
                <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
                <p className="text-sm h-14 mb-2" maxLength="150">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, deleniti odit perspiciatis nemo iste error illo labore voluptate.
                </p>
                <div className="space-x-4 mt-4 flex justify-center">
                  <ContactButton></ContactButton>
                </div>
              </ImageCard>
            </div>
          </div>
        </div>
        </main>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
