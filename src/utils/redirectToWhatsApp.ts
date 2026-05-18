import { ConstrantsVariables } from "./globalVariables";

type GtagFn = (command: string, eventName: string, params?: object) => void;


declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function redirectToWhatsApp(message: string) {
  const telefoneDanillo = ConstrantsVariables.phone;
  const url = `https://wa.me/${telefoneDanillo}?text=${encodeURIComponent(message)}`;

  const novaAba = typeof window !== "undefined" ? window.open("about:blank", "_blank") : null;

  
  const callback = function () {
    if (novaAba) {
      novaAba.location.href = url;
    } else if (typeof window !== "undefined") {
      window.location.href = url;
    }
  };

  // Verifica se o gtag existe na página
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag('event', 'conversion_event_contact', {
      'event_callback': callback,
      'event_timeout': 2000,
    });
  } else {
    callback();
  }
}