export default {
    async rewrites() {
      return [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
      ];
    },
};
  