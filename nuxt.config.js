var glob = require('glob');
var path = require('path');

module.exports = {
  /*
  ** Headers of the page
  */

  dynamicRoutes: getDynamicPaths({
    '/dishes': 'dishes/*.json'
  }),

  head: {
    title: 'The Big Dill',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A Tasty, Punny JAMStack demo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    'nuxt-netlify-cms'
  ]
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
    var filepathGlob = urlFilepathTable[url];
  return glob
    .sync(filepathGlob, { cwd: 'content' })
    .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
})
);
}

