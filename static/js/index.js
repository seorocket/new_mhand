// $(document).ready(function () {
//
//     $("#datepicker").datepicker();
//     $('.select-city-coupon').select2(
//         {
//             placeholder: "Выбрать город",
//             allowClear: true,
//             width: '100%',
//             language: "ru",
//             dropdownParent: $("#exampleModal")
//         }
//     );
//
//     $('.test').on('click', function () {
//         $('#exampleModal').show()
//     })
// })

// mask for phone input
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.phone'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, true);
        input.addEventListener("keydown", mask, false)
    });
});

function progressBar() {
    // Узнаем на сколько страница прокручена
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    // Узнаем высоту всей страницы
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Получаем в % на сколько прокручена страница
    let scrolled = scroll / height * 100;

    // Подставляем % прокрутки в ширину нашей линии
    document.getElementById('progress-bar-custom').style.width = scrolled + '%';
}

// Запускаем функцию, когда пользователя скролит
window.addEventListener('scroll', progressBar);

$(document).ready(function () {
    $(function () {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });

    $(".img-block-collection").hover(function () {
        const elemts = $('.img-block-collection')
        for (let i = 0; i < elemts.length; i++) {
            $(elemts[i]).css('width', '65px')

        }
        $(this).css('width', '140px')
        $($(this).next()).css('width', '85px')
        $($(this).prev()).css('width', '85px')
    })

    $(".img-block-collection").mouseleave(function (e) {
        const elemts = $('.img-block-collection')
        for (let i = 0; i < elemts.length; i++) {
            $(elemts[i]).css('width', '65px')
        }
    })

    $('.toggle-tabs').on('click', function () {

        if ($(this).next().children('li.active').next().length != 0) {
            $(this).next().children('li.active').next()
                .addClass('active').siblings().removeClass('active')
            $(this).next()
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).next().children('li.active').index()).addClass('active');
        } else {
            $(this).next().children('li').eq(0)
                .addClass('active').siblings().removeClass('active')
            $(this).next()
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).next().children('li.active').index()).addClass('active');
        }
    })

    $('.search-container.brands input').on('input', function () {
        let temp = $(this).val()
        if (temp) {
            $('.container.brands-page-container .brands-section .brand-item').each(function () {
                if ($(this).attr('data-search').toLowerCase().indexOf(temp.toLowerCase()) > -1) {
                    $(this).removeClass('d-none')
                } else {
                    $(this).addClass('d-none')
                }
            })
        } else {
            $('.container.brands-page-container .brands-section .brand-item').each(function () {
                $(this).removeClass('d-none')
            })
        }
    })
    $('.search-container.brands .search-btn-brands').on('click', function () {
        let input = $(this).prev(),
            temp = input.val()
        if (temp) {
            $('.container.brands-page-container .brands-section .brand-item').each(function () {
                if ($(this).attr('data-search').toLowerCase().indexOf(temp.toLowerCase()) > -1) {
                    $(this).removeClass('d-none')
                } else {
                    $(this).addClass('d-none')
                }
            })
        } else {
            $('.container.brands-page-container .brands-section .brand-item').each(function () {
                $(this).removeClass('d-none')
            })
        }
    })

    $('.search-container.reviews input').on('input', function () {
        let temp = $(this).val(),
            name,
            text

        if (temp) {
            $('.reviews-item').each(function () {
                name = $(this).children('.blovkkkkkkk').find('.name-review')
                text = $(this).children('.blovkkkkkkk').find('.review-text p')

                if (name.text().toLowerCase().indexOf(temp.toLowerCase()) > -1) {
                    $(this).removeClass('d-none')
                    name.each(function () {
                        if ($(this).text().toLowerCase().indexOf(temp.toLowerCase()) > -1) {
                            $(this).parents('.review-item').removeClass('d-none')
                        } else {
                            $(this).parents('.review-item').addClass('d-none')
                        }
                    })
                } else {
                    if (text.text().toLowerCase().indexOf(temp.toLowerCase()) > -1) {
                        $(this).removeClass('d-none')
                        text.each(function () {
                            if ($(this).text().toLowerCase().indexOf(temp.toLowerCase()) > -1) {
                                $(this).parents('.review-item').removeClass('d-none')
                            } else {
                                $(this).parents('.review-item').addClass('d-none')
                            }
                        })
                    } else {
                        $(this).addClass('d-none')
                    }
                }

            })
        } else {
            $('.container.brands-page-container .brands-section .brand-item').each(function () {
                $(this).removeClass('d-none')
            })
        }
    })
    $('.search-container.brands .search-btn-brands').on('click', function () {
        let temp = $(this).val(),
            name,
            text

        if (temp) {
            $('.reviews-item').each(function () {
                name = $(this).children('.blovkkkkkkk').find('.name-review')
                text = $(this).children('.blovkkkkkkk').find('.review-text p')

                if (name.text().toLowerCase().indexOf(temp.toLowerCase()) > -1) {
                    $(this).removeClass('d-none')
                    name.each(function () {
                        if ($(this).text().toLowerCase().indexOf(temp.toLowerCase()) > -1) {
                            $(this).parents('.review-item').removeClass('d-none')
                        } else {
                            $(this).parents('.review-item').addClass('d-none')
                        }
                    })
                } else {
                    if (text.text().toLowerCase().indexOf(temp.toLowerCase()) > -1) {
                        $(this).removeClass('d-none')
                        text.each(function () {
                            if ($(this).text().toLowerCase().indexOf(temp.toLowerCase()) > -1) {
                                $(this).parents('.review-item').removeClass('d-none')
                            } else {
                                $(this).parents('.review-item').addClass('d-none')
                            }
                        })
                    } else {
                        $(this).addClass('d-none')
                    }
                }

            })
        } else {
            $('.container.brands-page-container .brands-section .brand-item').each(function () {
                $(this).removeClass('d-none')
            })
        }
    })

    //calendar
    $('.calendar-btn-pc').on('click', function () {
        $('.small-calendar').removeClass('active').addClass('hidden')
        $('.big-calendar').removeClass('hidden').addClass('active')
    })

    $('.close-calendar').on('click', function () {
        $('.big-calendar').removeClass('active').addClass('hidden')
        $('.small-calendar').removeClass('hidden').addClass('active')
    })

//    modals

    function dNoneModal() {
        $('.modal-content.main-modal').addClass('__d-none-modal')
        $('.modal-content.coupon').addClass('__d-none-modal')
        $('.job-opening-success-modal').addClass('__d-none-modal')
        $('.job-opening-modal-body').addClass('__d-none-modal')
        $('.add-review-modal-body').addClass('__d-none-modal')
        $('.review-success-modal').addClass('__d-none-modal')
        $('.coupon-success-modal').addClass('__d-none-modal')
        // $('.calendarModal').addClass('__d-none-modal')
    }

    $('._coupon-500').on('click', function () {
        dNoneModal()
        $('.modal-content.coupon').removeClass('__d-none-modal')
        $('#mainModal').modal('show')
    })

    $('.job-openings-modal-btn').on('click', function () {
        let elements_modal = {
            title: $('#mainModalLabel')
        }
        dNoneModal()
        $('.modal-content.main-modal').removeClass('__d-none-modal')
        $('.job-opening-modal-body').removeClass('__d-none-modal')
        elements_modal.title.html('ПРОДАВЕЦ-КОНСУЛЬТАНТ “МЕГАХЕНД”')
        $('#mainModal').modal('show')
    })

    $('.add-review-btn').on('click', function () {
        dNoneModal()
        $('.modal-content.main-modal').removeClass('__d-none-modal')
        // $('.modal-content.main-modal .modal-header').addClass('__d-none-modal')
        $('.add-review-modal-body').removeClass('__d-none-modal')
        $('#mainModal').modal('show')
    })

    $('.modal-calendar').on('click', function () {
        $('#calendarModal').modal('show')
    })

    //

    $('.mobile-dropdown-trigger').click(() => {
        if ($('.mobile-sub-dropdown').hasClass('active')) {
            $('.mobile-sub-dropdown-trigger').removeClass('active')
            $('.mobile-sub-dropdown').removeClass('active')
        }

        $('.mobile-dropdown-trigger').toggleClass('active')
        $('.mobile-dropdown').toggleClass('active')
    })

    $('.mobile-sub-dropdown-trigger').click(() => {
        $('.mobile-sub-dropdown').toggleClass('active')
        $('.mobile-sub-dropdown-trigger').toggleClass('active')
    })

    $('.mobile-calendar-triger-section').click(() => {
        $('.calendar-slide').toggleClass('slide')
    })

    function setPhotoDefault() {
        let default_url = $($('.img-review-item')[0]).children().attr('src')
        $('.current-review-photo').css({'background-image': `url('${default_url}')`})
    }

    setPhotoDefault()
    $('.img-review-item').on('click', function () {
        let current_url = $(this).children().attr('src')
        $(this).parent().prev().css({'background-image': `url('${current_url}')`})
    })

    $('.old-fabrics-btn').click(() => {
        let top = $('.about-page-mailing').offset().top * 0.5
        $(window).scrollTop(top)
        $('.form-custom-input.name').focus()
    })


})