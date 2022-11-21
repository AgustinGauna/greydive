import { createContext, ReactNode, useState, useEffect } from 'react';
import { Tarea } from '../utils/types';

const Context = createContext({});

interface Props {
  children: ReactNode;
}

export function TareasContextProvider({ children }: Props) {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('db.json', {
      signal,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTareas(data);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return <Context.Provider value={{ tareas }}>{children}</Context.Provider>;
}

export default Context;
