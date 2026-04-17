import { Component } from '@angular/core';
import { SiteFooterComponent } from '../../layout/site-footer.component';
import { SiteHeaderComponent } from '../../layout/site-header.component';
import { AboutSectionComponent } from './sections/about-section.component';
import { ContactSectionComponent } from './sections/contact-section.component';
import { DifferentialsSectionComponent } from './sections/differentials-section.component';
import { HeroSectionComponent } from './sections/hero-section.component';
import { ServicesSectionComponent } from './sections/services-section.component';
import { SocialProofSectionComponent } from './sections/social-proof-section.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    SiteHeaderComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    SocialProofSectionComponent,
    DifferentialsSectionComponent,
    ContactSectionComponent,
    SiteFooterComponent,
  ],
  template: `
    <div class="min-h-screen bg-slate-950 text-slate-200 antialiased">
      <app-site-header />
      <main>
        <app-hero-section />
        <app-about-section />
        <app-services-section />
        <app-social-proof-section />
        <app-differentials-section />
        <app-contact-section />
      </main>
      <app-site-footer />
    </div>
  `,
})
export class LandingPage {}
