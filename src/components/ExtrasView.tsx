import { useMemo, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { getExtras } from "../services/extrasService";
import AsyncState from "./AsyncState";
import ExtraCard from "./ExtraCard";

export default function ExtrasView() {
    const { data, loading, error } = useFetch(getExtras);
    const [producto, setProducto] = useState("todos");

    const productos = useMemo(
        () => Array.from(new Set((data ?? []).map((e) => e.productoAdicional.nombre))),
        [data],
    );

    const filtered = (data ?? []).filter(
        (e) => producto === "todos" || e.productoAdicional.nombre === producto,
    );

    return (
        <section>
            <div className="toolbar">
                <select
                    name="producto"
                    aria-label="Filtrar por producto"
                    value={producto}
                    onChange={(e) => setProducto(e.target.value)}
                >
                    <option value="todos">Todos los productos</option>
                    {productos.map((p) => (
                        <option key={p} value={p}>
                            {p}
                        </option>
                    ))}
                </select>
            </div>

            <AsyncState loading={loading} error={error} isEmpty={filtered.length === 0}>
                <div className="grid">
                    {filtered.map((e) => (
                        <ExtraCard key={e.id} extra={e} />
                    ))}
                </div>
            </AsyncState>
        </section>
    );
}
