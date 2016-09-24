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
      'src/styles/*.scss'
    ],
    tasks: [
      'sass:dev',
    ]
  },
};