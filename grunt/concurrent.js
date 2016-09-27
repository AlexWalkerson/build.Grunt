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
  'compass:dev',
    // 'sass:dev',
    'uglify'
  ],

  // Задачи для продакшна
  prodFirst: [
    'jshint',
    'concat'
  ],
  prodSecond: [
    'compass:prod',
    // 'sass:prod',
    'uglify'
  ],

  // Image tasks
  imgFirst: [
    'imagemin'
  ]
};