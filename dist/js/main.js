(function ($) {
    $.fn.modalFx = function (options) {

        var class_prefix = "modal-fx-";
        var status = null;

        // Default options.
        var settings = $.extend({
            action: "open", // open, close, toggle
            target_attr: "data-target",
            defaultFx: 'none',
            close_element: ".modal-background, .modal-close",
            fx_attr: false,
            force_fx: false, // fx name 
            onOpen: null, 
            onClose: null, 

        }, options);

        this.each(function (elm) {
            
            
            var callbacks = $.Callbacks();

            $(this).on('click', function () {
                var emt = this;
                prepareModal(this).done(function () {                  
                    openModal(emt);
                });
            });
            
/*
            var mod = openModal(this);

            mod.done(function (params) {
                //modal.addClass('is-active');
                alert('fatto');
            });*/

        });

        function openModal(element) {
            
            var modalId = $(element).attr(settings.target_attr);
            var modal = $('#' + modalId);
            console.log(element);
            
            modal.addClass('is-active');
        }

        function prepareModal(element) {
            var def = $.Deferred();
            var modalId = $(element).attr(settings.target_attr);
            var modal = $('#' + modalId);

            // SET
            if (settings.force_fx) {
                // Forza un effetto preimpostato
                _setFx(modal, class_prefix + settings.force_fx);

            } else if (settings.fx_attr && $(element).attr(settings.fx_attr) !== undefined ) {

                // Usa l'effetto indicato in un attributo del pulsante
                var fx = $(element).attr(settings.fx_attr);
                _setFx(modal, class_prefix + fx);

            } else if (settings.defaultFx && !_getFx(modal)) {

                // Se non trova un effetto imposta il predefinito, se non è false
                modal.addClass(class_prefix + settings.defaultFx);
            }
            setTimeout(function(){
                def.resolve();
            }, 0);
            return def.promise();
        }

        function _getFx(element) {
            if (element[0].className) {
                var name = $.map(element[0].className.split(' '), function (val, i) {
                    if (val.indexOf(class_prefix) > -1) {
                        return val;
                    }
                });
            }
            return name == '' ? false : name;
        }

        function _setFx(element, newFxClass) {
            return element.removeClass(_getFx(element)).addClass(newFxClass);
        }

/*
        var class_prefix = "modal-fx-";
        var status = null;

        // Default options.
        var settings = $.extend({
            action: "open", // open, close, toggle
            target_attr: "data-target",
            defaultFx: 'none',
            close_element: ".modal-background, .modal-close",
            fx_attr: false,
            force_fx: false, // fx name 
            onOpen: null, 
            onClose: null, 

        }, options);

        this.each(function (elm) {

            var modalId = $(this).attr(settings.target_attr);
            var modal = $('#' + modalId);

            if (settings.force_fx) {
                // Forza un effetto preimpostato
                _setFx(modal, class_prefix + settings.force_fx);

            } else if (settings.fx_attr && $(this).attr(settings.fx_attr) !== undefined ) {

                // Usa l'effetto indicato in un attributo del pulsante
                var fx = $(this).attr(settings.fx_attr);
                _setFx(modal, class_prefix + fx);

            } else if (settings.defaultFx && !_getFx(modal)) {

                // Se non trova un effetto imposta il predefinito, se non è false
                modal.addClass(class_prefix + settings.defaultFx);
            }

            // Open modal
            $(this).on('click', function () {

                _action(settings.action);


                if ( $.isFunction( settings.onOpen ) ) {
                    if(status == 'open') {
                        settings.onOpen.call(this);
                    }
                }
            });

            // Close modal
            modal.on('click', settings.close_element, function() {
                _action('close');
                if ( $.isFunction( settings.onClose ) ) {
                    if(status == 'open') {
                        settings.onClose.call(this);
                    }
                }
            });

            function _action(action) {
                if (action == 'open') {
                    modal.addClass('is-active');
                    status = 'open';
                } else if (action == 'close') {
                    modal.removeClass('is-active');
                } else if (action == 'toggle') {
                    modal.toggleClass('is-active');
                }
            }

            function _getFx(element) {
                if (element[0].className) {
                    var name = $.map(element[0].className.split(' '), function (val, i) {
                        if (val.indexOf(class_prefix) > -1) {
                            return val;
                        }
                    });
                }
                return name == '' ? false : name;
            }

            function _setFx(element, newFxClass) {
                return element.removeClass(_getFx(element)).addClass(newFxClass);
            }

        });
*/
    };
}(jQuery));


$(".modal-button").modalFx({
    action: "open",
    close_element: ".modal-background, .modal-close",
    defaultFx: false,
    target_attr: "data-target",
    fx_attr: "data-fx",
    force_fx: false, // fx name 
    onOpen: function(){
        setTimeout(function(){
            console.log('open');
        }, 500);
    },
    onClose: function(){
        console.log('close');
    }
});