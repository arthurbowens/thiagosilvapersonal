import { Component } from '@angular/core';
import { SITE } from '../../../core/site.constants';

@Component({
  selector: 'app-contact-section',
  imports: [],
  template: `
    <section
      id="contato"
      class="scroll-mt-24 border-t border-white/10 bg-slate-950 py-16 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          class="overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 to-slate-900 p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12"
        >
          <div>
            <h2
              id="contact-heading"
              class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Bora montar seu plano?
            </h2>
            <p class="mt-4 max-w-xl text-lg text-slate-300">
              Me chama no WhatsApp agora: a gente pode montar seu plano ainda hoje. Alinhamos
              objetivo, horários e formato (presencial ou combinados) — te explico como
              começar, sem compromisso.
            </p>
            <p class="mt-4 text-sm text-slate-400">
              E-mail:
              <a class="text-emerald-400 underline-offset-2 hover:underline" [href]="mailTo">{{
                site.email
              }}</a>
            </p>
          </div>
          <div class="mt-8 flex shrink-0 flex-col gap-4 sm:flex-row lg:mt-0 lg:flex-col">
            <a
              class="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-center text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
              [href]="site.whatsappHref"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ site.whatsappLabel }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactSectionComponent {
  protected readonly site = SITE;
  protected readonly mailTo = `mailto:${SITE.email}?subject=Contato%20via%20site%20-%20Personal%20trainer`;
}
