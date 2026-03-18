"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: EASE_SMOOTH,
      staggerChildren: 0.2,
    },
  },
};

const LEFT_COLUMN_VARIANTS: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_SMOOTH },
  },
};

const RIGHT_COLUMN_VARIANTS: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_SMOOTH },
  },
};

const TEXT_ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SMOOTH },
  },
};

const VIEWPORT = { once: true, amount: 0.3 } as const;

export default function CtaSection() {
  return (
    <section className="relative w-full py-[64px] 2xl:py-[128px] bg-[#000000] flex justify-center items-center overflow-hidden">
      <Image
        src="/images/image-fundo-cta.jpg"
        alt="Biblioteca antiga"
        fill
        className="z-0 object-cover object-center opacity-30"
      />

      <motion.div
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="relative z-10 max-w-[1440px] w-full px-6 lg:px-16 flex flex-col justify-between items-end gap-[96px] md:gap-[128px] md:flex-row"
      >
        <motion.div
          variants={LEFT_COLUMN_VARIANTS}
          className="flex flex-col gap-12"
        >
          <Image
            src="/images/logo.png"
            alt="logotipo Danillo Leão"
            width={180}
            height={52}
          />

          <div className="flex flex-col gap-3 items-start justify-baseline">
            <motion.span
              variants={TEXT_ITEM_VARIANTS}
              className="text-gold-light text-[16px] md:text-[20px] font-normal"
            >
              Entre em contato
            </motion.span>

            <motion.h2
              variants={TEXT_ITEM_VARIANTS}
              className="text-start text-white md:text-left font-bold text-4xl lg:text-[64px]"
            >
              Precisa de orientação jurídica especializada?
            </motion.h2>

            <motion.p
              variants={TEXT_ITEM_VARIANTS}
              className="text-[16px] 2xl:text-[20px] text-[#bebebe] max-w-xl"
            >
              Entre em contato diretamente com Danillo para uma análise técnica
              e personalizada do seu caso na área médica.
            </motion.p>

            <motion.button
              type="button"
              variants={TEXT_ITEM_VARIANTS}
              className="bg-gold-dark text-white px-6 py-3 font-medium text-[18px] cursor-pointer hover:bg-black transition-all duration-300"
            >
              Falar com Danillo
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          variants={RIGHT_COLUMN_VARIANTS}
          className="flex flex-row w-full justify-between gap-8 md:gap-16"
        >
          <motion.div
            variants={TEXT_ITEM_VARIANTS}
            className="flex flex-col gap-2"
          >
            <span className="text-[16px] md:text-[20px] text-white font-medium">
              Prefere e-mail?
            </span>
            <p className="text-[14px] md:text-[20px] text-gold-light font-medium">
              contato@danilloleao.com.br
            </p>
          </motion.div>

          <motion.div
            variants={TEXT_ITEM_VARIANTS}
            className="flex flex-col gap-2"
          >
            <span className="text-[16px] md:text-[20px] text-white font-medium">
              Prefere ligar?
            </span>
            <p className="text-[14px] md:text-[20px] text-gold-light font-medium">
              +55 (11) 99999-9999
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}