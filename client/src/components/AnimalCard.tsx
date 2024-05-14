import React from 'react';
import ContactButton from './ContactButton';
import ImageCard from './ImageCard';
import defaultImage from '../assets/default.webp';
import { AnimalCardProps } from '../models/AnimalCard';

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  return (
    <div className="flex justify-center">
      <ImageCard imgSrc={animal.image ? animal.image : defaultImage}>
        <h3 className="text-xl font-bold mb-2">{animal.name}</h3>
        <p className="text-sm h-20 mb-2">
          {animal.description}
        </p>
        <div className="space-x-4 mt-4 flex justify-center">
          <ContactButton />
        </div>
        <div className="justify-center mt-4">
          <p className="text-xs mb-1">
            Última vez visto/a en {animal.location} el {animal.lastSeen}
          </p>
        </div>
      </ImageCard>
    </div>
  );
}
export default AnimalCard;
