import { Component } from '@angular/core';
import { SITE } from '../../../core/site.constants';

@Component({
  selector: 'app-social-proof-section',
  imports: [],
  template: `
    <section
      id="resultados"
      class="scroll-mt-24 border-b border-white/5 bg-slate-900 py-16 sm:py-24"
      aria-labelledby="social-proof-heading"
    >
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2
              id="social-proof-heading"
              class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Resultados reais, com método
            </h2>
            <p class="mt-4 text-lg text-slate-400">
              {{ site.socialProofIntro }}
            </p>
          </div>
          <ul
            class="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-6 sm:p-8"
            role="list"
          >
            @for (line of site.socialProofBullets; track line) {
              <li class="flex gap-3 text-base leading-relaxed text-slate-200 sm:text-lg">
                <span class="mt-0.5 shrink-0 font-semibold text-emerald-400" aria-hidden="true"
                  >✔</span
                >
                <span>{{ line }}</span>
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class SocialProofSectionComponent {
  protected readonly site = SITE;
}
