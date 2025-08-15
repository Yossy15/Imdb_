import { ServerRoute, RenderMode } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },      // home prerender
  { path: 'movie/:id', renderMode: RenderMode.Server },  // dynamic SSR
  { path: 'person/:id', renderMode: RenderMode.Server }, // dynamic SSR
  { path: '**', renderMode: RenderMode.Prerender }    // catch-all
];
