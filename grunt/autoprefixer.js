var config = require('../config.json');
module.exports = {

	options: {
		browsers: ["> 1%", "last 2 version", "ff 21", "Opera 12.1"]
	},

	no_dest_single: {
		src: config.distCssDir+'/style.css'
	},

};