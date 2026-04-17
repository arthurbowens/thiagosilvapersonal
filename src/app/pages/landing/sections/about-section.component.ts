import { Component } from '@angular/core';
import { SITE } from '../../../core/site.constants';

@Component({
  selector: 'app-about-section',
  imports: [],
  template: `
    <section
      id="sobre"
      class="scroll-mt-24 border-b border-white/5 bg-slate-900 py-16 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div class="order-2 lg:order-1">
            <h2
              id="about-heading"
              class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Sobre mim
            </h2>
            <p class="mt-6 text-lg leading-relaxed text-slate-300">
              Há mais de 10 anos ajudo pessoas a transformarem o corpo e a rotina através
              do treino.
            </p>
            <p class="mt-4 text-base font-semibold uppercase tracking-wide text-slate-400">
              Meu método combina
            </p>
            <ul class="mt-3 space-y-2 text-lg text-slate-300" role="list">
              <li class="flex gap-2">
                <span class="text-emerald-400" aria-hidden="true">✔</span>
                <span>treino funcional</span>
              </li>
              <li class="flex gap-2">
                <span class="text-emerald-400" aria-hidden="true">✔</span>
                <span>periodização</span>
              </li>
              <li class="flex gap-2">
                <span class="text-emerald-400" aria-hidden="true">✔</span>
                <span>acompanhamento próximo</span>
              </li>
            </ul>
            <p class="mt-6 text-lg leading-relaxed text-slate-300">
              Com a energia das aulas coletivas — tornando o processo mais leve e
              sustentável.
            </p>
            <p class="mt-4 text-lg font-medium leading-relaxed text-white">
              Nada de fórmula mágica:
              <span class="text-emerald-400">é estratégia, consistência e evolução real.</span>
            </p>
          </div>
          <div class="order-1 lg:order-2">
            <div
              class="relative overflow-hidden rounded-3xl border border-white/10 shadow-xl"
            >
              <img
                class="aspect-[4/5] w-full object-cover object-center"
                [src]="site.aboutImageSrc"
                [alt]="site.aboutImageAlt"
                width="640"
                height="800"
                loading="lazy"
              />
              <div
                class="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-950"
              >
                ZIN · Cycling
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {
  protected readonly site = SITE;
}
