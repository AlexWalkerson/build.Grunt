module.exports = {

  // Настройки задач
  options: {
    limit: 4
  },

  // Задачи для разработки
  devFirst: [
  'jshint',
  'concat',
  'compass:dev',
  ],
  devimgFirst: [
  'jshint',
  'concat',  
  'compass:dev',
  'imagemin',
  ],
  devSecond: [
  'cssmin',
  'uglify'
  ],

  // Задачи для продакшна
  prodFirst: [
  'jshint',
  'concat',  
  'compass:prod',
  'imagemin',
  ],
  prodSecond: [
  'cssmin',
  'uglify'
  ],

  // Image tasks
  imgFirst: [
  'imagemin'
  ]
};