import type { ReactNode } from "react";

interface Props {
    loading: boolean;
    error: string | null;
    isEmpty: boolean;
    children: ReactNode;
}

export default function AsyncState({ loading, error, isEmpty, children }: Props) {
    if (loading) return <p className="state">Cargando…</p>;
    if (error) return <p className="state state-error" role="alert">No se pudo consultar: {error}</p>;
    if (isEmpty) return <p className="state">Sin resultados.</p>;
    return <>{children}</>;
}