function Actividad2() {
    const persona = {
      nombre: "Emilce",
      edad: 32,
      profesion: "Desarrolladora Fullstack",
    };
  
    const { nombre, edad, profesion } = persona;
    persona.ciudad = "Cordoba";
  
    return (
      <div>
        <h2>Actividad 2 - Desestructuración</h2>
        <p>{`${nombre} tiene ${edad} años y trabaja como ${profesion}.`}</p>
        <p>Vive en {persona.ciudad}.</p>
      </div>
    );
  }
  
  export default Actividad2;