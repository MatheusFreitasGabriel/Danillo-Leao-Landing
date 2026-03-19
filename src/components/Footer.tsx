import Image from "next/image";

const NAV_ITEMS = [
  { href: "/#inicio", label: "Início" },
  { href: "/#atuacao", label: "Atuação" },
  { href: "/#ajuda", label: "Ajuda" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#contato", label: "Contato" },
] as const;

const EMAIL = "contato@danilloleao.com.br";
const WHATSAPP_E164 = "5511915479003";
const WHATSAPP_DISPLAY = "+55 (11) 91547-9003";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16 py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <a href="#inicio" aria-label="Ir para o início" className="w-fit">
              <Image
                src="/images/logo.png"
                alt="Logo Danillo Leão"
                width={170}
                height={50}
              />
            </a>
            <p className="text-white/70 text-[14px] leading-relaxed max-w-sm">
              Atendimento jurídico especializado em Direito Médico, com atuação
              estratégica e foco em excelência técnica.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[16px] font-semibold tracking-wide text-white">
              Navegação
            </span>
            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[16px] text-white/70 hover:text-gold-light transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[16px] font-semibold tracking-wide text-white">
              Contato
            </span>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="text-[16px] text-white/70 hover:text-gold-light transition-colors"
              >
                {EMAIL}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_E164}`}
                target="_blank"
                rel="noreferrer"
                className="text-[16px] text-white/70 hover:text-gold-light transition-colors"
              >
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
              <a
                href={`tel:+${WHATSAPP_E164}`}
                className="text-[16px] text-white/70 hover:text-gold-light transition-colors"
              >
                Telefone: {WHATSAPP_DISPLAY}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
                  "Olá, Danillo! Vim pelo seu site e gostaria de falar com você.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-gold-dark text-white px-5 py-3 text-[14px] font-medium hover:bg-white hover:text-black transition-colors duration-300"
              >
                Falar com Danillo
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[16px] font-semibold tracking-wide text-white">
              Políticas
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="/politica-de-privacidade"
                className="text-[16px] text-white/70 hover:text-gold-light transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="/politica-de-cookies"
                className="text-[16px] text-white/70 hover:text-gold-light transition-colors"
              >
                Política de Cookies
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span className="text-[14px] text-white/60">
            © {year} Danillo Leão. Todos os direitos reservados.
          </span>
          <span className="text-[14px] text-white/60">
            Desenvolvido por <a href="https://www.tecfy.dev" className="hover:text-white transition-colors" >Tecfy Tecnologia e Software LTDA.</a>
          </span>
        </div>
      </div>
    </footer>
  );
}