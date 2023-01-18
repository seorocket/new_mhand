// валидация форм на сайте
$(document).ready(function () {
    let ajax_data = {
            name: '',
            phone: '',
            type: '',
            email: '',
            city: '',
            friend_1: '',
            friend_city_1: '',
            friend_2: '',
            friend_city_2: '',
        },
        inputs = {
            name: '',
            phone: '',
            type: '',
            email: '',
            city: '',
            friend_1: '',
            friend_city_1: '',
            friend_2: '',
            friend_city_2: '',
            citizenship: '',
            criminal: '',
            health_restrictions: '',
            box_office: '',
            birthday: '',
            dignities: '',
            disadvantages: '',
            why_me: '',
            review_text: '',
        },
        form_types = {
            coupon_300: 'coupon-300',
            coupon_500: 'coupon-500',
            job_openings: 'job-openings',
            review: 'review',
            advertising: 'cooperation-advertising',
            old_fabric: 'old-fabric',
            about: 'about',
            mailing: 'mailing',
        }

    function validationData(data) {
        if (data.type == form_types.coupon_300) {
            for (let item in data) {
                if (item == 'name') {
                    if (data[item].val() == '') {
                        data[item].addClass('error-input')
                    } else {
                        data[item].removeClass('error-input')

                    }
                } else if (item == 'city') {
                    if (data[item].val() == '') {
                        $(data[item]).parent().next().find('.select2-selection').addClass('error-input')
                    } else {
                        $(data[item]).parent().next().find('.select2-selection').removeClass('error-input')
                    }
                } else if (item == 'phone') {
                    if (data[item].val() == '' || data[item].val().length != 17) {
                        data[item].addClass('error-input')
                    } else {
                        data[item].removeClass('error-input')

                    }
                }
            }
        } else if (data.type == form_types.coupon_500) {
            for (let item in data) {
                if (item == 'name') {
                    if (data[item].val() == '') {
                        data[item].addClass('error-input')
                    } else {
                        data[item].removeClass('error-input')

                    }
                } else if (item == 'city') {
                    for (let i = 0; i < data[item].length; i++) {
                        if ($(data[item][i]).val() == '') {
                            $(data[item][i]).parent().next().find('.select2-selection').addClass('error-input')
                        } else {
                            $(data[item][i]).parent().next().find('.select2-selection').removeClass('error-input')
                        }
                    }
                } else if (item == 'phone') {
                    for (let i = 0; i < data[item].length; i++) {
                        if ($(data[item][i]).val() == '' || $(data[item][i]).val().length != 17) {
                            $(data[item][i]).addClass('error-input')
                        } else {
                            $(data[item][i]).removeClass('error-input')
                        }
                    }
                }
            }
        } else if (data.type == form_types.job_openings) {
            for (let item in data) {
                if (item == 'name') {
                    if (data[item].val() == '') {
                        data[item].addClass('error-input')
                    } else {
                        data[item].removeClass('error-input')

                    }
                } else if (item == 'birthday') {
                    if (data[item].val() == '') {
                        data[item].addClass('error-input')
                    } else {
                        data[item].removeClass('error-input')
                    }

                } else if (item == 'phone') {
                    for (let i = 0; i < data[item].length; i++) {
                        if ($(data[item][i]).val() == '' || $(data[item][i]).val().length != 17) {
                            $(data[item][i]).addClass('error-input')
                        } else {
                            $(data[item][i]).removeClass('error-input')
                        }
                    }
                }
            }
        } else if (data.type == form_types.review) {
            for (let item in data) {
                if (item == 'name') {
                    if (data[item].val() == '') {
                        data[item].addClass('error-input')
                    } else {
                        data[item].removeClass('error-input')
                    }
                } else if (item == 'email') {
                    if (data[item].val() == '') {
                        data[item].addClass('error-input')
                    } else {
                        data[item].removeClass('error-input')

                    }
                } else if (item == 'review_text') {
                    if (data[item].val() == '') {
                        data[item].addClass('error-input')
                    } else {
                        data[item].removeClass('error-input')

                    }
                }
            }
        } else if (data.type == form_types.advertising || data.type == form_types.about || data.type == form_types.mailing) {
            for (let item in data) {
                if (item == 'name') {
                    if (data[item].val() == '') {
                        data[item].addClass('error-input')
                    } else {
                        data[item].removeClass('error-input')
                    }
                } else if (item == 'email') {
                    if (data[item].val() == '') {
                        data[item].addClass('error-input')
                    } else {
                        data[item].removeClass('error-input')

                    }
                }
            }
        } else if (data.type == form_types.advertising || data.type == form_types.old_fabric) {
            for (let item in data) {
                if (item == 'name') {
                    if (data[item].val() == '') {
                        data[item].addClass('error-input')
                    } else {
                        data[item].removeClass('error-input')
                    }
                } else if (item == 'phone') {
                    if (data[item].val() == '' || data[item].val().length != 17) {
                        data[item].addClass('error-input')
                    } else {
                        data[item].removeClass('error-input')
                    }
                }
            }
        }

        if ($('.error-input').length == 0) {
            if (data.type == form_types.coupon_300 || data.type == form_types.coupon_500) {
                $('#mainModal').modal('hide')
                $('.modal-content.main-modal').removeClass('__d-none-modal')
                $('.coupon-success-modal').removeClass('__d-none-modal')
                $('#successModal').modal('show')
            } else if (data.type == form_types.job_openings) {
                $('#mainModal').modal('hide')
                $('.job-opening-success-modal').removeClass('__d-none-modal')
                $('#successModal').modal('show')
            } else if (data.type == form_types.review) {
                $('#mainModal').modal('hide')
                $('.review-success-modal').removeClass('__d-none-modal')
                $('#successModal').modal('show')
            }
        }
    }

    $('.validation-btn').on('click', function () {
        inputs.type = $(this).parents('.modal-form').find('[type=hidden]').attr('name')
        inputs.name = $(this).parents('.modal-form').find('.required.name')

        console.log('test validation ' + inputs.type)
        if (inputs.type == form_types.coupon_300) {
            inputs.phone = $(this).parents('.modal-form').find('.required.phone')
            inputs.city = $(this).parents('.modal-form').find('.select-city-coupon').find(':selected')
        } else if (inputs.type == form_types.coupon_500) {
            inputs.phone = $(this).parents('.modal-form').find('.required.phone')
            inputs.city = $(this).parents('.modal-form').find('.select-city-coupon').find(':selected')

            inputs.friend_1 = $(this).parents('.modal-form').find('.required.phone.phone-friend-1')
            inputs.friend_city_1 = $(this).parents('.modal-form').find('.select-city-coupon.select-city-coupon-friend-1').find(':selected')

            inputs.friend_2 = $(this).parents('.modal-form').find('.required.phone')
            inputs.friend_city_2 = $(this).parents('.modal-form').find('.select-city-coupon.select-city-coupon-friend-2').find(':selected')
        } else if (inputs.type == form_types.job_openings) {
            inputs.phone = $(this).parents('.modal-form').find('.required.phone')
            inputs.birthday = $(this).parents('.modal-form').find('.required.birthday')
            inputs.citizenship = $('.job-opening-selected-inputs.citizenship .focused').val()
            inputs.criminal = $('.job-opening-selected-inputs.criminal .focused').val()
            inputs.health_restrictions = $('.job-opening-selected-inputs.health_restrictions .focused').val()
            inputs.box_office = $('.job-opening-selected-inputs.box_office [name=box-office]:checked').val()
            inputs.dignities = $('textarea[name=achievements]').val()
            inputs.disadvantages = $('textarea[name=disadvantages]').val()
            inputs.why_me = $('textarea[name=why-are-we]').val()
        } else if (inputs.type == form_types.review) {
            inputs.email = $(this).parents('.modal-form').find('.required.email')
            inputs.review_text = $(this).parents('.modal-form').find('.required.review-text')
        } else if (inputs.type == form_types.advertising || inputs.type == form_types.advertising || inputs.type == form_types.about || inputs.type == form_types.mailing) {
            inputs.email = $(this).parents('.modal-form').find('.required.email')
        } else if (inputs.type == form_types.old_fabric) {
            inputs.phone = $(this).parents('.modal-form').find('.required.phone')
        }

        console.log(inputs)
        validationData(inputs)
    })

    $('.citizenship-input').on('input', function () {
        if ($(this).val() != '') {
            $('.job-opening-selected-inputs.citizenship #citizenship').prop('checked', false)
            $('.job-opening-selected-inputs.citizenship #citizenship').removeClass('focused')
            $(this).addClass('focused')
        } else {
            $('.job-opening-selected-inputs.citizenship #citizenship').prop('checked', true)
            $('.job-opening-selected-inputs.citizenship #citizenship').addClass('focused')
            $(this).removeClass('focused')
        }
    })

    $('.criminal-input').on('input', function () {
        if ($(this).val() != '') {
            $('.job-opening-selected-inputs.criminal #criminal').prop('checked', false)
            $('.job-opening-selected-inputs.criminal #criminal').removeClass('focused')
            $(this).addClass('focused')
        } else {
            $('.job-opening-selected-inputs.criminal #criminal').prop('checked', true)
            $('.job-opening-selected-inputs.criminal #criminal').addClass('focused')
            $(this).removeClass('focused')
        }
    })
    $('.disability-input').on('input', function () {
        if ($(this).val() != '') {
            $('.job-opening-selected-inputs.health_restrictions #health_restrictions').prop('checked', false)
            $('.job-opening-selected-inputs.health_restrictions #health_restrictions').removeClass('focused')
            $(this).addClass('focused')
        } else {
            $('.job-opening-selected-inputs.health_restrictions #health_restrictions').prop('checked', true)
            $('.job-opening-selected-inputs.health_restrictions #health_restrictions').addClass('focused')
            $(this).removeClass('focused')
        }
    })

//    ajax
})