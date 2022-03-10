export function contact(){
    let formOne = document.querySelector('.contact__form');
    let checkbox = document.querySelector('#checkbox');
    let label = document.querySelector('.checkbox__wrapper > label');
    formOne.addEventListener('submit', (e) => {
        if(!checkbox.checked) {
            label.classList.add('danger');
            e.preventDefault();
        }
    })
    'use strict';

    var formMail = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        // message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        formMail.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-danger');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    
    formMail.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: formMail.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
}