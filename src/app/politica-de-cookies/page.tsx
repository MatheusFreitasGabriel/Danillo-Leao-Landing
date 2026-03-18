export default function PoliticaDeCookiesPage() {
  return (
    <main className="mx-auto max-w-[900px] px-6 lg:px-16 pt-28 pb-20">
      <h1 className="text-3xl md:text-5xl font-bold">Política de Cookies</h1>
      <p className="mt-6 text-gray text-[16px] md:text-[18px] leading-relaxed">
        Esta página explica o que são cookies e como podem ser utilizados neste
        site. Ajuste os itens abaixo de acordo com os cookies/serviços realmente
        usados no projeto.
      </p>

      <section className="mt-10 flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">1. O que são cookies?</h2>
        <p className="text-gray-dark leading-relaxed">
          Cookies são pequenos arquivos armazenados no seu dispositivo para
          lembrar preferências, melhorar a navegação e ajudar na medição de uso.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">2. Tipos de cookies</h2>
        <p className="text-gray-dark leading-relaxed">
          Podemos utilizar cookies estritamente necessários (funcionamento do site),
          cookies de desempenho (métricas) e cookies de funcionalidade (preferências).
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">
          3. Como gerenciar cookies
        </h2>
        <p className="text-gray-dark leading-relaxed">
          Você pode gerenciar ou bloquear cookies nas configurações do seu navegador.
          Isso pode afetar a experiência e algumas funcionalidades do site.
        </p>
      </section>
    </main>
  );
}

