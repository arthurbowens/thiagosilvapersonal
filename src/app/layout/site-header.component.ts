import { Component } from '@angular/core';
import { NAV_LINKS, SITE } from '../core/site.constants';

@Component({
  selector: 'app-site-header',
  imports: [],
  template: `
    <header
      class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md"
    >
      <div
        class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <a href="#" class="group flex flex-col leading-tight">
          <span
            class="font-display text-lg font-bold tracking-tight text-white transition group-hover:text-emerald-400"
            >{{ site.coachName }}</span
          >
          <span class="text-xs font-medium uppercase tracking-widest text-emerald-400/90"
            >Personal trainer</span
          >
        </a>
        <nav class="hidden items-center gap-8 md:flex" aria-label="Principal">
          @for (link of links; track link.id) {
            <a
              class="text-sm font-medium text-slate-300 transition hover:text-white"
              [href]="'#' + link.id"
              >{{ link.label }}</a
            >
          }
        </nav>
        <a
          class="inline-flex shrink-0 items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
          [href]="site.whatsappHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ site.whatsappLabel }}
        </a>
      </div>
    </header>
  `,
})
export class SiteHeaderComponent {
  protected readonly site = SITE;
  protected readonly links = NAV_LINKS;
}
