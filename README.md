# My build via Grund.js 

Все описаное ниже выполнялось в ОС Windows 7.


Перед установкой Grunt-а необходимо установить [Node.js](https://nodejs.org).



## 1. Установить Grunt:

```shell
cd path-to-project/
npm install -g grunt-cli
```

## 2. Создание структуры проэкты: 
   - grunt/
   - src/
   - src/images/
   - src/scripts/
   - src/styles/  

   
```shell
mkdir grunt src src/images src/scripts src/styles
```


   
## 3. Создание Gruntfile.js:

```shell
touch Gruntfile.js
```

```js    
module.exports = function(grunt) {
   require('load-grunt-config')(grunt, {
       jitGrunt: true
   });
};
```

 
## 4. Создание файла пакета packge.json:

```shell   
touch package.json
```

```js
{
   "name": "my-project",       //Имя проэкта
   "version": "0.0.1",         //Версия
   "description": "My project" //Описание
}
```

## 5. Добавление зависимостей: 

```shell
npm install grunt --save-dev
npm install load-grunt-config --save-dev
npm install grunt-concurrent --save-dev
npm install grunt-contrib-clean --save-dev
npm install grunt-contrib-imagemin --save-dev
npm install grunt-sass --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-jshint --save-dev
npm install jshint-stylish --save
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-concat --save-dev 
npm install grunt-contrib-cssmin --save-dev
```

    
**Описание:**

* grunt: сам исполнитель задач.
* load-grunt-config: позволяет вам содержать ваш основной Gruntfile коротким и аккуратным.
* grunt-concurrent: запускает задачи одновременно.
* grunt-contrib-clean: очень просто, эта задача удаляет «разные штуки» — используйте с осторожностью!
* grunt-contrib-imagemin: незаменимая вещь для оптимизации изображений.
* grunt-sass: компиляция ваших SASS/SCSS файлов в CSS.
* grunt-contrib-uglify: делает ваш Javascript красивым и ужасным.
* grunt-contrib-jshint: валидация файлов Javascript.
* jshint-stylish: полностью опционально, но эта задача преобразовывает вывод grunt-contrib-jshint в отличный вид.
* grunt-contrib-watch: запускает задачи при каких-либо изменениях в наблюдаемых файлах.
* grunt-contrib-concat: плагин конкатенации js файлов.
* grunt-contrib-cssmin: плагин минификации и конкатенации css.

    
## 6. Конфигурация задач load-grunt-config:

**В директории grunt создайте следующие файлы:**

- grunt/aliases.yaml
- grunt/concurrent.js
- grunt/clean.js
- grunt/imagemin.js
- grunt/jshint.js
- grunt/sass.js
- grunt/uglify.js
- grunt/watch.js
- grunt/concat.js
- grunt/cssmin.js

```shell      
touch grunt/aliases.yaml grunt/concurrent.js grunt/clean.js grunt/imagemin.js grunt/jshint.js grunt/sass.js grunt/uglify.js grunt/watch.js grunt/concat.js grunt/cssmin.js
```

## 7. Конфигурация задач

**aliases.yaml:**

```js
default:
 description: 'Default (production) build'
 tasks:
   - prod
dev:
 description: 'Development build'
 tasks:
   - clean
   - 'concurrent:devFirst'
   - 'concurrent:devSecond'
   - cssmin
img:
 description: 'Image tasks'
 tasks:
   - 'concurrent:imgFirst'
devimg:
 description: 'Development build and image tasks'
 tasks:
   - dev
   - img
prod:
 description: 'Production build'
 tasks:
   - clean
   - 'concurrent:prodFirst'
   - 'concurrent:prodSecond'
   - cssmin
   - img   
```

**clean.js:**
```js
module.exports = {
 all: [
   "dist/"
 ]
};
```

**concat.js:**
```js
module.exports = {
   dist: {
       src: 'src/scripts/*.js',  // какие файлы конкатенировать
       dest: 'dist/scripts/build.js'  // куда класть файл, который получиться после процесса конкатенации 
   }    
};
```

**concurrent.js:**
```js
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
```
        
**cssmin.js:**
```js
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
```
        
**cssmin.js:**
```js
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
```
        
**imagemin.js:**
```js
module.exports = {
 all: {
   files: [{
     expand: true,
     cwd: 'src/',
     src: ['images/*.{png,jpg,gif}'],
     dest: 'dist/'
   }]
 }
};
```
        
**jshint.js:**
```js
module.exports = {
 options: {
   reporter: require('jshint-stylish')
 },
 main: [
   'src/scripts/*.js'
 ]
};
```
        
**sass.js:**
```js
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
```
        
**uglify.js:**
```js
module.exports = {
   dist: {
       files: {
         'dist/scripts/build.min.js': ['dist/scripts/build.js']
       }
     }  
};
```

**watch.js:**
```js
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
```

## 8. Подключение и настройка Compass.


Всю необходимую информацию по установке и настройке можо найти [здесь](https://github.com/gruntjs/grunt-contrib-compass). Ниже приведен пример моих настроек.

>Для того, что бы использовать [Compass](https://github.com/gruntjs/grunt-contrib-compass) должны быть установлены [Ruby](http://rubyinstaller.org/downloads/), [Sass](http://sass-lang.com/install) и [Compass](http://compass-style.org/install/).
>Если же достаточно одного [Sass](https://github.com/sindresorhus/grunt-sass) компилятора(как в примере выше), то ничего, из перечисленного непотребуется.

### Устанавливаем плагин Compass:
```shell
npm install grunt-contrib-compass --save-dev
```

### Создаем задачу:

**grunt/compass.js:**
```js
module.exports = {
    prod: {                   
      options: {              
        sassDir: 'src/styles',      //SCSS-файлы
        cssDir: 'dist/styles',      //перекомпилированные CSS 
        imagesDir: 'src/sprite',    //от куда брать картинки для спрайтов
        imagesPath: 'dist/sprite',  //куда класть спрайты после компеляции
        fontsDir: 'font',           //папка со шрифтами
        outputStyle: 'nested',
        environment: 'production'
      }
    },
    dev: {                    
      options: {
        sourcemap: true,
        sassDir: 'src/styles',
        cssDir: 'dist/styles',
        imagesDir: 'src/sprite',
        imagesPath: 'dist/sprite',
        fontsDir: 'font',
        outputStyle: 'nested',
      }
    }
};
```
### Редактируем concurrent.js и watch.js: заменяем 'sass:dev' на 'compass:dev', 'sass:prod' на 'compass:prod'.



## 9. Команды: 

* grunt - Инициализация grunt prod:
   - 1. Очищает даректорию dist;
   - 2. Валидация и конкантенация JS;
   - 3. SCSS -> CSS(prod), минимизация JS;
   - 4. Минимизация CSS;
   - 5. Оптимизация Изображений.
* grund dev: 
   - 1. Очищает директорию dist;
   - 2. Валидация и конкантенация JS;
   - 3. SCSS -> CSS(dev), минимизация JS;
   - 4. Минимизация CSS.
* grunt img: Оптимизация Изображений.
* grunt devimg:
   - 1. Инициализация grunt dev;
   - 2. Инициализация grunt img.
* grunt watch: 
   - 1. Слежение за src/scripts/*.js и src/styles/*.scss;
   - 2. При изменении JS выполняется их валидация и конкантенация;
   - 3. При изменении SCSS выполняется sass:dev(или compass:dev);



        

