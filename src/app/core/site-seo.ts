import { Meta, Title } from '@angular/platform-browser';
import { SITE } from './site.constants';

export function applySiteSeo(meta: Meta, title: Title): void {
  const shareImage = `${SITE.siteUrl}${SITE.heroImageSrc}`;

  title.setTitle(SITE.title);

  meta.updateTag({ name: 'description', content: SITE.description });
  meta.updateTag({ property: 'og:type', content: 'website' });
  meta.updateTag({ property: 'og:site_name', content: SITE.coachName });
  meta.updateTag({ property: 'og:title', content: SITE.title });
  meta.updateTag({ property: 'og:description', content: SITE.description });
  meta.updateTag({ property: 'og:url', content: SITE.siteUrl });
  meta.updateTag({ property: 'og:locale', content: 'pt_BR' });
  meta.updateTag({ property: 'og:image', content: shareImage });
  meta.updateTag({ property: 'og:image:alt', content: SITE.heroImageAlt });
  meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  meta.updateTag({ name: 'twitter:title', content: SITE.title });
  meta.updateTag({ name: 'twitter:description', content: SITE.description });
  meta.updateTag({ name: 'twitter:image', content: shareImage });
}
