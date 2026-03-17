"use client";

import { useState, useCallback, memo } from "react";
import { motion, type Variants } from "framer-motion";
import { helpItems } from "./ICanHelpData";
import { redirectToWhatsApp } from "@/src/utils/redirectToWhatsApp";

const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const VIEWPORT = { once: true, amount: 0.2 } as const;

const GRID_OPEN = "grid-rows-[1fr] opacity-100 mt-3";
const GRID_CLOSED = "grid-rows-[0fr] opacity-0 mt-0";

const CHEVRON_SVG = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function ICanHelpAcordeons() {
  // Mantemos o primeiro aberto por padrão para SEO (conteúdo visível logo no load)
  const [openId, setOpenId] = useState<number | null>(helpItems[0]?.id ?? null);

  const toggleItem = useCallback((id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="flex flex-col gap-6 w-full overflow-hidden">
      {helpItems.map((item) => {
        const isOpen = openId === item.id;
        const gridClass = isOpen ? GRID_OPEN : GRID_CLOSED;
        const contentId = `content-${item.id}`;
        const headerId = `header-${item.id}`;

        return (
          <motion.article
            key={item.id}
            variants={ITEM_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-row w-full items-stretch"
          >
            {/* Bloco decorativo lateral */}
            <div className="relative hidden md:block md:w-64 shrink-0 md:mr-6 bg-gold-dark" aria-hidden="true" />

            <div className="flex flex-col justify-between w-full gap-6 md:flex-row py-6 pb-12 border-b border-[#808080]">
              <div className="flex flex-col min-w-[120px]">
                <p className="text-2xl font-bold text-black mb-2">
                  {String(item.id).padStart(2, "0")}.
                </p>
                <div className={`grid transition-all duration-300 ease-in-out ${gridClass}`}>
                  <div className="overflow-hidden flex flex-col gap-1">
                    {item.audience.map((client) => (
                      <span
                        key={client}
                        className="text-[16px] font-medium text-gold-dark md:text-[20px]"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[80%]">
                <div className="flex-1 text-start">
                  {/* ACORDEON HEADER - Transformado em Button para SEO/Acessibilidade */}
                  <button
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleItem(item.id)}
                    className="flex flex-row justify-between items-center w-full text-left cursor-pointer group focus:outline-none"
                  >
                    <h3 className="font-bold text-[20px] text-black md:text-2xl pr-4 group-hover:text-gold-dark transition-colors duration-300">
                      {item.problem}
                    </h3>
                    <div
                      className={`transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : "rotate-0"}`}
                      aria-hidden="true"
                    >
                      {CHEVRON_SVG}
                    </div>
                  </button>

                  {/* ACORDEON CONTENT */}
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className={`grid transition-all duration-300 ease-in-out ${gridClass}`}
                  >
                    <div className="overflow-hidden flex flex-col items-start gap-4">
                      <div className="pt-2">
                         {/* Usando <p> em vez de <h4> para manter a hierarquia SEO correta */}
                        <p className="text-[16px] text-gray-dark leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          redirectToWhatsApp(item.whatsAppMessage);
                        }}
                        className="bg-black text-white px-6 py-3 font-medium text-[16px] cursor-pointer hover:bg-gold-dark transition-all duration-300"
                      >
                        Falar com Danillo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

export default memo(ICanHelpAcordeons);