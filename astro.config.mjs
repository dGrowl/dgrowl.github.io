// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

const mathjaxOptions = {
	svg: {
		scale: 1.
	}
}

const mathjaxPlugin = () => rehypeMathjax(mathjaxOptions)

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [mathjaxPlugin],
	}
});
