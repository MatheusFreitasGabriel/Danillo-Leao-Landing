/* Arquivo criado na data 03/03/2026 as 17:26 */
/* Autor: Matheus de Freitas */

"use client";

import { motion } from "framer-motion";
import { FaBalanceScaleLeft, FaBalanceScaleRight } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function MetricsSection() {
  return (
    <section className="relative w-full flex flex-col justify-center items-center px-4 gap-6 md:gap-12 overflow-hidden">
      
      {/* Text Grouping */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center gap-3"
      >
        <motion.h2
          variants={itemUp}
          className="text-center text-3xl font-bold md:text-5xl 2xl:text-6xl"
        >
          Atuação Consolidada
        </motion.h2>

        <motion.p
          variants={itemUp}
          className="text-center font-normal text-gray text-[16px] md:text-[20px] md:w-[60%] 2xl:text-[20px]"
        >
          Indicadores que refletem uma trajetória construída com rigor técnico,
          ética profissional e atuação especializada na defesa de médicos,
          clínicas e pacientes.
        </motion.p>
      </motion.div>

      {/* Metrics */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-9 md:grid-cols-2 px-6 max-w-[1440px] mx-auto md:gap-16"
      >
        <motion.article
          variants={itemUp}
          className="flex flex-col gap-4 max-w-md md:gap-6"
        >
          <span className="text-[14px] text-gray">Anos de atuação</span>
          <h3 className="text-5xl font-bold text-gold-dark">12 Anos</h3>
          <p className="text-[16px] font-medium text-gray-dark">
            Mais de uma década de experiência jurídica marcada por atuação
            consistente, rigor técnico e dedicação à excelência profissional.
          </p>
        </motion.article>

        <motion.article
          variants={itemUp}
          className="flex flex-col gap-4 max-w-md md:gap-6"
        >
          <span className="text-[14px] text-gray">Casos acompanhados</span>
          <h3 className="text-5xl font-bold text-gold-dark">+400</h3>
          <p className="text-[16px] font-medium text-gray-dark">
            Vivência consolidada no acompanhamento de casos, com abordagem
            técnica, análise cuidadosa e atuação jurídica estratégica.
          </p>
        </motion.article>
      </motion.div>

      {/* Background Icons */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <FaBalanceScaleLeft className="absolute top-[-100px] left-1/2 -translate-x-1/2 md:top-1/2 md:left-[-120px] md:translate-x-0 md:-translate-y-1/2 text-gold-dark opacity-5 md:opacity-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px]" />
        <FaBalanceScaleRight className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 md:bottom-auto md:top-1/2 md:right-[-120px] md:left-auto md:translate-x-0 md:-translate-y-1/2 text-gold-dark opacity-5 md:opacity-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px]" />
      </div>
    </section>
  );
}