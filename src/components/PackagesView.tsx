import { useMemo, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { getPaquetes } from "../services/paquetesService";
import AsyncState from "./AsyncState";
import PackageCard from "./PackageCard";
import PackageDetail from "./PackageDetail";

export default function PackagesView() {
  const { data, loading, error } = useFetch(getPaquetes);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const max = maxPrice === "" ? Infinity : Number(maxPrice);
    return (data ?? []).filter(
      (p) =>
        (p.nombre.toLowerCase().includes(q) || p.descripcion.toLowerCase().includes(q)) &&
        p.precioColones <= max,
    );
  }, [data, search, maxPrice]);

  return (
    <section>
      <div className="toolbar">
        <input
          type="search"
          name="buscar"
          aria-label="Buscar paquete"
          placeholder="Buscar paquete…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="number"
          name="precioMaximo"
          aria-label="Precio máximo en colones"
          placeholder="Precio máximo (₡)"
          value={maxPrice}
          min={0}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <AsyncState loading={loading} error={error} isEmpty={filtered.length === 0}>
        <div className="grid">
          {filtered.map((p) => (
            <PackageCard
              key={p.id}
              paquete={p}
              selected={p.id === selectedId}
              onSelect={setSelectedId}
            />
          ))}
        </div>
      </AsyncState>

      {selectedId !== null && (
        <PackageDetail id={selectedId} onClose={() => setSelectedId(null)} />
      )}
    </section>
  );
}