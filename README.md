# My build via Grund.js 

Все описаное ниже выполнялось в ОС Windows 7.

## 1. Установить:

- [Node.js](https://nodejs.org);
- [Ruby](http://rubyinstaller.org/downloads/);
- Обновить [RubyGem](https://rubygems.org/pages/download);
- [Sass](http://sass-lang.com/install); 
- [Compass](http://compass-style.org/install/);
- [Bootstrap Sass](https://rubygems.org/gems/bootstrap-sass/)



## 2. Установить [Grunt](http://gruntjs.com/getting-started):

```shell
npm install -g grunt-cli
```

## 3. Создание структуры проэкты: 
   - grunt/
   - font/
   - src/
   - src/images/
   - src/scripts/
   - src/styles/  
   - src/sprite/

   
```shell
mkdir grunt font src src/images src/scripts src/styles src/sprite
```

   
## 4. Создание Gruntfile.js и packge.json:

```shell
touch Gruntfile.js
touch package.json
```
Gruntfile.js:
```js    
module.exports = function(grunt) {
   pkg:grunt.file.readJSON('package.json');
   require('load-grunt-config')(grunt, {
       jitGrunt: true
   });
};
```
packge.json:
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
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-jshint --save-dev
npm install jshint-stylish --save
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-concat --save-dev 
npm install grunt-contrib-cssmin --save-dev
npm install grunt-contrib-compass --save-dev
```

    
**Описание:**

* grunt: сам исполнитель задач.
* load-grunt-config: позволяет вам содержать ваш основной Gruntfile коротким и аккуратным.
* grunt-concurrent: запускает задачи одновременно.
* grunt-contrib-clean: очень просто, эта задача удаляет «разные штуки» — используйте с осторожностью!
* grunt-contrib-imagemin: незаменимая вещь для оптимизации изображений.
* grunt-contrib-uglify: делает ваш Javascript красивым и ужасным.
* grunt-contrib-jshint: валидация файлов Javascript.
* jshint-stylish: полностью опционально, но эта задача преобразовывает вывод grunt-contrib-jshint в отличный вид.
* grunt-contrib-watch: запускает задачи при каких-либо изменениях в наблюдаемых файлах.
* grunt-contrib-concat: плагин конкатенации js файлов.
* grunt-contrib-cssmin: плагин минификации и конкатенации css.
* grunt-contrib-compass: Compass

## 6. Склонировать репозиторий.

## 7. Команды: 

* grunt:
   - 1. Удаляет даректории 'dist/images', 'dist/scripts', 'dist/styles';
   - 2. Валидация и конкантенация JS, SCSS -> CSS(prod), оптимизация Изображений;
   - 3. Минимизация CSS, минимизация JS;
* grund dev: 
   - 1. Удаляет директории 'dist/scripts', 'dist/styles';
   - 2. Валидация и конкантенация JS, SCSS -> CSS(dev);
   - 3. Минимизация CSS, минимизация JS;
* grunt img: Оптимизация Изображений.
* grunt devimg:
   - 1. Удаляет даректории 'dist/images', 'dist/scripts', 'dist/styles';
   - 2. Валидация и конкантенация JS, SCSS -> CSS(prod), оптимизация Изображений;
   - 3. Минимизация CSS, минимизация JS;
* grunt watch: 
   - 1. Слежение за src/scripts/*.js и src/styles/*.scss, src/styles/*/*.scss;
   - 2. При изменении JS выполняется их валидация и конкантенация;
   - 3. При изменении SCSS выполняется или compass:dev;



        

