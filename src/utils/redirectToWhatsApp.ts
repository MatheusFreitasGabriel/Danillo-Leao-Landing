export function redirectToWhatsApp(message: string) {
    const telefoneDanillo = "5511915479003"; // Coloque o número real aqui (Ex: 55 + DDD + Numero)
    const url = `https://wa.me/${telefoneDanillo}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // Abre em uma nova aba
}