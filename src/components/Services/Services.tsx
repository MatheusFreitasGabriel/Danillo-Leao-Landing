"use client";

/* Arquivo criado na data 04/03/2026 */
/* Autor: Matheus de Freitas */

import { motion, Variants } from "framer-motion";
import { redirectToWhatsApp } from "@/src/utils/redirectToWhatsApp";
import ServicesCards from "./ServicesCards";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Services() {
  return (
    <section className="max-w-[1440px] w-full mx-auto px-6 lg:px-16 flex flex-col items-stretch gap-6 md:gap-12">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-row justify-center overflow-hidden items-center md:items-end"
      >
        <div className="flex flex-col gap-3 items-center">
          <motion.h2
            variants={item}
            className="text-center text-3xl font-bold md:text-5xl 2xl:text-6xl"
          >
            Meus serviços
          </motion.h2>

          <motion.p
            variants={item}
            className="text-center text-gray md:w-[80%] text-[16px] lg:text-[20px]"
          >
            Conheça os serviços jurídicos especializados na área da saúde, prestados com excelência, estratégia e total comprometimento com os seus direitos.
          </motion.p>
        </div>
      </motion.div>

      <ServicesCards></ServicesCards>


      <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col justify-between gap-2 md:flex-row"
      >
        <motion.p
          variants={item}
          className="text-center font-normal text-gray text-[14px] md:text-start md:w-[60%] md:text-[16px]"
        >
          Cada caso possui particularidades específicas. Se a sua necessidade não está listada acima, entre em contato para uma avaliação individualizada.
        </motion.p>


        <motion.div variants={item} className="flex items-center justify-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-24 h-8 transition-transform duration-300 rotate-90 md:rotate-0 text-gold-dark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </motion.div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            redirectToWhatsApp("Olá, Danillo! Gostaria de uma ajuda. Verifiquei seu site, mas não localizei exatamente o serviço que busco no momento. Você teria disponibilidade para analisar meu caso e verificar se pode me auxiliar?");
          }}
          className="bg-black text-white px-6 py-3 font-medium text-[16px] cursor-pointer hover:bg-gold-dark transition-all duration-300"
          >
        
          Falar com Danillo
        </button>
      </motion.div>
    </section>
  );
}