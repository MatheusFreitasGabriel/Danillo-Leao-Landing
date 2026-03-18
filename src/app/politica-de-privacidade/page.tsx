export default function PoliticaDePrivacidadePage() {
  return (
    <main className="mx-auto max-w-[900px] px-6 lg:px-16 pt-28 pb-20">
      <h1 className="text-3xl md:text-5xl font-bold">Política de Privacidade</h1>
      <p className="mt-6 text-gray text-[16px] md:text-[18px] leading-relaxed">
        Esta página descreve como as informações podem ser coletadas, utilizadas
        e protegidas ao navegar neste site. O conteúdo abaixo pode ser ajustado
        conforme as práticas reais de tratamento de dados do projeto.
      </p>

      <section className="mt-10 flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">1. Coleta de dados</h2>
        <p className="text-gray-dark leading-relaxed">
          Podemos coletar informações fornecidas voluntariamente por você (por
          exemplo, ao entrar em contato) e dados técnicos (como navegador, dispositivo
          e páginas acessadas) para melhorar a experiência.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">2. Uso de dados</h2>
        <p className="text-gray-dark leading-relaxed">
          Os dados podem ser usados para responder solicitações, aprimorar o site,
          e manter a segurança e o funcionamento adequado.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">3. Compartilhamento</h2>
        <p className="text-gray-dark leading-relaxed">
          Não compartilhamos dados pessoais com terceiros, exceto quando necessário
          para operar o site, cumprir obrigações legais ou mediante consentimento.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">4. Contato</h2>
        <p className="text-gray-dark leading-relaxed">
          Em caso de dúvidas, entre em contato pelo e-mail{" "}
          <a className="text-gold-dark hover:underline" href="mailto:contato@danilloleao.com.br">
            contato@danilloleao.com.br
          </a>
          .
        </p>
      </section>
    </main>
  );
}

