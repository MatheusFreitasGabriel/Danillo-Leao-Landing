"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { redirectToWhatsApp } from "@/src/utils/redirectToWhatsApp";

type NavItem = { id: string; label: string };

export default function Header() {
  const navItems = useMemo<NavItem[]>(
    () => [
      { id: "/#inicio", label: "Início" },
      { id: "/#atuacao", label: "Atuação" },
      { id: "/#ajuda", label: "Ajuda" },
      { id: "/#servicos", label: "Serviços" },
      { id: "/#contato", label: "Contato" },
    ],
    [],
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const linkClassName = isScrolled
    ? "text-black/90 hover:text-gold-dark"
    : "text-white/80 hover:text-white";

  const headerClassName = isScrolled
    ? "bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
    : "bg-transparent";

  const buttonClassName = isScrolled
    ? "bg-black text-white hover:bg-gold-dark"
    : "bg-gold-dark text-white hover:bg-black";

  const onNavClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerClassName}`}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16 h-[76px] flex items-center justify-between">
          <a
            href="#inicio"
            aria-label="Ir para o início"
            className="hidden md:flex items-center"
          >
            <Image
              src="/images/logo.png"
              alt="Logo Danillo Leão"
              width={160}
              height={46}
              priority
            />
          </a>

          <a
            href="#inicio"
            aria-label="Ir para o início"
            className="md:hidden absolute left-1/2 -translate-x-1/2 flex items-center"
          >
            <Image
              src="/images/logo.png"
              alt="Logo Danillo Leão"
              width={140}
              height={40}
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`${item.id}`}
                className={`text-[16px] font-medium transition-colors duration-200 ${linkClassName}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={() =>
                redirectToWhatsApp(
                  "Olá, Danillo! Vim pelo seu site e gostaria de falar com você.",
                )
              }
              className={`px-5 py-2.5 rounded-none text-[16px] font-medium transition-colors duration-300 ${buttonClassName}`}
            >
              Falar com Danillo
            </button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`md:hidden relative z-50 inline-flex h-10 w-10 items-center justify-center transition-colors ${
              isScrolled || mobileOpen ? "text-black" : "text-white"
            }`}
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
              className="absolute inset-0 bg-white"
            />

            <div className="relative h-full w-full flex flex-col justify-center items-center px-8">
              <div className="flex flex-col items-center gap-7">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={onNavClick}
                    className="text-black text-[22px] font-semibold tracking-tight"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-10 w-full max-w-sm">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    redirectToWhatsApp(
                      "Olá, Danillo! Vim pelo seu site e gostaria de falar com você.",
                    );
                  }}
                  className="w-full bg-black text-white px-6 py-4 text-[16px] font-medium hover:bg-gold-dark transition-colors duration-300"
                >
                  Falar com Danillo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

