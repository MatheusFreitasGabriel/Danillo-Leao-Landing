"use client";

/* Arquivo criado na data 02/03/2026 as 17:26 */
/* Autor: Matheus de Freitas */

import ButtonCta from "./ui/buttonCta";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // easing sofisticado
    },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen w-screen">

      {/* Background hero image */}
      <Image
        src="/images/hero-section-image-background.webp"
        alt="Hero image"
        fill
        className="object-cover object-left z-0 lg:object-top"
        priority
      />

      {/* Hero content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col gap-6 h-full justify-center px-6 items-center md:items-start lg:px-16 lg:gap-12"
      >
        
        {/* Textual grouping */}
        <div className="flex flex-col gap-2 items-center md:items-start lg:gap-6">
          
          <motion.span
            variants={item}
            className="text-gold-light text-center md:text-left text-[14px] lg:text-[20px]"
          >
            Danillo Leão advogado de direito médico
          </motion.span>
          
          <motion.h1
            variants={item}
            className="text-white text-center md:text-left font-bold text-4xl lg:text-7xl 2xl:text-8xl"
          >
            Excelência Jurídica <br className="hidden md:block" />
            em Direito Médico
          </motion.h1>
          
          <motion.p
            variants={item}
            className="text-gray-hero text-center md:text-left font-regular text-[16px] lg:text-[20px] max-w-2xl"
          >
            Assessoria e defesa jurídica para médicos, clínicas e pacientes,
            com atuação preventiva e estratégica em questões éticas, civis e administrativas.
          </motion.p>
        </div>

        <motion.div variants={item}>
          <ButtonCta>Entrar em contato</ButtonCta>
        </motion.div>

      </motion.div>
    </section>
  );
}