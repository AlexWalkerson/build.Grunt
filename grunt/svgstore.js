var config = require('../config.json');
module.exports = {  
	options: {
		includeTitleElement: false,
		svg: {
			style: 'display:none',
		},
		cleanup: [
		'fill',
		],
	},
	default : {
		files: {
			[config.distImgDir+'/sprite.svg']: [config.distImgDir+'/sprites_svg/*.svg'],
		},
	},

};