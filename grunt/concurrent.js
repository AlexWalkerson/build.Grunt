module.exports = {

  // Настройки задач
  options: {
    limit: 3
  },

  // Задачи для разработки
  devFirst: [
    'jshint',
    'concat'
  ],
  devSecond: [
    'sass:dev',
    'uglify'
  ],

  // Задачи для продакшна
  prodFirst: [
    'jshint',
    'concat'
  ],
  prodSecond: [
    'sass:prod',
    'uglify'
  ],

  // Image tasks
  imgFirst: [
    'imagemin'
  ]
};