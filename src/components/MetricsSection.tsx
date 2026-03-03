import { FaBalanceScaleLeft, FaBalanceScaleRight } from 'react-icons/fa'

export default function MetricsSection(){
    return (
        // Metrics grouping
        <section className="relative w-full flex flex-col justify-center items-center px-4 gap-6 md:gap-12 overflow-hidden">
            {/* Text Grouping */}
            <div className="flex flex-col items-center gap-3">
                <h2 className="text-center text-3xl font-bold md:text-5xl 2xl:text-6xl">Atuação Consolidada</h2>
                <p className="text-center font-normal text-gray text-[16px] md:text-[20px] md:w-[60%] 2xl:text-[20px]"> Indicadores que refletem uma trajetória construída com rigor técnico, ética profissional e atuação especializada na defesa de médicos, clínicas e pacientes.</p>
            </div>

            {/* Metrics */}
            <div className="grid gap-9 md:grid-cols-2 px-6 max-w-[1440px] mx-auto md:gap-16">
                {/* Metric */}
                <article className="flex flex-col gap-4 max-w-md md:gap-6">
                    <span className="text-[14px] text-gray">Anos de atuação</span>
                    <h3 className="text-5xl font-bold">12 Anos</h3>
                    <p className="text-[16px] font-medium text-gray-dark ">Mais de uma década de experiência jurídica marcada por atuação consistente, rigor técnico e dedicação à excelência profissional.</p>
                </article>

                <article className="flex flex-col gap-4 max-w-md md:gap-6">
                    <span className="text-[14px] text-gray">Casos acompanhados</span>
                    <h3 className="text-5xl font-bold">+400</h3>
                    <p className="text-[16px] font-medium text-gray-dark">Vivência consolidada no acompanhamento de casos, com abordagem técnica, análise cuidadosa e atuação jurídica estratégica.</p>
                </article>
            </div>

            {/* Background Icons */}
            <div className="pointer-events-none absolute inset-0 -z-10">

                {/* Left Icon */}
                <FaBalanceScaleLeft
                className="
                    absolute
                    
                    /* Mobile */
                    top-[-100px] left-1/2 -translate-x-1/2
                    
                    /* Desktop */
                    md:top-1/2 md:left-[-120px] md:translate-x-0 md:-translate-y-1/2
                    
                    text-gold-dark
                    opacity-5 md:opacity-10
                    
                    w-[300px] h-[300px]
                    md:w-[500px] md:h-[500px]
                "
                />

                {/* Right Icon */}
                <FaBalanceScaleRight
                className="
                    absolute
                    
                    /* Mobile */
                    bottom-[-100px] left-1/2 -translate-x-1/2
                    
                    /* Desktop */
                    md:bottom-auto md:top-1/2 md:right-[-120px] md:left-auto md:translate-x-0 md:-translate-y-1/2
                    
                    text-gold-dark
                    opacity-5 md:opacity-10
                    
                    w-[300px] h-[300px]
                    md:w-[500px] md:h-[500px]
                "
                />

            </div>
        </section>
    )
}