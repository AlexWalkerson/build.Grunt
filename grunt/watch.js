module.exports = {

  options: {
    spawn: false,
    livereload: true
  },

  scripts: {
    files: [
      'src/scripts/*.js'
    ],
    tasks: [
      'jshint',
      'concat',
    ]
  },

  styles: {
    files: [
      'src/styles/*/*.scss','src/styles/*.scss'
    ],
    tasks: [
    'compass:dev',
      // 'sass:dev',
    ]
  },
};