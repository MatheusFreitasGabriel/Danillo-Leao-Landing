type ServiceItem = {
    id: number,
    indicator: string,
    title: string,
    description: string,
    messageWhatsApp: string,
    imageBackground: string,
}

export const servicesItemData: ServiceItem[] = [  
    {
        id: 1,
        indicator: "Planos de Saúde e SUS",
        title: "Demandas por negativas de tratamento (Plano de Saúde/SUS)",
        description: "Atuação especializada contra planos de saúde e SUS em casos de recusa abusiva de coberturas. Oferecemos suporte jurídico ágil para obtenção de liminares, garantindo o acesso a medicamentos de alto custo, cirurgias e tratamentos não convencionais. Defendemos o direito à saúde do paciente e auxiliamos o médico na fundamentação legal da prescrição.",
        messageWhatsApp: "Olá! Vi no site a especialidade em negativas de tratamento. Tive uma demanda negada pelo meu plano de saúde/SUS e preciso de ajuda jurídica urgente. Podemos conversar?",
        imageBackground: "/images/servicesImages/image-3.webp",
    },
    {
        id: 2,
        indicator: "Defesa em processos",
        title: "Defesa Especializada em Erro Médico",
        description: "Defesa estratégica focada em reverter litígios decorrentes de mera insatisfação do paciente. Evite altos custos financeiros e danos à sua imagem com uma representação técnica de excelência.",
        messageWhatsApp: "Olá, tudo bem? Vi no site a especialidade de vocês em Contencioso Médico e processos envolvendo procedimentos estéticos. Gostaria de entender melhor como funciona a defesa técnica do escritório. Podemos marcar um horário?",
        imageBackground: "/images/servicesImages/image-1.webp",
    },
    {
        id: 3,
        indicator: "Preventivo",
        title: "Elaboração de Documentos Médicos e TCLE",
        description: "Elaboração de documentos médicos personalizados, como TCLE e contratos, criando uma base jurídica sólida para proteger sua atuação de questionamentos éticos e judiciais.",
        messageWhatsApp: "Olá, tudo bem? Vi no site a parte de atuação preventiva e adequação de documentos (como o TCLE). Gostaria de agendar um horário para entender como posso ter mais segurança jurídica nos meus atendimentos.",
        imageBackground: "/images/servicesImages/image-2.webp",
    },
    {
        id: 4,
        indicator: "Sindicância e Processo Ético-Profissional ",
        title: "Defesa Disciplinar e Proteção de Carreira",
        description: "Atuação especializada no rito administrativo-disciplinar para proteger o seu registro médico (CRM). Focamos na identificação de vícios processuais para anular procedimentos desde a fase de sindicância.",
        messageWhatsApp: "Olá. Acessei o site e gostaria de agendar uma consulta sigilosa sobre um processo ético-profissional. Preciso entender melhor como funciona a defesa estratégica no rito administrativo disciplinar.",
        imageBackground: "/images/servicesImages/image-4.webp",
    },
    
]