/** Conteúdo da landing em pt-BR */
const WHATSAPP_NUMBER = '5527997043685'; // +55 27 99704-3685
const WHATSAPP_MESSAGE = 'Olá, Thiago! Vim pelo site e quero começar meu plano.';

export const SITE = {
  coachName: 'Thiago Silva',
  title: 'Thiago Silva | Personal Trainer',
  /** URL pública do site (sem barra no final). Atualize se mudar o domínio. */
  siteUrl: 'https://thiagosilvapersonal.vercel.app',
  description:
    'Personal trainer em emagrecimento e hipertrofia. Indoor cycling, Zumba ZIN e treinos personalizados.',
  tagline: 'Treino estruturado, resultado na sua rotina.',
  logoSrc: '/images/logo.png',
  logoAlt: 'Thiago Silva | Personal Trainer',
  heroImageSrc: '/images/foto1.jpeg',
  heroImageAlt:
    'Thiago Silva, personal trainer sorrindo na academia, com camiseta Thiago Silva Training',
  aboutImageSrc: '/images/foto2.jpeg',
  aboutImageAlt:
    'Thiago Silva na academia, camiseta preta com logo Thiago Silva Training, fazendo joinha',
  whatsappLabel: 'Me chama no WhatsApp',
  /** Texto da seção de prova social. Ajuste números quando tiver dado real. */
  socialProofIntro:
    'Alunos que seguem o método com constância já costumam perceber:',
  socialProofBullets: [
    'Perda de gordura com mais disposição',
    'Ganho de massa com treino bem direcionado',
    'Consistência na semana, mesmo com agenda corrida',
  ],
  /** Número internacional sem símbolos: +55 27 99704-3685 */
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappMessage: WHATSAPP_MESSAGE,
  whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  pricing: {
    label: 'Para começar',
    title: 'Acompanhamento mensal',
    price: 'R$ 99 a R$ 149',
    priceSuffix: '/mês',
    body: 'Plano com treino estruturado e acompanhamento próximo. O valor final depende da frequência e do formato (presencial ou combinado).',
    cta: 'Quero começar meu plano',
  },
} as const;

export const NAV_LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'planos', label: 'Planos' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'contato', label: 'Contato' },
] as const;
