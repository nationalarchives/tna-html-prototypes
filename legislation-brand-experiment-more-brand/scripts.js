$.bindToggle = function (options) {
    var settings = $.extend({}, $.bindToggle.defaults, options);

    if (settings.hideTargetOnLoad === true) {
        $(settings.target).hide();
    }

    $(document).on('click', settings.toggler, function (e) {
        var toggler = $(this), target;
        e.preventDefault();
        if (settings.contextual === true) {
            target = $(this).parent().find(settings.target);
        } else {
            target = $(settings.target);
        }
        switch (settings.type) {
            case 'slide':
                target.slideToggle('fast');
                break;
            default:
                target.toggle();
        }
        toggler.addClass('hasBeenInteractedWith');
        toggler.toggleClass(settings.togglerClass);
    });
};

$.bindToggle.defaults = {
    togglerClass: 'expanded',
    hideTargetOnLoad: true,
    type: false,
    contextual: false
};

$.bindToggle({ toggler : '.heading', target: '.toggled', type : 'slide', contextual: true });
