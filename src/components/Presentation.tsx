"use client";

import { memo } from "react";
import { FaBalanceScale, FaUsers, FaLandmark } from "react-icons/fa";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const VIEWPORT = { once: true, amount: 0.4 } as const;

function Presentation() {
  const indicators = [
    { text: "Especialista em Responsabilidade Civil", icon: FaBalanceScale },
    { text: "Relações de Consumo (EPD)", icon: FaUsers },
    { text: "Direito Administrativo (PUC-SP)", icon: FaLandmark },
  ];

  return (
    <motion.section 
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className="w-full flex flex-col md:grid md:grid-cols-2 max-w-[1440px] px-6 lg:px-16 gap-6 md:gap-0"
    >
      
      {/* Bloco 1: Título Mobile */}
      <div className="flex flex-col gap-4 md:hidden pt-8">
        <motion.span variants={ITEM_VARIANTS} className="text-[16px] text-gold-dark font-medium underline">
          Quem sou eu?
        </motion.span>
        <motion.h2 variants={ITEM_VARIANTS} className="text-start text-3xl font-bold">
          Meu nome é Danillo Leão
        </motion.h2>
      </div>

      {/* Bloco 2: Coluna da Foto */}
      <motion.div variants={ITEM_VARIANTS} className="relative overflow-hidden flex justify-start items-center rounded-2xl px-6 py-12 bg-black min-h-[400px] md:min-h-[750px]">
        <Image 
          src="/images/profile-danillo-presentation.webp" 
          alt="Foto de Danillo Leão" 
          fill 
          unoptimized
          className="object-cover object-top" 
        />
      </motion.div>

      {/* Bloco 3: Coluna do Texto */}
      <div className="flex justify-start items-center md:rounded-r-2xl md:px-6 md:py-12">
        <div className="flex flex-col gap-6 mt-6 md:mt-0">
          
          {/* Título Desktop */}
          <div className="hidden md:flex md:flex-col gap-6">
            <motion.span variants={ITEM_VARIANTS} className="text-[16px] text-gold-dark font-medium underline">
              Quem sou eu?
            </motion.span>
            <motion.h2 variants={ITEM_VARIANTS} className="text-start md:text-4xl 2xl:text-5xl font-bold">
              Meu nome é Danillo Leão
            </motion.h2>
          </div>

          {/* Parágrafo */}
          <motion.p variants={ITEM_VARIANTS} className="text-[16px] text-gray-dark">
            Conto com mais de doze anos de experiência no contencioso cível, trajetória que me conferiu grande destreza na condução de processos judiciais e domínio prático do rito processual. 
            Além disso, sou especialista em Responsabilidade Civil e Relações de Consumo (EPD) e em Direito Administrativo (PUC-SP). Por essa razão, estou amplamente capacitado para representá-lo(a) tanto na esfera judicial quanto em processos ético-profissionais e sindicâncias.
          </motion.p>

          {/* Indicadores de Formação */}
          <div className="flex flex-wrap gap-3 pb-8 md:pb-0">
            {indicators.map((item, index) => (
              <motion.div 
                variants={ITEM_VARIANTS}
                key={index} 
                className="flex items-center gap-3 border border-gold-light rounded-full pr-4 pl-1 py-1 w-fit"
              >
                {/* Círculo de 32x32px (w-8 h-8) com fundo dark e ícone light */}
                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full bg-gold-dark flex justify-center items-center shrink-0">
                  <item.icon className="text-gold-light text-[20px] md:text-[24px]" />
                </div>
                
                {/* Texto do indicador */}
                <span className="text-[14px] md:text-[16px] text-black">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default memo(Presentation);