export interface ProductoAdicional {
    id: number;
    nombre: string;
    descripcion: string;
    imagenUrl: string | null;
}

export interface OpcionExtra {
    id: number;
    productoAdicionalId: number;
    productoAdicional: ProductoAdicional;
    nombre: string;
    descripcion: string;
    unidadMedida: string;
    cantidadIncluida: number;
    cantidadPersonas: number;
    precioVentaColones: number;
}