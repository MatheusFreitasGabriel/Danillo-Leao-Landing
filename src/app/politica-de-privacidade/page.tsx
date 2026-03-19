import Link from 'next/link';

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="mx-auto max-w-[900px] w-full px-6 lg:px-16 pt-28 pb-20">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Política de Privacidade</h1>
      <p className="mt-6 text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
        A sua privacidade é importante para nós. Esta Política de Privacidade explica como lidamos 
        com as suas informações ao acessar este site. Nosso compromisso é garantir a transparência 
        e a segurança de acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
      </p>

      <section className="mt-12 flex flex-col gap-8">
        
        {/* Seção 1 */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">1. Coleta Direta de Dados Pessoais</h2>
          <p className="text-gray-600 leading-relaxed">
            Este site <strong>não coleta</strong>, não solicita e não armazena dados pessoais diretamente 
            através de formulários, cadastros ou banco de dados próprio. Não exigimos que você crie contas 
            ou forneça informações como nome, e-mail ou telefone para navegar em nossas páginas.
          </p>
        </div>

        {/* Seção 2 */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">2. Redirecionamento para o WhatsApp</h2>
          <p className="text-gray-600 leading-relaxed">
            Nosso principal canal de atendimento é o WhatsApp. Ao clicar nos botões de contato disponíveis 
            neste site, você será redirecionado para o aplicativo WhatsApp para falar diretamente com o 
            advogado Danillo Leão ou sua equipe.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A partir do momento em que o redirecionamento ocorre, a coleta e o tratamento das suas mensagens, 
            número de telefone e dados do perfil passam a ser regidos pela <strong>Política de Privacidade do próprio WhatsApp (Meta)</strong>. 
            Todas as informações compartilhadas durante o atendimento jurídico no WhatsApp são tratadas com 
            absoluto sigilo profissional, conforme as diretrizes da Ordem dos Advogados do Brasil (OAB).
          </p>
        </div>

        {/* Seção 3 */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">3. Dados de Navegação e Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Embora não coletemos dados diretamente via formulários, nosso site utiliza ferramentas de terceiros 
            (como Google Analytics e Google Ads) para entender como os visitantes interagem com a página e para 
            oferecer anúncios relevantes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Essas ferramentas coletam dados de forma indireta e automatizada (como endereço IP, tipo de navegador 
            e páginas visitadas) através de cookies. Você pode gerenciar suas preferências sobre essas coletas a 
            qualquer momento. Para mais detalhes, acesse nossa{' '}
            <Link href="/politica-de-cookies" className="text-gold-dark hover:underline font-medium">
              Política de Cookies
            </Link>.
          </p>
        </div>

        {/* Seção 4 */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">4. Compartilhamento de Informações</h2>
          <p className="text-gray-600 leading-relaxed">
            Nós não vendemos, alugamos ou compartilhamos qualquer tipo de informação pessoal com terceiros. 
            Os únicos dados compartilhados são os dados de navegação anonimizados capturados pelos serviços 
            do Google mencionados acima, com a finalidade exclusiva de análise de métricas e publicidade.
          </p>
        </div>

        {/* Seção 5 */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">5. Seus Direitos (LGPD)</h2>
          <p className="text-gray-600 leading-relaxed">
            Como titular dos dados, você tem o direito de solicitar o acesso, a correção ou a exclusão de 
            suas informações pessoais. Como este site não retém seus dados, qualquer solicitação referente aos 
            dados fornecidos durante o seu atendimento jurídico via WhatsApp deverá ser feita diretamente 
            através dos nossos canais de contato.
          </p>
        </div>

        {/* Seção 6 */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">6. Contato</h2>
          <p className="text-gray-600 leading-relaxed">
            Se você tiver qualquer dúvida sobre esta Política de Privacidade ou sobre como tratamos as 
            informações durante o atendimento, entre em contato através do e-mail:{' '}
            <a className="text-gold-dark hover:underline font-medium" href="mailto:contato@danilloleao.com.br">
              contato@danilloleao.com.br
            </a>
          </p>
        </div>

      </section>
    </main>
  );
}