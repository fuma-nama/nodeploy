export function absoluteUrl() {
    return process.env.VERCEL_URL != null
        ? new URL(`https://${process.env.VERCEL_URL}`)
        : new URL(`http://localhost:${process.env.PORT || 3000}`);
}
