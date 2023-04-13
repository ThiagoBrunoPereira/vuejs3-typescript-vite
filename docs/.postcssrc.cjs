// https://github.com/vuejs/vitepress/issues/199#issuecomment-1168325262
// by default vitepress adds .vp-doc h1|h2|h3...p and others tags inside vitepress document.
// here we add :not(:where(.vp-raw *)) selector to use it inside component examples
// to prevent component style pollution from .vp-doc styles

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss/nesting'),
    require('tailwindcss')('./tailwind.config.cjs'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-prefix-selector')({
      prefix: ':not(:where(.vp-raw *))',
      includeFiles: [/vp-doc\.css/],
      transform(prefix, _selector) {
        const [selector, pseudo = ''] = _selector.split(/(:\S*)$/);
        return selector + prefix + pseudo;
      },
    }),
  ],
};
