import { get } from "./http";
import type { OpcionExtra } from "../types/extra";

export const getExtras = (signal?: AbortSignal) =>
    get<OpcionExtra[]>("/public/opciones-productos-adicionales", signal);