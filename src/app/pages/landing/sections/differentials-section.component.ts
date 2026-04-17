import { Component } from '@angular/core';

@Component({
  selector: 'app-differentials-section',
  imports: [],
  template: `
    <section
      id="diferenciais"
      class="scroll-mt-24 bg-gradient-to-b from-slate-900 to-slate-950 py-16 sm:py-24"
      aria-labelledby="diff-heading"
    >
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="diff-heading"
          class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Por que treinar comigo
        </h2>
        <ul
          class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          @for (item of items; track item.title) {
            <li
              class="rounded-2xl border border-white/5 bg-slate-950/80 p-5 ring-1 ring-white/5"
            >
              <p class="font-display text-lg font-semibold text-emerald-400">
                {{ item.title }}
              </p>
              <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ item.text }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class DifferentialsSectionComponent {
  protected readonly items = [
    {
      title: 'Experiência comprovada',
      text: 'Anos de sala e piso de academia: domínio técnico em bike, dança e musculação.',
    },
    {
      title: 'Objetivos claros',
      text: 'Emagrecimento ou hipertrofia com metas semanais realistas e mensuráveis.',
    },
    {
      title: 'Energia e método',
      text: 'O melhor dos treinos coletivos aplicado ao acompanhamento personalizado.',
    },
    {
      title: 'Segurança em 1º lugar',
      text: 'Progressão respeitando limites, histórico e biomecânica — treino inteligente.',
    },
  ] as const;
}
