import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import pwaServiceWorker from './src/integrations/pwa-sw.mjs';

// https://astro.build/config
export default defineConfig({
  // أصل النشر ومساره — مختومان من workspace.json (npm run identity)
  site: 'https://warehouse-art.github.io',
  // مسار المستودع تحت الأصل، لتعمل الروابط الداخلية
  base: '/brand-zo-hub',

  // pwaServiceWorker يولّد sw.js بعد البناء (تثبيت + عمل دون اتصال + تحديث ذاتي).
  integrations: [react(), pwaServiceWorker()],
});
