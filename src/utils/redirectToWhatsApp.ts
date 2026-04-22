// Define o tipo da função gtag
type GtagFn = (command: string, targetId: string, config?: object) => void;

// Estende a interface global do Window
declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function redirectToWhatsApp(message: string) {
    // Agora você pode usar window.gtag sem erro e com autocomplete
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-18112331364/your-label-here',
        });
    }

    const telefoneDanillo = "5511915479003";
    const url = `https://wa.me/${telefoneDanillo}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
}