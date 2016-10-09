module.exports = {
    prod: {                   // Target
      options: {              // Target options
        sassDir: 'src/styles',
        cssDir: 'dist/styles',
        imagesDir: 'src/sprite',
        imagesPath: 'dist/sprite',
        fontsDir: 'font',
        httpFontsDir: 'second/font',
        outputStyle: 'nested',
        environment: 'production',
        assetCacheBuster: false,
        raw: 'require "bootstrap-sass"\nSass::Script::Number.precision = 10\n',
      }
    },
    dev: {                    // Another target
      options: {
        sourcemap: true,
        sassDir: 'src/styles',
        cssDir: 'dist/styles',
        imagesDir: 'src/sprite',
        imagesPath: 'dist/sprite',
        fontsDir: 'font',
        httpFontsDir: 'second/font',
        outputStyle: 'nested',
        assetCacheBuster: false,
        raw: 'require "bootstrap-sass"\nSass::Script::Number.precision = 10\n',
      }
    }

};