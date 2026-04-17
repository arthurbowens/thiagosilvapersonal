import { Component } from '@angular/core';
import { SITE } from '../core/site.constants';

@Component({
  selector: 'app-site-footer',
  imports: [],
  template: `
    <footer class="border-t border-white/10 bg-slate-950 py-10 text-center text-slate-500">
      <p class="text-sm">
        © {{ year }} {{ site.coachName }}. Todos os direitos reservados.
      </p>
      <p class="mt-2 text-xs">Treinos presenciais e orientação personalizada.</p>
    </footer>
  `,
})
export class SiteFooterComponent {
  protected readonly site = SITE;
  protected readonly year = new Date().getFullYear();
}
