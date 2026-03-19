"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_SMOOTH },
  },
};

const profileTransition = {
  duration: 1,
  delay: 0.5,
  ease: EASE_SMOOTH,
} as const;

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-dvh w-screen overflow-hidden scroll-mt-24"
      aria-label="Apresentação"
    >
      <Image
        src="/images/image-background-hero.webp"
        alt="Hero image"
        fill
        className="object-cover object-left z-0 lg:object-top"
        priority
        unoptimized
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 flex flex-col justify-start pt-[20vh] md:pt-0 md:justify-center h-full w-full md:w-[65%] lg:w-[60%] px-6 lg:px-16 gap-3 lg:gap-6"
      >
        <div className="flex flex-col gap-2 items-center md:items-start lg:gap-6">
          <span
          
            className="text-gold-light text-center md:text-left text-[14px] lg:text-[20px]"
          >
            Danillo Leão advogado de direito médico
          </span>
          
          <h1
            className="text-white text-center md:text-left font-bold text-4xl lg:text-7xl 2xl:text-8xl"
          >
            Excelência Jurídica <br className="hidden md:block" />
            em Direito Médico
          </h1>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-hero text-center md:text-left font-regular text-[16px] lg:text-[20px] max-w-2xl"
          >
            Assessoria e defesa jurídica para médicos, clínicas e pacientes,
            com atuação preventiva e estratégica em questões éticas, civis e administrativas.
          </motion.p>
        </div>

        
      </motion.div>

      <div
        className="absolute z-5 pointer-events-none w-[270px] h-[270px] rounded-full blur-[100px] left-1/2 -translate-x-1/2 bottom-[calc(55vh-335px)] md:left-auto md:translate-x-0 md:right-[200px] md:bottom-[calc(95vh-335px)] bg-gold-light"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={profileTransition}
        className="absolute bottom-0 z-10 pointer-events-none left-1/2 -translate-x-1/2 w-[130%] h-[55%] md:left-auto md:translate-x-0 md:right-10 lg:right-16 md:w-[45%] lg:w-[40%] md:h-[95%]"
      >
        <Image
          src="/images/profile-danillo.webp"
          alt="Foto profissional de Danillo Leão"
          fill
          className="object-contain object-bottom drop-shadow-2xl" 
          priority
          unoptimized
        />
      </motion.div>

    </section>
  );
}