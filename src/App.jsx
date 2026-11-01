import { useState, useEffect } from 'react';
import PersonajeCard from './components/PersonajeCard';
import './index.css';

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters?limit=20')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setPersonajes(datos.items);
        setCargando(false);
      })
      .catch((error) => {
        console.log('Error al cargar los personajes: ' + error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p className="cargando">Cargando personajes...</p>;
  }

  return (
    <div className="contenedor">
      <h1 className="titulo">Dragon Ball Encyclopedia</h1>
      <div className="grid">
        {personajes.map((personaje) => (
          <PersonajeCard key={personaje.id} personaje={personaje} />
        ))}
      </div>
    </div>
  );
}

export default App;
