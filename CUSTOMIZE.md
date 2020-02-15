# Документация по созданию тем

## Подготовка

Перед созданием тем нужно установить [NodeJS](https://nodejs.org/en/)

Далее, перейдя в npm, нужно установить необходимые пакеты; для этого выполняем следующие команды:

```
npm install -g node-sass
npm install -g csso
npm install -g csso-cli
```

Затем запускаем компилятор SASS:

```
node-sass style/sass -o style -watch
```

Всё готово! Теперь мы можем редактировать SASS-файлы и они будут мгновенно скомпилированы в CSS

## Создание темы

Для начала нужно выбрать цвет для темы
Например, я хочу создать тему, основным цветом которой будет **#3eac43**

### В файл *style/sass/main/_colors.scss* прописываем переменную с нашим цветом:

```
$wa-color-green: #3eac43;
```

### Создаём файл темы *_green.scss* в папке *style/sass/themes*

```
@import '../main/colors'; // подключаем набор цветов
$wa-theme-color: $wa-color-green; // основной цвет темы
$wa-theme-text-color: $standart-color-1; // цвет текста темы
@import '../main/settings-theme'; // подключаем общие настройки для тем
@import '../main/template-theme'; // подключаем общий шаблон тем
```

### Прописываем стиль темы в файл *style/sass/camaleonte.scss*

Стиль темы должен быть прописан ДО стиля *body.wa-night*

```
body.wa-theme-green { // Green Theme
    @import 'themes/green';
}
```

### Создаём ссылку для переключения на новую тему

В файл *style/sass/main/_switches.scss* прописываем новый стиль:

```
.wa-theme-switch.wa-green { // green
    @include wa-theme-switch($wa-color-green, $wa-color-light);
}
```

Далее в footer в блок *.wa-theme-switch-row* прописываем новую ссылку:

```
<div class="wa-theme-switch wa-green"><a href="#!" wa-change-theme="green"></a></div>
```

## Финал

### Сжимаем файл *style/camaleonte.css*:

```
csso style/camaleonte.css --output style/camaleonte.min.css
```

Также сжимать можно CSS-файлы через онлайн-сервис, если вам так будет удобнее:  
[Online JavaScript/CSS/HTML Compressor
](http://refresh-sf.com)
