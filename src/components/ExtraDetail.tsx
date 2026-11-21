import { useFetch } from "../hooks/useFetch";
import { getExtra } from "../services/extrasService";
import { assetUrl } from "../services/http";
import { colones } from "../utils/format";
import AsyncState from "./AsyncState";

interface Props {
    id: number;
    onClose: () => void;
}

export default function ExtraDetail({ id, onClose }: Props) {
    const { data, loading, error } = useFetch((s) => getExtra(id, s), [id]);

    return (
        <section className="detail">
            <button onClick={onClose}>Cerrar</button>
            <AsyncState loading={loading} error={error} isEmpty={!data}>
                {data && (
                    <>
                        {data.productoAdicional?.imagenUrl && (
                            <img
                                src={assetUrl(data.productoAdicional.imagenUrl)}
                                alt={data.productoAdicional.nombre}
                                style={{ maxWidth: 240, borderRadius: 8 }}
                            />
                        )}
                        <h2>{data.productoAdicional?.nombre ?? data.nombre}</h2>
                        <h4>{data.nombre}</h4>
                        <p>{data.descripcion}</p>
                        <p>
                            {data.cantidadIncluida} {data.unidadMedida} · para {data.cantidadPersonas} personas
                        </p>
                        <p className="price">{colones(data.precioVentaColones)}</p>
                    </>
                )}
            </AsyncState>
        </section>
    );
}