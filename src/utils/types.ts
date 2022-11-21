export interface Tarea {
    timeTest: string,
    plataforma: string,
    linkVideo: string,
    transcripcion: string,
    tester:string,
    preguntas: Pregunta[],
    horarioEnvio: {
        seconds: number,
        nanoseconds: number
    },
    idVideo: string,
        response: {
            status: number,
            data: string
        },
        id: string,
        escenario: string,
        link: string,
        cliente: string
}

interface Pregunta {
    tiempo: string,
    tipoTarea: string,
    respuesta: string,
    texto: string,
}


//context



export type TareasContextType = {
    tareas: Tarea[]
}