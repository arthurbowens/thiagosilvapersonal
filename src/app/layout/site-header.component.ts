import { Component } from '@angular/core';
import { NAV_LINKS, SITE } from '../core/site.constants';

@Component({
  selector: 'app-site-header',
  imports: [],
  template: `
    <header
      class="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md"
    >
      <div
        class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <a href="#" class="group shrink-0 transition hover:opacity-90">
          <img
            class="h-16 w-auto sm:h-20 lg:h-24"
            [src]="site.logoSrc"
            [alt]="site.logoAlt"
            width="320"
            height="86"
            decoding="async"
          />
        </a>
        <nav class="hidden items-center gap-8 md:flex" aria-label="Principal">
          @for (link of links; track link.id) {
            <a
              class="text-sm font-medium text-zinc-300 transition hover:text-white"
              [href]="'#' + link.id"
              >{{ link.label }}</a
            >
          }
        </nav>
        <a
          class="inline-flex shrink-0 items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-500"
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
