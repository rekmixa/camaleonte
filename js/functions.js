window.onload = function() {

    /*
     *********
     */

     ////

    /*
     ********************
     * Фиксация header'а
     ********************
     */

     if ($('div').is('.wa-h-fixed')) { // включена ли фиксация header'а?
         // margin-top для контента при фиксированном header'е
         $('.wa-content').addClass('wa-margin-for-fixed');
     }

     var siteMenuScroll = function() { // скролл меню
         var margin_for_fixed = parseInt($('.wa-content.wa-margin-for-fixed').css('margin-top'));
         if ($(window).outerWidth() < 766) {
             $('.wa-nav-menu').css({'max-height': ($(window).outerHeight() - margin_for_fixed + 8) + 'px', 'overflow-y': 'auto'});
         }
     };

     siteMenuScroll();
     $(window).resize(function() {
         siteMenuScroll();
     });

    /*
     ************
     * Dropdown
     ************
     */

     function switchDropdownToggles(toggle) {
         var funcs;
         switch (toggle) {
             case 'slide':
                funcs = {
                    open: (element) => element.slideDown(),
                    close: (element) => element.slideUp()
                };
                break;
            case 'fade':
                funcs = {
                    open: (element) => element.fadeIn(),
                    close: (element) => element.fadeOut()
                };
                break;
            default:
                funcs = undefined;
         }
         return funcs;
     }

     $('[wa-dropdown]').each(function(i, e) {
         var el = $(e);
         el.click(function() {
             var content_selector = el.attr('wa-dropdown');
             var toggle = el.attr('wa-toggle');
             var dropdown = $(content_selector);
             var funcs = switchDropdownToggles(toggle);
             dropdown.dropdownToggle(undefined, funcs);
         });
     });

     $('.wa-dropdown').each(function(i, e) {
         var dd = $(e);
         var parent = dd.parent();
         var toggle_link = dd.find('[wa-dropdown-toggle]');
         var toggle = toggle_link.attr('wa-toggle');
         var hover = dd.find('[wa-dropdown-hover]');
         var content = dd.find('.wa-dropdown-content');
         var funcs = switchDropdownToggles(toggle);
         // Caret
         var caret;
         if (!dd.hasClass('wa-no-caret')) {
             $(`<i class="fa ${dd.hasClass('wa-drop-up') ? 'fa-caret-up' : 'fa-caret-down'} wa-dropdown-caret" aria-hidden="true"></i>`).appendTo(toggle_link);
             caret = dd.find('.wa-dropdown-caret');
         }
         // Корректирует положение dropdown контента
         if (dd.hasClass('wa-drop-up')) {
             content.css({ // dropup
                 bottom: parseInt(toggle_link.css('margin-bottom')) + toggle_link.outerHeight() + 'px',
                 'margin-left': toggle_link.css('margin-left'),
                 'margin-right': toggle_link.css('margin-right'),
             });
         } else {
             content.css({ // dropdown
                 'margin-top': -parseInt(toggle_link.css('margin-bottom')) + 'px',
                 'margin-left': toggle_link.css('margin-left'),
                 'margin-right': toggle_link.css('margin-right'),
             });
         }
         // Устанавливаем функции для dropdownToggle
         if (funcs === undefined) {
             var funcs = {
                 open: function(element) {
                     if (parent.hasClass('wa-sm-menu-div') && $(window).outerWidth() < 766) {
                         element.slideDown();
                     } else {
                         element.fadeIn();
                     }
                 },
                 close: function(element) {
                     if (parent.hasClass('wa-sm-menu-div') && $(window).outerWidth() < 766) {
                         element.slideUp();
                     } else {
                         element.fadeOut();
                     }
                 }
             };
         }
         // open & close
         toggle_link.click(function() {
             content.dropdownToggle(caret, funcs);
         });
         // +60px to width
         content.plusWidth(60);
         // Magic Scroll
         var contentScroll = function() {
             if (content.hasClass('scroll')) {
                 var margin_for_fixed = parseInt($('.wa-content.wa-margin-for-fixed').css('margin-top'));
                 var window_height = $(window).outerHeight();
                 var offset_top = dd.offset().top;
                 var scroll_top = $(window).scrollTop();
                 if (dd.hasClass('wa-drop-up')) {
                     content.css({ // dropup
                         'max-height': (offset_top - scroll_top - margin_for_fixed - 40) + 'px',
                         'overflow-y': 'auto'
                     });
                 } else {
                     content.css({ // dropdown
                         'max-height': (window_height - margin_for_fixed - offset_top + scroll_top) + 'px',
                         'overflow-y': 'auto'
                     });
                 }
             }
         };
         contentScroll();
         // добавляем класс .right, если контент выходит за границы
         var righted;
         var contentRight = function() {
             var offset_width = dd.offset().left + content.innerWidth();
             var window_width = $(window).innerWidth();
             if (offset_width > window_width) {
                 righted = true;
                 content.addClass('right');
             } else if (righted) {
                 righted = undefined;
                 content.removeClass('right');
             }
         };
         ///////
         contentRight();
         $(window).resize(function() {
             contentScroll();
             contentRight();
         });
         $(window).scroll(function() {
             contentScroll();
         });
     });

};
