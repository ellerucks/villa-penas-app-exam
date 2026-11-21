export const colones = (n: number): string =>
    new Intl.NumberFormat("es-CR", {
        style: "currency",
        currency: "CRC",
        maximumFractionDigits: 0,
    }).format(n);