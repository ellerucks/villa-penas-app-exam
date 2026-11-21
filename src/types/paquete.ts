export interface Servicio {
    id: number;
    nombre: string;
    descripcion: string;
    unidadMedida: string;
    activo: boolean;
    fechaCreacion: string;
    fechaActualizacion: string;
}

export interface PaqueteServicio {
    id: number;
    paqueteId: number;
    servicioId: number;
    cantidad: number | null;
    detalle: string | null;
    orden: number;
    servicio: Servicio;
}

export interface Paquete {
    id: number;
    nombre: string;
    descripcion: string;
    precioColones: number;
    activo: boolean;
    paquetesServicios: PaqueteServicio[];
}