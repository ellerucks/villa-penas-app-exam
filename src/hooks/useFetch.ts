import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(
    fetcher: (signal: AbortSignal) => Promise<T>,
    deps: unknown[] = [],
): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const ctrl = new AbortController();
        setState({ data: null, loading: true, error: null });

        fetcher(ctrl.signal)
            .then((data) => setState({ data, loading: false, error: null }))
            .catch((e: unknown) => {
                if (e instanceof DOMException && e.name === "AbortError") return;
                const msg = e instanceof Error ? e.message : "Error desconocido";
                setState({ data: null, loading: false, error: msg });
            });

        return () => ctrl.abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return state;
}