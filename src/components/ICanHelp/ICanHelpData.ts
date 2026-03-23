type HelpItem = {
  id: number;
  audience: readonly string[];
  problem: string;
  solution: string;
  image: string;
  whatsAppMessage: string;
};


export const helpItems: readonly HelpItem[] = [
  {
    id: 1,
    audience: ["MÉDICOS"],
    problem: "Meu contrato médico está desatualizado, posso ter problemas legais?",
    solution: "A ausência de documentos jurídicos atualizados e personalizados, como contratos de prestação de serviços, atestados e prontuários, pode expor médicos e clínicas a riscos legais. É fundamental ter um preventivo jurídico robusto para resguardar o profissional de questionamentos e processos.",
    image: "/images/situationsImages/i-1.webp",
    whatsAppMessage: "Olá Danillo! Preciso de ajuda para revisar e atualizar meus documentos médicos e contratos. Poderia me auxiliar com a segurança jurídica da minha prática?",
  },
  {
    id: 2,
    audience: ["MÉDICOS"],
    problem: "Fui processado por erro médico, o que devo fazer?",
    solution: "Processos por alegação de erro médico são complexos e exigem defesa especializada. É crucial ser representado por um profissional que domine o Direito Médico, o Processo Civil e o Direito do Consumidor para proteger sua reputação e evitar altos custos financeiros.",
    image: "/images/situationsImages/i-2.webp",
    whatsAppMessage: "Olá Danillo! Fui processado por suposto erro médico e preciso de orientação urgente. Poderia me ajudar com a minha defesa?",
  },
  {
    id: 3,
    audience: ["MÉDICOS"],
    problem: "Recebi uma notificação do CRM, meu registro está em risco?",
    solution: "Sindicâncias e processos ético-profissionais no Conselho Regional de Medicina (CRM) podem ser mais críticos do que ações judiciais, pois colocam em risco o registro profissional. Uma defesa estratégica, que identifique vícios processuais e respeite os ritos administrativos, é essencial para proteger sua carreira.",
    image: "/images/situationsImages/i-3.webp",
    whatsAppMessage: "Olá Danillo! Recebi uma notificação do CRM e estou preocupado com meu registro profissional. Poderia me orientar sobre como proceder?",
  },
  {
    id: 4,
    audience: ["MÉDICOS"],
    problem: "Acusação de erro médico em procedimento estético, como me defender?",
    solution: "Procedimentos estéticos possuem particularidades jurídicas, como a possibilidade de responsabilidade objetiva e inversão do ônus da prova. Médicos e clínicas que atuam nessa área necessitam de defesa específica para lidar com esse tipo de reclamação, de modo a garantir uma argumentação jurídica alinhada às nuances do Direito do Consumidor.",
    image: "/images/situationsImages/i-4.webp",
    whatsAppMessage: "Olá Danillo! Fui acusado de erro em um procedimento estético e preciso de defesa especializada. Poderia me ajudar com este caso?",
  },
  {
    id: 5,
    audience: ["PACIENTES"],
    problem: "Plano de saúde negou meu tratamento/cirurgia, como recorrer?",
    solution: "É frequente que planos de saúde ou o SUS neguem cobertura para medicamentos de alto custo, exames ou tratamentos essenciais. Ofereço suporte jurídico especializado para garantir o cumprimento da indicação clínica, no sentido de auxiliar o paciente no reconhecimento de seus direitos e o médico na fundamentação do pedido.",
    image: "/images/situationsImages/i-5.webp",
    whatsAppMessage: "Olá Danillo! Meu plano de saúde negou um tratamento/cirurgia e preciso de ajuda para recorrer. Poderia me auxiliar a garantir meu direito?",
  },
  {
    id: 6,
    audience: ["PACIENTES", "MÉDICOS"],
    problem: "Preciso de um Termo de Consentimento (TCLE) personalizado para minha clínica/consultório.",
    solution: "Um TCLE bem elaborado, e individualizado, configura uma das melhores formas de agir preventivamente, de modo a evitar o litígio. Nesse caso, elaboro o documento em questão nos termos da legislação competente e de acordo com as suas necessidades, assim, sua única preocupação será o exercício da medicina.",
    image: "/images/situationsImages/i-6.webp",
    whatsAppMessage: "Olá, Danillo! Preciso de auxílio jurídico para criar Termos de Consentimento (TCLE) individualizados e seguros para todas as partes envolvidas. Você poderia me explicar como funciona sua assessoria preventiva?",
  },
];
