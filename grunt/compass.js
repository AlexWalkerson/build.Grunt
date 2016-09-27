module.exports = {
    prod: {                   // Target
      options: {              // Target options
        sassDir: 'src/styles',
        cssDir: 'dist/styles',
        imagesDir: 'src/sprite',
        imagesPath: 'dist/sprite',
        fontsDir: 'font',
        outputStyle: 'nested',
        environment: 'production'
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
        outputStyle: 'nested',
      }
    }

};