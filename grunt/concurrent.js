module.exports = {

  // Настройки задач
  options: {
    limit: 4
  },

  // Задачи для разработки
  devFirst: [
  // 'jshint',
  'concat',
  'compass:dev',
  ],
  devSecond: [
  'autoprefixer',
  'cmq'
  ],
  devThird: [
  'cssmin',
  'uglify'
  ],

  // Задачи для продакшна
  prodFirst: [
  // 'jshint',
  'concat',
  'compass:prod',
  ],
  prodSecond: [
  'autoprefixer',
  'cmq'
  ],
  prodThird: [
  'cssmin',
  'uglify'
  ]
};