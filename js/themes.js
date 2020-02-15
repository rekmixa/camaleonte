// Настройки
const DEFAULT_THEME = 'green'; // тема
const DEFAULT_NIGHT = 0; // ночная тема по умолчанию (1 - вкл, 0 - выкл)
const AUTO_NIGHT = 0; // автоматическое включение тёмной темы ночью (1 - вкл, 0 - выкл)

 // Смена иконки
var themeToggleIcon = function(theme, night) {
    $('[wa-theme-icon]').remove();
    $(`[wa-change-theme="${theme}"]`).html(`<i wa-theme-icon class="fa ${night == 1 ? 'fa-moon-o' : 'fa-sun-o'}"></i>`);
};

///////
var selectedTheme = () => localStorage.getItem('mainTheme') ? localStorage.getItem('mainTheme') : DEFAULT_THEME; // выбранная тема
var nightMode = () => localStorage.getItem('nightMode') ? localStorage.getItem('nightMode') : DEFAULT_NIGHT; // ночной режим
var nightCheckbox = nightMode => $('#nightMode').prop('checked', nightMode == 1 ? true : false); // checkbox nightMode
var setTheme = (theme, nightMode) => $('body').attr('class', `wa-theme-${theme}${nightMode == 1 ? ' wa-night' : ''}`); // ставим тему
var is_night = () => ((new Date()).getHours() >= 0 && (new Date()).getHours() <= 6); // Сейчас ночь?

// Автоматическое включение ночной темы
if (AUTO_NIGHT == 1) {
    var nightToggle = is_night() ? 1 : 0;
    if (localStorage.getItem('changedNightMode') != nightToggle) {
        setTheme(selectedTheme(), nightToggle);
        localStorage.setItem('nightMode', nightToggle);
        themeToggleIcon(selectedTheme(), nightToggle);
        nightCheckbox(nightToggle);
        console.log(`Night mode ${nightToggle == 1 ? 'ON' : 'OFF'} automatically!`);
    }
}

// Устанавливаем тему
setTheme(selectedTheme(), nightMode());
$(function() {
    themeToggleIcon(selectedTheme(), nightMode());
    nightCheckbox(nightMode());
});
console.log(`Current theme: ${selectedTheme()}`);

$(function() {
    // Ночной режим
    $('#nightMode').change(function() {
        var nightToggle = nightMode() == 1 ? 0 : 1;
        setTheme(selectedTheme(), nightToggle);
        localStorage.setItem('nightMode', nightToggle);
        themeToggleIcon(selectedTheme(), nightToggle);
        nightCheckbox(nightToggle);
        console.log(`Night mode ${nightToggle == 1 ? 'ON' : 'OFF'}!`);
        if (AUTO_NIGHT == 1) { // отключаем автоматику
            localStorage.setItem('changedNightMode', is_night() ? 1 : 0);
        }
    });
    // Меняем тему
    $('[wa-change-theme]').each(function(i, e) {
        var el = $(e);
        var theme = el.attr('wa-change-theme');
        el.click(function() {
            setTheme(theme, nightMode());
            localStorage.setItem('mainTheme', theme);
            themeToggleIcon(theme, nightMode());
            console.log(`Theme changed to ${theme}!`);
        });
    });
});
