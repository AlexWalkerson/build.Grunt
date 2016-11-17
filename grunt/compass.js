var config = require('../config.json');
module.exports = {
    prod: {                   
      options: {              
        sassDir: config.srcSassDir,
        cssDir: config.distCssDir,
        imagesDir: config.distImgDir,
        fontsDir: config.distFontsDir,
        httpFontsDir: config.distFontsDir,
        outputStyle: 'nested',
        environment: 'production',
        assetCacheBuster: false,
        raw: 'require "bootstrap-sass"\nSass::Script::Number.precision = 10\n',
    }
},
    dev: {                    
      options: {
        sourcemap: true,
        sassDir: config.srcSassDir,
        cssDir: config.distCssDir,
        imagesDir: config.distImgDir,
        httpFontsDir: config.distFontsDir,
        outputStyle: 'nested',
        assetCacheBuster: false,
        raw: 'require "bootstrap-sass"\nSass::Script::Number.precision = 10\n',
    }
}

};