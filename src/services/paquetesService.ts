import { get } from "./http";
import type { Paquete } from "../types/paquete";

export const getPaquetes = (signal?: AbortSignal) =>
    get<Paquete[]>("/public/paquetes", signal);

export const getPaquete = (id: number, signal?: AbortSignal) =>
    get<Paquete>(`/public/paquetes/${id}`, signal);