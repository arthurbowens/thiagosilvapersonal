import { Component } from '@angular/core';
import { SITE } from '../../../core/site.constants';

@Component({
  selector: 'app-hero-section',
  imports: [],
  template: `
    <section
      class="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      aria-labelledby="hero-heading"
    >
      <div
        class="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        class="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"
        aria-hidden="true"
      ></div>
      <div class="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div class="order-2 lg:order-1">
          <p
            class="mb-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300"
          >
            Personal trainer
          </p>
          <h1
            id="hero-heading"
            class="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Emagreça ou ganhe massa com um plano que cabe na sua rotina —
            <span class="text-emerald-400">sem achismos, só método.</span>
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Olá, eu sou <strong class="text-white">{{ site.coachName }}</strong
            >. Ajudo você a emagrecer com saúde ou ganhar massa muscular com um plano
            estruturado, acompanhamento próximo e treinos que realmente funcionam na sua
            rotina.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <a
              class="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              [href]="site.whatsappHref"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero começar meu plano
            </a>
            <a
              class="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              href="#servicos"
            >
              Ver serviços
            </a>
          </div>
          <dl
            class="mt-12 flex flex-col gap-8 border-t border-white/10 pt-10 sm:max-w-2xl sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-y-6"
          >
            <div class="sm:min-w-[10rem] sm:flex-1">
              <dt class="text-xs font-medium uppercase tracking-wider text-slate-500">
                Indoor cycling
              </dt>
              <dd class="mt-1 font-display text-2xl font-bold text-white">+15 anos</dd>
              <dd class="mt-1 max-w-xs text-xs leading-snug text-slate-400">
                ajudando alunos a evoluírem com segurança e consistência
              </dd>
            </div>
            <div class="sm:min-w-[10rem] sm:flex-1">
              <dt class="text-xs font-medium uppercase tracking-wider text-slate-500">
                Zumba
              </dt>
              <dd class="mt-1 font-display text-2xl font-bold text-emerald-400">ZIN</dd>
              <dd class="mt-1 text-xs leading-snug text-slate-400">
                aulas com energia e didática licenciada
              </dd>
            </div>
            <div class="sm:min-w-[10rem] sm:flex-1">
              <dt class="text-xs font-medium uppercase tracking-wider text-slate-500">
                Foco
              </dt>
              <dd class="mt-1 font-display text-lg font-bold leading-snug text-white">
                Corpo &amp; performance
              </dd>
              <dd class="mt-1 text-xs leading-snug text-slate-400">
                emagrecer ou hipertrofia, no seu ritmo
              </dd>
            </div>
          </dl>
        </div>
        <div class="order-1 flex justify-center lg:order-2 lg:justify-end">
          <figure
            class="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-slate-800/50 shadow-2xl shadow-emerald-900/20 ring-1 ring-white/5"
          >
            <img
              class="aspect-[4/5] w-full object-cover object-top"
              [src]="site.heroImageSrc"
              [alt]="site.heroImageAlt"
              width="640"
              height="800"
              fetchpriority="high"
            />
            <figcaption
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent px-6 pb-5 pt-16"
            >
              <p class="font-display text-xl font-bold text-white">{{ site.coachName }}</p>
              <p class="text-sm text-emerald-300/90">{{ site.tagline }}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  protected readonly site = SITE;
}
