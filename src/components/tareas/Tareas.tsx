import { useEffect, useState, useContext } from 'react';
import './tareas.scss';
import { Link } from 'react-router-dom';
import TareasContext from '../../context/TareasContext';
import { TareasContextType } from '../../utils/types';

function Tareas() {
  const { tareas } = useContext(TareasContext) as TareasContextType;

  return (
    <div className='tareas'>
      {tareas?.map((tarea, index) => (
        <Link key={tarea.idVideo} to={`/post/${tarea.idVideo}`}>
          <div className='tarea'>
            <p>Escenario: {tarea.escenario}</p>
            <p>Preguntas: {tarea.preguntas.length}</p>
            <p>Cliente: {tarea.cliente}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Tareas;
