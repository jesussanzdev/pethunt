import React from 'react';
import { ImageCardProps } from '../models/ImageCard';

const ImageCard: React.FC<ImageCardProps> = ({ children, imgSrc, ...props }) => {
  return (
    <div {...props} className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
      <img src={imgSrc} alt="" className="transition-transform group-hover:scale-110 duration-200"/>
      <div className="bg-gradient-to-t from-black/60 to-transparent h-60">
        <div className="p-4 text-white h-full">{children}</div>
      </div>
    </div>
  );
}

export default ImageCard;
