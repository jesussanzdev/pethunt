import { PlusCircle } from "react-feather";
import AnimalCard from "../components/AnimalCard";
import { useEffect, useState } from "react";
import { AnimalProps } from "../models/Animal";

const Home: React.FC = () => {

    const [animalsData, setAnimalsData] = useState<AnimalProps[]>([]);

    useEffect(() => {
      fetch("/api/animals").then(
        response => response.json()
      ).then(
        data => {
          setAnimalsData(data.animals)
        }
      )
    }, [])

    return (
        <>
          <div className="text-center">
            <h2 className="text-white text-2xl mt-4 mb-4">Últimas publicaciones</h2>
          </div>
          <div className="container mx-auto grid pt-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {animalsData.map((animal, index) => (
                <AnimalCard key={index} animal={animal} />
              ))}
            </div>
          </div>
          <a className="btn btn-danger" style={{position: 'fixed', top: '92%', right: 10}} href="crear-anuncio">
            <PlusCircle />
          </a>
        </>
    );
}

export default Home;
