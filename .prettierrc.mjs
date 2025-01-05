/** @type {import("prettier").Config} */
export default {
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  useTabs: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};