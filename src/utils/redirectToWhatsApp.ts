type GtagFn = (command: string, eventName: string, params?: object) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function redirectToWhatsApp(message: string) {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag('event', 'manual_event_CONTACT', {
        });
    }

    const telefoneDanillo = "5511915479003";
    const url = `https://wa.me/${telefoneDanillo}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
}