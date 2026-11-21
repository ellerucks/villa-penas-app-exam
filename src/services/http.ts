const BASE = import.meta.env.VITE_API_URL as string;

export const assetUrl = (path: string | null): string =>
    path ? `${BASE}${path}` : "";

export async function get<T>(path: string, signal?: AbortSignal): Promise<T> {
    const res = await fetch(`${BASE}${path}`, {
        headers: { Accept: "application/json" },
        signal,
    });

    if (!res.ok) {
        let msg = res.statusText;
        try {
            const body = (await res.json()) as { message?: string | string[] };
            if (body.message) {
                msg = Array.isArray(body.message) ? body.message.join(", ") : body.message;
            }
        } catch {
            // la respuesta de error no era JSON
        }
        throw new Error(`${res.status} · ${msg}`);
    }

    return res.json() as Promise<T>;
}