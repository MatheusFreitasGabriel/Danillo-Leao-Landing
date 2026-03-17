import { servicesItemData } from "./ServicesData"
import Image from "next/image"
import { redirectToWhatsApp } from "@/src/utils/redirectToWhatsApp"

export default function ServicesCards(){
    return (
        // Agrupamento de cards
        <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6">
            {/* Cards */}
            {servicesItemData.map((item) => {
                return (
                    <article className="relative w-full bg-[#000000] text-white rounded-4xl px-6 py-12 md:px-9 md:py-24" key={item.id}>
                        <div className="relative z-10 flex flex-col items-start gap-12">
                            <div className="flex flex-col gap-6">
                                <span className="text-[14px] text-gold-light font-normal md:text-[16px]">{item.indicator}</span>
                                <h3 className="text-2xl font-bold md:text-4xl">{item.title}</h3>
                                <p className="text-[14px] text-[#bdb9b6] md:text-[16px]">{item.description}</p>
                            </div>
                            <button 
                                onClick={() => redirectToWhatsApp(item.messageWhatsApp)} 
                                className="cursor-pointer px-4 py-3 bg-gold-dark text-[16px] font-medium text-white transition-colors duration-300 hover:bg-black "
                                >
                                    Falar com Danillo
                            </button>
                        </div>
                        <Image
                            src={item.imageBackground}
                            alt="imagem de fundo"
                            fill
                            className="object-cover opacity-30 z-0 rounded-4xl"
                        />

                    </article>
                )
            })}
            
        </div>
    )
}