Используется NodeJS, Gulp, LESS, БЭМ



Структура:
 - "src" исходники проекта из которых собирается проект
 - "build" папка проекта


Gulp-таски:
 - "css:build" компилирует less из папки "src/less" в результирующий "build/css/style.min.css"
 - "js:build" компилирует js из папки "src/js" в результирующий "build/js/bundle.min.js"
 - "watch" при сделанных изменениях в less-файлах автоматически запускает "css:build"
 - "serve" запускает локальный сервер, исходная директория сервера - папка "build"
 - "dev" таск, который запускает сервер, показывает сайт и при изменениях в html и less файлах автоматически перзагружает страницу в браузере


Для сборки используются следующие пакеты:
 - gulp
 - gulp-less
 - gulp-concat
 - gulp-cssmin
 - gulp-rename
 - gulp-postcss
 - autoprefixer
 - css-mqpacker
 - gulp-file-include
 - browser-sync').create
 - gulp-uglifyjs
 - gulp-sourcemaps

