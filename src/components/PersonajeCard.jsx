function PersonajeCard({ personaje }) {
  return (
    <div className="card">
      <img src={personaje.image} alt={personaje.name} />
      <div className="card-info">
        <h2>{personaje.name}</h2>
        <p><span>Raza:</span> {personaje.race}</p>
        <p><span>Ki:</span> {personaje.ki}</p>
        <p><span>Afiliación:</span> {personaje.affiliation}</p>
      </div>
    </div>
  );
}

export default PersonajeCard;
