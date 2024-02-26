import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  description: string;
  image: string;
  location: string;
  telephone: string;
  lastSeen: string;
}

const AnimalForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    image: '',
    location: '',
    telephone: '',
    lastSeen: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor o guardarlos en un estado global.
    console.log('Datos del Animal:', formData);
  };

  return (
    <div className="container mx-auto p-2">      
      <h2 className="text-white text-2xl mt-4 mb-4">Reportar Animal Perdido</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-white">Nombre</label>
          <input
            type="text"
            placeholder="Jackie"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-white">Descripción</label>
          <textarea
            id="description"
            placeholder="Border Collie con pelaje negro carbón y ojos azules."
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-white">URL de la Imagen</label>
          <input
            type="text"
            placeholder="https://ejemplo.com/imagen.jpg"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-white">Ubicación</label>
          <input
            placeholder="Plaza España, Madrid"
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-white">Teléfono de contacto</label>
          <input
            placeholder="867 732 732"
            type="text"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastSeen" className="block text-sm font-medium text-white">Última vez visto</label>
          <input
            type="date"
            id="lastSeen"
            name="lastSeen"
            value={formData.lastSeen}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md text-gray-400"
          />
        </div>
        <div className="mt-6">
          <button type="submit" className="btn btn-danger cursor-not-allowed opacity-50" disabled>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default AnimalForm;
