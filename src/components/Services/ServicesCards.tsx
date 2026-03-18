
"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

import { servicesItemData } from "./ServicesData";
import { redirectToWhatsApp } from "@/src/utils/redirectToWhatsApp";

const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, amount: 0.2 } as const;

const MOBILE_CARD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0 },
};

const DESKTOP_LEFT_VARIANTS: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

const DESKTOP_RIGHT_VARIANTS: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0 },
};

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);
    const updateMatch = (event?: MediaQueryListEvent) => {
      setMatches(event ? event.matches : mediaQueryList.matches);
    };

    updateMatch();

    mediaQueryList.addEventListener("change", updateMatch);
    return () => mediaQueryList.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
}

export default function ServicesCards() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6">
      {servicesItemData.map((item, index) => {
        const isEven = index % 2 === 0;

        const variants = !isDesktop
          ? MOBILE_CARD_VARIANTS
          : isEven
          ? DESKTOP_LEFT_VARIANTS
          : DESKTOP_RIGHT_VARIANTS;

        return (
          <motion.article
            key={item.id}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            transition={{
              duration: 0.8,
              ease: EASE_SMOOTH,
              delay: index * 0.25,
            }}
            className="relative w-full bg-[#000000] text-white rounded-4xl px-6 py-12 md:px-9 md:py-24"
          >
            <div className="relative z-10 flex flex-col items-start gap-12">
              <div className="flex flex-col gap-6">
                <span className="text-[14px] text-gold-light font-normal md:text-[16px]">
                  {item.indicator}
                </span>
                <h3 className="text-2xl font-bold md:text-4xl">{item.title}</h3>
                <p className="text-[14px] text-[#bdb9b6] md:text-[16px]">
                  {item.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => redirectToWhatsApp(item.messageWhatsApp)}
                className="cursor-pointer px-4 py-3 bg-gold-dark text-[16px] font-medium text-white transition-colors duration-300 hover:bg-black "
              >
                Falar com Danillo
              </button>
            </div>
            <Image
              src={item.imageBackground}
              alt="imagem de fundo"
              fill
              className="object-cover opacity-30 z-0 rounded-4xl"
            />
          </motion.article>
        );
      })}
    </div>
  );
}