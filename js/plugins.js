(function($) {
    // Plus to width
    $.fn.plusWidth = function(plus) {
        if (!this.length)
            return;
        var changed;
        var element = this;
        var changeWidth = function() {
            var current_width = element.width();
            var new_width = current_width + plus;
            var window_width = $(window).outerWidth();
            if (changed === undefined && current_width > 0 && new_width < window_width) {
                changed = true; // менять ширину только один раз!!!
                element.css('width', new_width);
                console.log('Width of some element changed to ' + new_width + 'px');
            }
        };
        changeWidth();
        $(window).resize(function() {
            changeWidth();
            //console.log('event on resize window');
        });
    };
    // Dropdown
    $.fn.dropdownToggle = function(caret, funcs) {
        if (funcs === undefined)
            funcs = {open: false, close: false};
        if (!this.length)
            return;
        var content = this;
        var parent = content.parent();
        // Caret
        var caretToggle = function(open) {
            if (caret !== undefined) {
                var caret_open = parent.hasClass('wa-drop-up') ? 'fa-caret-down' : 'fa-caret-up';
                var caret_close = parent.hasClass('wa-drop-up') ? 'fa-caret-up' : 'fa-caret-down';
                caret.attr('class', `fa ${open === true ? caret_open : caret_close} wa-dropdown-caret`);
            }
        };
        // функция открытия dropdown
        var dropdownOpen = function(element) {
            if ($.isFunction(funcs.open)) {
                funcs.open(element);
            } else {
                element.fadeIn();
            }
        };
        // функция закрытия dropdown
        var dropdownClose = function(element) {
            if ($.isFunction(funcs.close)) {
                funcs.close(element);
            } else {
                element.fadeOut();
            }
        };
        // прячем при клике вне элемента
        $(document).bind('mouseup', function(e) {
            if (!parent.is(e.target)
                && parent.has(e.target).length === 0
                && content.is(':visible')) {
                dropdownClose(content); // скрываем его
                caretToggle(false);
                $(this).unbind('mouseup'); // снимаем событие
            }
        });
        ////////
        if (this.is(':visible')) {
            // закрываем dropdown
            dropdownClose(content);
            caretToggle(false);
        } else {
            // открываем dropdown
            dropdownOpen(content);
            caretToggle(true);
        }
    };
})($);
