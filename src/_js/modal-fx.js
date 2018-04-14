// Trigger modals
(function () {
    var modalFX = (function () {

        var onClickEach = function (selector, callback) {
            var arr = document.querySelectorAll(selector);
            arr.forEach(function (el) {
                el.addEventListener('click', callback);
            })
        };

        var events = function () {

            // Close all modals if ESC key is pressed
            document.addEventListener('keyup', function(key){
                if(key.keyCode == 27) {
                    closeAll();
                }
            });

            onClickEach('.modal-button', openModal);
            onClickEach('.modal-close', closeModal);
            onClickEach('.modal-background', closeModal);
        };

        var closeAll = function() {
            var openModal = document.querySelectorAll('.is-active');
            openModal.forEach(function (modal) {
                modal.classList.remove('is-active');
            })
        };

        var openModal = function () {
            var modal = this.getAttribute('data-target');
            document.getElementById(modal).classList.add('is-active');
        };

        var closeModal = function () {
            var modal = this.parentElement.id;
            document.getElementById(modal).classList.remove('is-active');
        };

        return {
            init: function () {
                events();
            }
        }
    })();

    modalFX.init();

})();