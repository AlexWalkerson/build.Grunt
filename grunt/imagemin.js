var config = require('../config.json');
module.exports = {
	all: {
		options: {
			optimizationLevel: 3
		},
		files: [{
			expand: true,
			cwd: config.srcImgDir,
			src: ['*.{png,jpg,gif,svg}', '*/*.{png,jpg,gif,svg}'],
			dest: config.distImgDir
		}]
	}
};