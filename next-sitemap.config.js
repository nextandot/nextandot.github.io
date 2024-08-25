/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nextandot.github.io',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  generateIndexSitemap: false,
  transform: async (config, path) => {
    const defaultConfig = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };

    // ホームページ
    if (path === '/') {
      return { ...defaultConfig, priority: 1.0 };
    }

    // アプリページ
    if (path.startsWith('/apps')) {
      return { ...defaultConfig, priority: 0.8 };
    }

    // ブログページ
    if (path.startsWith('/blog')) {
      return { ...defaultConfig, priority: 0.9, changefreq: 'weekly' };
    }

    // メンバーページ
    if (path.startsWith('/members')) {
      return { ...defaultConfig, priority: 0.7 };
    }

    // 検索ページ
    if (path.startsWith('/search')) {
      return { ...defaultConfig, priority: 0.6 };
    }

    return defaultConfig;
  },
}
