import type { OpcionExtra } from "../types/extra";
import { assetUrl } from "../services/http";
import { colones } from "../utils/format";

interface Props {
    extra: OpcionExtra;
    onSelect?: (id: number) => void;
}

export default function ExtraCard({ extra, onSelect }: Props) {
    const img = assetUrl(extra.productoAdicional.imagenUrl);
    return (
        <article className="card">
            {img && <img src={img} alt={extra.productoAdicional.nombre} loading="lazy" />}
            <h3>{extra.productoAdicional.nombre}</h3>
            <h4>{extra.nombre}</h4>
            <p>{extra.descripcion}</p>
            <p>
                {extra.cantidadIncluida} {extra.unidadMedida} · para {extra.cantidadPersonas} personas
            </p>
            <p className="price">{colones(extra.precioVentaColones)}</p>
            {onSelect && <button onClick={() => onSelect(extra.id)}>Ver detalle</button>}
        </article>
    );
}