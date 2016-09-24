module.exports = {
  // Настройки для разработки
  dev: {
    options: {
      style: 'nested',
      sourceMap: true
    },
    files: [{
      expand: true,
      cwd: 'src/styles',
      src: ['*.scss'],
      dest: 'dist/styles',
      ext: '.css'
    }]
  },
  // Настройки для продакшна
  prod: {
    options: {
      style: 'nested',
      sourceMap: false
    },
    files: [{
      expand: true,
      cwd: 'src/styles',
      src: ['*.scss'],
      dest: 'dist/styles',
      ext: '.css'
    }]
  }
};