import { Component } from '@angular/core';
import { SITE } from '../../../core/site.constants';

@Component({
  selector: 'app-pricing-section',
  imports: [],
  template: `
    <section
      id="planos"
      class="scroll-mt-24 border-b border-white/5 bg-zinc-950 py-16 sm:py-24"
      aria-labelledby="pricing-heading"
    >
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <h2
            id="pricing-heading"
            class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Investimento
          </h2>
          <p class="mt-4 text-lg text-zinc-400">
            Valores transparentes: você sabe o que está contratando antes de começar.
          </p>
        </div>
        <div
          class="mx-auto mt-12 flex max-w-xl flex-col rounded-2xl border border-red-600/40 bg-gradient-to-br from-red-950/30 to-zinc-950 p-6 shadow-lg shadow-red-950/20 sm:p-8"
        >
          <p class="text-sm font-semibold uppercase tracking-wider text-red-500">
            {{ site.pricing.label }}
          </p>
          <h3 class="mt-2 font-display text-2xl font-bold text-white">{{ site.pricing.title }}</h3>
          <p class="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {{ site.pricing.price }}
            <span class="text-lg font-medium text-zinc-400">{{ site.pricing.priceSuffix }}</span>
          </p>
          <p class="mt-4 text-sm leading-relaxed text-zinc-400">{{ site.pricing.body }}</p>
          <a
            class="mt-8 inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-center text-base font-semibold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-500"
            [href]="site.whatsappHref"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ site.pricing.cta }}
          </a>
        </div>
      </div>
    </section>
  `,
})
export class PricingSectionComponent {
  protected readonly site = SITE;
}
