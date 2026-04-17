/** Conteúdo da landing em pt-BR — ajuste links e telefone quando publicar. */
export const SITE = {
  coachName: 'Thiago Silva',
  title: 'Thiago Silva — Personal Trainer',
  tagline: 'Treino estruturado — resultado na sua rotina.',
  heroImageSrc: '/images/foto1.jpeg',
  heroImageAlt:
    'Thiago Silva, personal trainer sorrindo na academia, com camiseta Thiago Silva Training',
  aboutImageSrc: '/images/foto2.jpeg',
  aboutImageAlt:
    'Thiago Silva na academia, camiseta preta com logo Thiago Silva Training, fazendo joinha',
  whatsappLabel: 'Me chama no WhatsApp',
  /** Texto da seção de prova social — ajuste números quando tiver dado real. */
  socialProofIntro:
    'Alunos que seguem o método com constância já costumam perceber:',
  socialProofBullets: [
    'Perda de gordura com mais disposição',
    'Ganho de massa com treino bem direcionado',
    'Consistência na semana, mesmo com agenda corrida',
  ],
  /** Substitua pelo seu número internacional sem símbolos, ex.: 5511999998888 */
  whatsappHref: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Thiago%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20treinos.',
  email: 'contato@thiagosilvapersonal.com.br',
} as const;

export const NAV_LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'contato', label: 'Contato' },
] as const;
