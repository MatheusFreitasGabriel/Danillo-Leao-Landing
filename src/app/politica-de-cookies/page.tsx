export default function PoliticaDeCookiesPage() {
  return (
    <main className="mx-auto max-w-[900px] w-full px-6 lg:px-16 pt-28 pb-20">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Política de Cookies</h1>
      <p className="mt-6 text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
        Nós valorizamos a sua privacidade. Esta Política de Cookies explica o que são cookies, 
        como os utilizamos em nosso site e como você pode gerenciá-los. Ao continuar navegando, 
        você concorda com o uso de cookies conforme descrito abaixo.
      </p>

      <section className="mt-12 flex flex-col gap-8">
        
        {/* Seção 1 */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">1. O que são cookies?</h2>
          <p className="text-gray-600 leading-relaxed">
            Cookies são pequenos arquivos de texto que um site, quando visitado, coloca no 
            computador do usuário ou no seu dispositivo móvel, através do navegador de internet (browser). 
            A colocação de cookies ajudará o site a reconhecer o seu dispositivo na próxima visita, 
            lembrando suas preferências e melhorando sua experiência de navegação.
          </p>
        </div>

        {/* Seção 2 */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">2. Que tipos de cookies utilizamos?</h2>
          <p className="text-gray-600 leading-relaxed">
            Em nosso site, utilizamos as seguintes categorias de cookies:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
            <li><strong>Cookies Estritamente Necessários:</strong> Essenciais para o funcionamento do site. Sem eles, certas funcionalidades não operariam corretamente.</li>
            <li><strong>Cookies de Desempenho e Análise:</strong> Ajudam-nos a entender como os visitantes interagem com o site, coletando dados de forma anônima.</li>
            <li><strong>Cookies de Marketing e Publicidade:</strong> Utilizados para rastrear visitantes em diferentes sites, com o objetivo de exibir anúncios que sejam relevantes e atraentes para o usuário individual.</li>
          </ul>
        </div>

        {/* Seção 3: Google Analytics */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">3. Uso do Google Analytics</h2>
          <p className="text-gray-600 leading-relaxed">
            Utilizamos o <strong>Google Analytics</strong>, um serviço de análise web fornecido pela Google LLC. 
            O Google Analytics utiliza cookies para nos ajudar a analisar como os usuários utilizam o site. 
            As informações geradas pelo cookie sobre a sua utilização do site (incluindo o seu endereço IP, 
            tipo de navegador, páginas visitadas e tempo de permanência) serão transmitidas e armazenadas 
            pelo Google em servidores nos Estados Unidos.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Utilizamos esses dados unicamente para compilar relatórios sobre a atividade do site e melhorar 
            nossos serviços. O Google não associará o seu endereço IP com quaisquer outros dados mantidos pelo Google.
          </p>
        </div>

        {/* Seção 4: Google Ads */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">4. Uso do Google Ads e Publicidade Personalizada</h2>
          <p className="text-gray-600 leading-relaxed">
            Nosso site utiliza o <strong>Google Ads</strong> para promover nossos produtos e serviços na internet. 
            Nós utilizamos o recurso de anúncios personalizados (remarketing), o que significa que o Google 
            e fornecedores terceiros colocarão cookies no seu navegador para veicular anúncios baseados em 
            suas visitas anteriores ao nosso site.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Isso nos permite exibir publicidade altamente relevante para você enquanto navega na rede de 
            pesquisa do Google ou em sites parceiros. Os dados coletados não incluem informações que o 
            identifiquem pessoalmente, a menos que você tenha fornecido consentimento explícito.
          </p>
        </div>

        {/* Seção 5: Gerenciamento (AdoPT) */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">5. Gerenciamento de Cookies (AdoPT)</h2>
          <p className="text-gray-600 leading-relaxed">
            Para garantir total transparência e dar a você o controle sobre seus dados, utilizamos a plataforma <strong>AdoPT</strong> para o gerenciamento do consentimento de cookies.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Você pode revisar, alterar ou revogar o seu consentimento a qualquer momento. Para isso, basta clicar no <strong>ícone flutuante de privacidade</strong> (geralmente localizado no canto inferior da tela) para reabrir o painel do AdoPT e ajustar suas preferências de acordo com as categorias que desejar permitir ou bloquear.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Adicionalmente, você pode gerenciar suas preferências diretamente com o Google através dos links abaixo:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
            <li>
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Add-on do navegador para desativação do Google Analytics
              </a>.
            </li>
            <li>
              <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Configurações de Anúncios do Google
              </a>.
            </li>
          </ul>
        </div>

        {/* Seção 6: Contato */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">6. Alterações nesta Política</h2>
          <p className="text-gray-600 leading-relaxed">
            Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou por razões legais e regulatórias. Recomendamos que você revise esta página regularmente.
          </p>
        </div>

      </section>
    </main>
  );
}