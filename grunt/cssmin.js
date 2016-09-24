module.exports = {
    all: {
        files: [{
          expand: true,
          cwd: 'dist/styles', //откуда
          src: ['*.css', '!*.min.css'],
          dest: 'dist/styles', //куда
          ext: '.min.css'
        }] 
    }  
};