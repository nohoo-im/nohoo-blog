// Site configuration
export const SITE_TITLE = 'Vibe Marketing';
export const SITE_TAGLINE_ZH = 'AI 营销与增长博客';
export const SITE_TAGLINE_EN = 'AI Marketing & Growth Blog';
export const SITE_DESCRIPTION = 'AI-powered marketing with nohoo.im';

// i18n translations
export const translations = {
  zh: {
    siteTitle: 'Vibe Marketing',
    siteDescription: '使用 nohoo.im 借助 AI 结合第三方工具进行营销与用户增长',
    nav: {
      home: '首页',
      blog: '博客',
      about: '关于',
    },
    home: {
      hero: 'Vibe Marketing',
      subtitle: '使用 AI 驱动的工具进行智能营销',
      cta: '开始阅读',
    },
    blog: {
      title: '博客文章',
      readMore: '阅读更多',
    },
    footer: {
      poweredBy: '由 nohoo.im 提供支持',
    },
  },
  en: {
    siteTitle: 'Vibe Marketing',
    siteDescription: 'AI-powered marketing with nohoo.im and third-party tools for growth',
    nav: {
      home: 'Home',
      blog: 'Blog',
      about: 'About',
    },
    home: {
      hero: 'Vibe Marketing',
      subtitle: 'Smart marketing with AI-powered tools',
      cta: 'Start Reading',
    },
    blog: {
      title: 'Blog Posts',
      readMore: 'Read more',
    },
    footer: {
      poweredBy: 'Powered by nohoo.im',
    },
  },
} as const;

export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.zh;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, locale] = url.pathname.split('/');
  if (locale === 'zh') return 'zh';
  return 'en';
}
