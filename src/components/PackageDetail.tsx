import { useFetch } from "../hooks/useFetch";
import { getPaquete } from "../services/paquetesService";
import { colones } from "../utils/format";
import AsyncState from "./AsyncState";

interface Props {
    id: number;
    onClose: () => void;
}

export default function PackageDetail({ id, onClose }: Props) {
    const { data, loading, error } = useFetch((s) => getPaquete(id, s), [id]);

    return (
        <section className="detail">
            <button onClick={onClose}>Cerrar</button>
            <AsyncState loading={loading} error={error} isEmpty={!data}>
                {data && (
                    <>
                        <h2>{data.nombre}</h2>
                        <p>{data.descripcion}</p>
                        <p className="price">{colones(data.precioColones)}</p>
                        <h4>Incluye</h4>
                        <ul>
                            {[...data.paquetesServicios]
                                .sort((a, b) => a.orden - b.orden)
                                .map((ps) => (
                                    <li key={ps.id}>
                                        <strong>{ps.servicio.nombre}</strong>: {ps.servicio.descripcion}
                                        {ps.cantidad ? ` (x${ps.cantidad})` : ""}
                                    </li>
                                ))}
                        </ul>
                    </>
                )}
            </AsyncState>
        </section>
    );
}