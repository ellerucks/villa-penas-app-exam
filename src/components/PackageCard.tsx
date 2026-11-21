import type { Paquete } from "../types/paquete";
import { colones } from "../utils/format";

interface Props {
    paquete: Paquete;
    selected: boolean;
    onSelect: (id: number) => void;
}

export default function PackageCard({ paquete, selected, onSelect }: Props) {
    return (
        <article className={`card${selected ? " card-selected" : ""}`}>
            <h3>{paquete.nombre}</h3>
            <p>{paquete.descripcion}</p>
            <p className="price">{colones(paquete.precioColones)}</p>
            <button onClick={() => onSelect(paquete.id)}>Ver detalle</button>
        </article>
    );
}