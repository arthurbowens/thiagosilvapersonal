import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  imports: [],
  template: `
    <section
      id="servicos"
      class="scroll-mt-24 border-b border-white/5 bg-slate-950 py-16 sm:py-24"
      aria-labelledby="services-heading"
    >
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <h2
            id="services-heading"
            class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Serviços
          </h2>
          <p class="mt-4 text-lg text-slate-400">
            Cada serviço traduz técnica em benefício: menos tempo perdido na academia, mais
            evolução com segurança — do primeiro mês ao plano de longo prazo.
          </p>
        </div>
        <ul
          class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          @for (card of cards; track card.title) {
            <li
              class="flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg transition hover:border-emerald-500/30 hover:bg-slate-900"
            >
              <span class="text-2xl" aria-hidden="true">{{ card.icon }}</span>
              <h3 class="mt-4 font-display text-xl font-semibold text-white">
                {{ card.title }}
              </h3>
              <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {{ card.body }}
              </p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class ServicesSectionComponent {
  protected readonly cards = [
    {
      icon: '🎯',
      title: 'Personal training',
      body: 'Treinos feitos pra você evoluir mais rápido, evitar lesões e não perder tempo na academia — com técnica corrigida na hora e plano alinhado ao seu objetivo.',
    },
    {
      icon: '🔥',
      title: 'Emagrecimento saudável',
      body: 'Menos achismo, mais estratégia: gasto calórico + força + hábitos sustentáveis para perder gordura sem “secar” à força.',
    },
    {
      icon: '💪',
      title: 'Ganho de massa muscular',
      body: 'Progressão inteligente de carga e volume para resultado visível — sem estagnar no mesmo treino de sempre.',
    },
    {
      icon: '🚴',
      title: 'Indoor cycling',
      body: 'Cardio forte com segurança no pedal e intensidade sob controle — queima real, postura cuidada e energia de sala.',
    },
    {
      icon: '💃',
      title: 'Zumba (ZIN)',
      body: 'Queimar calorias sem treino chato: ritmos variados, didática ZIN e disposição pra manter a semana em movimento.',
    },
    {
      icon: '📋',
      title: 'Orientação e acompanhamento',
      body: 'Ajustes rápidos no plano, feedback próximo e metas claras — pra você não desandar quando a rotina aperta.',
    },
  ] as const;
}
