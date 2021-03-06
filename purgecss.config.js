module.exports = {
  content: ['build/index.html', 'build/static/js/*.js'],
  css: ['build/static/css/*.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          // eslint-disable-next-line no-useless-escape
          return content.match(/[A-Za-z0-9-_&:@<>\/]+/g) || []; 
        }
      },
      extensions: ['html', 'js'],
    },
  ],
};