/* Arquivo criado na data 02/03/2026 as 17:26 */
/* Autor: Matheus de Freitas */

import ButtonCta from "./ui/buttonCta";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-screen">

        {/* Background hero image */}
        <Image
        src="/images/hero-section-image-background.webp"
        alt="Hero image"
        fill
        className="object-cover object-left z-0 lg:object-top"
        unoptimized
        priority
        />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col gap-6 h-full justify-center px-6 items-center md:items-start lg:px-16 lg:gap-12">
            
            {/* Textual grouping */}
            <div className="flex flex-col gap-2 items-center md:items-start lg:gap-6">
                
                <span className="text-gold-light text-center md:text-left text-[14px] animate-fade-slide delay-1 lg:text-[20px]">
                  Danillo Leão advogado de direito médico
                </span>
                
                <h1 className="text-white text-center md:text-left font-bold text-4xl opacity-0 animate-fade-slide delay-2 lg:text-7xl 2xl:text-8xl">
                  Excelência Jurídica <br className="hidden md:block" />em Direito Médico
                </h1>
                
                <p className="text-gray-hero text-center md:text-left font-regular text-[16px] opacity-0 animate-fade-slide delay-3 lg:text-[20px] max-w-2xl">
                  Assessoria e defesa jurídica para médicos, clínicas e pacientes, com atuação preventiva e estratégica em questões éticas, civis e administrativas.
                </p>
            </div>

            {/* CTA button */}
            <ButtonCta>Entrar em contato</ButtonCta>
        </div>
    </section>
  );
}