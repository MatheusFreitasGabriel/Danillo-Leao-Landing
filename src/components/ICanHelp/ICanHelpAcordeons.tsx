"use client";

import { useState } from "react";
import { helpItems } from "./ICanHelpData";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: "easeOut" } 
    }
};

export default function ICanHelpAcordeons() {
    const [openId, setOpenId] = useState<number | null>(helpItems[0]?.id || null);

    function toggleItem(id: number) {
        setOpenId(openId === id ? null : id);
    }

    function redirectToWhatsApp(message: string) {
        const telefoneDanillo = "5511940774506"; // Coloque o número real aqui (Ex: 55 + DDD + Numero)
        const url = `https://wa.me/${telefoneDanillo}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank"); // Abre em uma nova aba
    }

    return (
        <div className="flex flex-col gap-6 w-full overflow-hidden">
            {helpItems.map((item) => {
                const isOpen = openId === item.id;

                return (
                    <motion.div
                        key={item.id}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }} // once: true faz animar só na primeira vez. amount: 0.2 faz animar quando 20% do item aparecer
                        onClick={() => toggleItem(item.id)}
                        className="flex flex-row w-full items-stretch cursor-pointer"
                    >
                        {/* Image */}
                        <div className="relative hidden md:block md:w-64 shrink-0 md:mr-6 bg-gold-dark">
                            {/* <Image
                                src={item.image}
                                fill
                                className="object-cover"
                                alt={item.problem}
                            /> */}
                        </div>

                        {/* Agrupamento de conteudo */}
                        <div className="flex flex-col justify-between w-full gap-6 md:flex-row py-6 pb-12 border-b border-[#808080]">
                            
                            {/* Agrupamento indicativo */}
                            <div className="flex flex-col">
                                <p className="text-2xl font-bold text-black">{item.id.toString().padStart(2, "0")}.</p>

                                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                                    <div className="overflow-hidden flex flex-col gap-1">
                                        {item.audience.map((client) => (
                                            <div key={client}>
                                                <p className="text-[16px] font-medium text-gold-dark md:text-[20px]">{client}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Agrupamento do Conteudo */}
                            <div className="w-full md:w-[80%]">
                                
                                {/* Agrupamento do Conteudo Textual */}
                                <div className="flex-1 text-start">
                                    
                                    {/* Header com título e SETA */}
                                    <div className="flex flex-row justify-between items-center w-full">
                                        <h4 className="font-bold text-[20px] text-black md:text-2xl pr-4">{item.problem}</h4>
                                        
                                        {/* Ícone de Seta (Gira quando aberto) */}
                                        <div className={`transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* WRAPPER DA ANIMAÇÃO */}
                                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                                        <div className="overflow-hidden flex flex-col items-start gap-4">
                                            <p className="text-[16px] text-gray-dark">{item.solution}</p>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    redirectToWhatsApp(item.whatsAppMessage);
                                                }} 
                                                className="bg-black text-white px-4 py-2 font-medium text-[16px] cursor-pointer hover:bg-gray-800 transition-colors duration-300"
                                            >
                                                Falar com Danillo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}