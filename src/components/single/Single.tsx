import React, { useState, useContext } from 'react';
import { Tarea, TareasContextType } from '../../utils/types';
import { useParams } from 'react-router-dom';
import TareasContext from '../../context/TareasContext';
import DOMPurify from 'dompurify';
import './single.scss';

const Single = () => {
  const { id } = useParams();
  const { tareas } = useContext(TareasContext) as TareasContextType;

  const text = tareas?.filter((tarea) => tarea.idVideo === id);

  return (
    <div className='container'>
      {tareas
        ?.filter((tarea) => tarea.idVideo === id)
        .map((tarea) => (
          <div className='tarea' key={tarea.idVideo}>
            <h1>{tarea.cliente}</h1>
            <h2>{tarea.tester}</h2>
            <div className='videoContainer'>
              <iframe
                src={`${tarea.linkVideo}`}
                frameBorder='0'
                allowFullScreen
              ></iframe>
            </div>
            <div className='transcripcion'>
              <h2>Transcripcion</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(tarea.transcripcion),
                }}
              ></p>
            </div>

            <div className='tareas'>
              <h2>Tareas</h2>
              <p>Escenario: {tarea.escenario}</p>
              <ul className='listContainer'>
                {tarea.preguntas.map((pregunta, index) => (
                  <li key={index}>
                    <p>Tarea {index + 1}:</p>
                    <p>{pregunta.texto}</p>
                    <p>Duración de la tarea: {pregunta.tiempo}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Single;
