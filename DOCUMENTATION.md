# Документация

## Основы

Вся разметка на странице обязательно должна быть в блоке div#container

Чтобы подключить Camaleonte на свой сайт пропишите в теге head эти строчки:

```
<link rel="stylesheet" href="/style/camaleonte.min.css">
<link rel="stylesheet" href="/fa/css/font-awesome.min.css" type="text/css">
<script src="/js/jquery-3.3.1.js"></script>
<script src="/js/plugins.js"></script>
<script defer src="/js/themes.js"></script>
<script defer src="/js/functions.js"></script>
```

## Сетка

Контент сайта, не включая header и footer, должен быть помещен в этот блок:

```
<div class="wa-content">
    <div class="wa-grid-standart">
        <div class="wa-grid-row-areas">
            <!-- Меню -->
            <div class="wa-item-a"></div>
            <!-- Контент -->
            <div class="wa-item-b"></div>
            <!-- Реклама и прочий контент -->
            <div class="wa-item-c"></div>
        </div>
    </div>
</div>
```

Сетка включает 3 основных блока: .wa-item-a (меню сайта), .wa-item-b (основной контент страницы) и .wa-item-c (реклама и прочий контент)

### Header: шапка сайта

```
<div class="wa-header">
    <div class="wa-h-logo">
        <a href="#!" class="wa-block-link">
            <!-- Логотип -->
            <img src="img/camaleonte.png" alt="logo">
        </a>
    </div>
    <div class="wa-h-link-menu">
        <a href="#!" wa-dropdown="#waSiteMenu" wa-toggle="slide" id="fixedHeaderControl"><i class="fa fa-bars fa-lg" aria-hidden="true"></i></a>
    </div>
    <!-- Menu -->
    <div id="waSiteMenu" class="wa-nav-menu">
        <div class="wa-sm-menu-div">
            <div class="wa-nav-link">
                <a href="#!" class="wa-block-link">Кабинет</a>
            </div>
            <div class="wa-nav-link">
                <a href="#!" class="wa-block-link">Сообщения</a>
            </div>
            <div class="wa-nav-link">
                <a href="#!" class="wa-block-link">Чат</a>
            </div>
            <div class="wa-dropdown">
                <div class="wa-nav-link">
                    <a wa-dropdown-toggle href="#!" class="wa-block-link">Мои статьи</a>
                </div>
                <div class="wa-dropdown-content scroll">
                    <a href="#!" class="wa-block-link">Ссылка #1</a>
                    <a href="#!" class="wa-block-link">Ссылка #2</a>
                    <a href="#!" class="wa-block-link">Ссылка #3</a>
                    <a href="#!" class="wa-block-link">Ссылка #4</a>
                    <a href="#!" class="wa-block-link">Ссылка #5</a>
                    <a href="#!" class="wa-block-link">Ссылка #6</a>
                    <a href="#!" class="wa-block-link">Ссылка #7</a>
                </div>
            </div>
        </div>
    </div>
</div>
```

Если вам нужно, чтобы header был фиксированным, то его нужно обернуть в блок .wa-h-fixed

### Footer: нижний блок сайта

```
<div class="wa-f-container">
  <div class="wa-footer">
    <div class="wa-f-left">
      Camaleonte CSS &copy; 2019<br />
    </div>
    <!-- Обязательный блок, необходим для возможности переключения тем -->
    <div class="wa-dropdown wa-drop-up wa-f-right">
      <a href="#!" wa-dropdown-toggle class="wa-btn wa-btn-light p-tiny"
        >Смена темы</a
      >
      <div class="wa-dropdown-content scroll">
        <div class="wa-dd-item">
          <label class="wa-switch">
            <input type="checkbox" value="1" id="nightMode" />
            <span class="wa-slider for-dropdown round"></span>
          </label>
          <label for="nightMode">
            <span class="wa-slider-text wa-txt-light">Ночной режим</span>
          </label>
        </div>
        <div class="wa-dd-item">
          <div class="wa-theme-switch-container">
            <div class="wa-theme-switch-row">
              <div class="wa-theme-switch wa-light">
                <a href="#!" wa-change-theme="light"></a>
              </div>
              <div class="wa-theme-switch wa-dark">
                <a href="#!" wa-change-theme="dark"></a>
              </div>
              <div class="wa-theme-switch wa-red">
                <a href="#!" wa-change-theme="red"></a>
              </div>
              <div class="wa-theme-switch wa-green">
                <a href="#!" wa-change-theme="green"></a>
              </div>
              <div class="wa-theme-switch wa-blue">
                <a href="#!" wa-change-theme="blue"></a>
              </div>
              <div class="wa-theme-switch wa-orange">
                <a href="#!" wa-change-theme="orange"></a>
              </div>
              <div class="wa-theme-switch wa-pink">
                <a href="#!" wa-change-theme="pink"></a>
              </div>
              <div class="wa-theme-switch wa-purple">
                <a href="#!" wa-change-theme="purple"></a>
              </div>
              <div class="wa-theme-switch wa-brown">
                <a href="#!" wa-change-theme="brown"></a>
              </div>
              <div class="wa-theme-switch wa-jade">
                <a href="#!" wa-change-theme="jade"></a>
              </div>
              <div class="wa-theme-switch wa-yellow">
                <a href="#!" wa-change-theme="yellow"></a>
              </div>
              <div class="wa-theme-switch wa-deepskyblue">
                <a href="#!" wa-change-theme="deepskyblue"></a>
              </div>
              <div class="wa-theme-switch wa-khaki">
                <a href="#!" wa-change-theme="khaki"></a>
              </div>
              <div class="wa-theme-switch wa-amethyst">
                <a href="#!" wa-change-theme="amethyst"></a>
              </div>
              <div class="wa-theme-switch wa-periwinkle">
                <a href="#!" wa-change-theme="periwinkle"></a>
              </div>
              <div class="wa-theme-switch wa-tomato">
                <a href="#!" wa-change-theme="tomato"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Постраничная навигация

```
<div class="wa-pagination">
    <a href="#"><i class="fa fa-arrow-left"></i></a>
    <span class="wa-pg-current">1</span>
    <a href="#!">2</a>
    <a href="#!">3</a>
    <a href="#!">4</a>
    <a href="#!">5</a>
    <span class="wa-pg-space">...</span>
    <a href="#!">15</a>
    <a href="#"><i class="fa fa-arrow-right"></i></a>
</div>
```

### Dropdown: выпадающий список

Dropdown должен быть обёрнут в блок .wa-dropdown, содержать ссылку с аттрибутом wa-dropdown-toggle (для открытия) и блок .wa-dropdown-content

В блоке должны быть a.wa-block-link либо div.wa-dd-item, если вам нужно вывести просто текст

```
<div class="wa-dropdown">
    <a href="#!" wa-dropdown-toggle class="wa-btn">Dropdown</a>
    <div class="wa-dropdown-content">
        <a href="#!" class="wa-block-link">Ссылка #1</a>
        <a href="#!" class="wa-block-link">Ссылка #2</a>
        <a href="#!" class="wa-block-link">Ссылка #3</a>
        <a href="#!" class="wa-block-link">Ссылка #4</a>
        <a href="#!" class="wa-block-link">Ссылка #5</a>
        <a href="#!" class="wa-block-link">Ссылка #6</a>
        <a href="#!" class="wa-block-link">Ссылка #7</a>
    </div>
</div>
```

Для dropdown можно задать тему (подробнее - style/sass/main/_template.scss)
Для того, чтобы это сделать нужно приписать класс темы к основному блоку .wa-dropdown, например - wa-red

Для того, чтобы ваш dropdown выпадал влево или вправо к блоку .wa-dropdown-content нужно приписать класс left или right соответственно (по умолчанию dropdown выпадает вправо)

Для того, чтобы ваш dropdown выпадал наверх к блоку .wa-dropdown-content нужно приписать класс wa-drop-up

Для того, чтобы контент вашего dropdown можно было скроллить припишите к блоку .wa-dropdown-content класс scroll (это активирует функцию magic scroll)

## Основные цвета

Информация: style/sass/main/_colors.scss

## Основные элементы страницы

*.wa-div-title* - Заголовок  
*.wa-div* - Контент  
*.wa-links>a.wa-block-link*10* - Блок со ссылками  
*.wa-btn* - Кнопка  

## Тема

Настроить тему по умолчанию и прочие параметры можно в файле js/themes.js

## Прочее

Другие полезные классы и темы для основных элементов:  
- style/sass/main/_grid.scss  
- style/sass/main/_template.scss  
- style/sass/main/_template-theme.scss  

[jQuery](http://jquery.com)  
[Font-awesome](http://fontawesome.ru)  
