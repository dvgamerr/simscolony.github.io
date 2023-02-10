import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://dvgamerr.github.io/',
	base: '/', // http://127.0.0.1:3000/simscolony.github.io/
	integrations: [mdx(), sitemap()],
});
