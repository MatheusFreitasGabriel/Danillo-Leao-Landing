"use client";

/* Arquivo criado na data 04/03/2026 */
/* Autor: Matheus de Freitas */

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import ICanHelpAcordeons from "./ICanHelpAcordeons";

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

export default function ICanHelp() {
  return (
    <section className="max-w-[1440px] w-full px-6 lg:px-16 flex flex-col gap-6 md:gap-12">
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-row justify-between overflow-hidden items-start md:items-end"
      >
        
        <div className="flex flex-col gap-3">
          <motion.span
            variants={item}
            className="text-[16px] text-gold-dark underline font-medium"
          >
            Qual é o problema?
          </motion.span>

          <motion.h2
            variants={item}
            className="text-start text-3xl font-bold md:text-5xl 2xl:text-6xl"
          >
            Situações que posso te ajudar.
          </motion.h2>
        </div>

        <motion.div variants={item}>
          <Image
            src="/icon-arrow-leftbottom.svg"
            alt=""
            aria-hidden="true"
            width={48}
            height={48}
          />
        </motion.div>

      </motion.div>

      <div>
        <ICanHelpAcordeons></ICanHelpAcordeons>
      </div>
    </section>
  );
}