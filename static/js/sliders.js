let now = new Date(),
    day = 2
const main_calendar = new Swiper('.swiper-sale-calendar', {
    initialSlide: day - 1,
    loop: false,
    navigation: {
        prevEl: '.prev-sale-main-arrow',
        nextEl: '.next-sale-main-arrow',
    }

})
const main_calendar_mobile = new Swiper('.swiper-sale-calendar-mobile', {
    initialSlide: day - 1,
    loop: false,
    navigation: {
        prevEl: '.prev-sale-main-arrow_mobile',
        nextEl: '.next-sale-main-arrow_mobile',
    }

})
new Swiper('.swiper-sale-big-calendar', {
    navigation: {
        prevEl: '.big-calendar-main-arrow-prev',
        nextEl: '.big-calendar-main-arrow-next',
    },
})
new Swiper('.stock-page-swiper', {
    navigation: {
        prevEl: '.stock-page-arrow-prev',
        nextEl: '.stock-page-arrow-next',
    },
})
new Swiper('.shops-swiper', {
    navigation: {
        prevEl: '.prev-shops-calendar-arrow',
        nextEl: '.next-shops-calendar-arrow',
    },
})
const stock_catalog_swiper_womennew = new Swiper('.stock-catalog-swiper-women', {
    slidesPerView: 1,
    observe: true,
    observeParents: true,
    setWrapperSize: true,
    navigation: {
        // prevEl: '.prev-shops-calendar-arrow',
        nextEl: '.next-stock-slider-women-arrow',
    },
    scrollbar: {
        el: '.swiper-scrollbar-women-stock',
        draggable: true,
    },
    breakpoints: {
        768: {
            spaceBetween: 30,
            slidesPerView: 2
        },
        1000: {
            spaceBetween: 30,
            slidesPerView: 3
        },
        1400: {
            spaceBetween: 30,
            slidesPerView: 4
        }
    }
})
const stock_catalog_swiper_man = new Swiper('.stock-catalog-swiper-man', {

    slidesPerView: 1,
    spaceBetween: 30,
    observe: true,
    observeParents: true,
    setWrapperSize: true,
    navigation: {
        // prevEl: '.prev-shops-calendar-arrow',
        nextEl: '.next-stock-slider-man-arrow',
    },
    scrollbar: {
        el: '.swiper-scrollbar-man-stock',
        draggable: true,
    },
    breakpoints: {
        768: {
            spaceBetween: 30,
            slidesPerView: 2
        },
        1000: {
            spaceBetween: 30,
            slidesPerView: 3
        },
        1400: {
            spaceBetween: 30,
            slidesPerView: 4
        }
    }
})
const stock_catalog_swiper_child = new Swiper('.stock-catalog-swiper-child', {

    slidesPerView: 1,
    observe: true,
    observeParents: true,
    setWrapperSize: true,
    navigation: {
        // prevEl: '.prev-shops-calendar-arrow',
        nextEl: '.next-stock-slider-child-arrow',
    },
    scrollbar: {
        el: '.swiper-scrollbar-child-stock',
        draggable: true,
    },
    breakpoints: {
        768: {
            spaceBetween: 30,
            slidesPerView: 2
        },
        1000: {
            spaceBetween: 30,
            slidesPerView: 3
        },
        1400: {
            spaceBetween: 30,
            slidesPerView: 4
        }
    }
})
new Swiper('.all-news-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    observe: true,
    observeParents: true,
    setWrapperSize: true,
    navigation: {
        // prevEl: '.prev-shops-calendar-arrow',
        nextEl: '.next-news-slider-arrow',
    },
    scrollbar: {
        el: '.swiper-scrollbar-news',
        draggable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1000: {
            slidesPerView: 3
        },
        1400: {
            slidesPerView: 4
        }
    }
})
new Swiper('.blog-content-slider', {
    slidesPerView: 1,
    observe: true,
    observeParents: true,
    setWrapperSize: true,
    navigation: {
        // prevEl: '.prev-shops-calendar-arrow',
        nextEl: '.next-blog-slider-arrow',
    },
    scrollbar: {
        el: '.swiper-scrollbar-blog',
        draggable: true,
    }
})
new Swiper('.brand-swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    observe: true,
    observeParents: true,
    setWrapperSize: true,
    navigation: {
        prevEl: '.prev-brand-arrow',
        nextEl: '.next-brand-arrow',
    },
    scrollbar: {
        el: '.swiper-scrollbar-brand',
        draggable: true,
    },
    breakpoints: {
        768: {
            spaceBetween: 30,
            slidesPerView: 3
        },
        1400: {
            spaceBetween: 30,
            slidesPerView: 4
        }
    }
})
new Swiper('.guarantees-swiper', {
    slidesPerView: 1,
    observe: true,
    observeParents: true,
    setWrapperSize: true,
    navigation: {
        nextEl: '.next-guarantees-slider',
    },
    scrollbar: {
        el: '.swiper-scrollbar-guarantees',
        draggable: true,
    }
})
new Swiper('.swiper-city-filter', {
    slidesPerView: 7,
    slidesPerGroup: 7,
    observe: true,
    observeParents: true,
    setWrapperSize: true,
    navigation: {
        nextEl: '.filter-arrow',
    },
    breakpoints: {
        768: {
            slidesPerView: 12,
            slidesPerGroup: 12,
        }
    }
})


function get_slide_desctop(slide_index) {
    let slides = $('.desktop .swiper-slide.swiper-sale-item'),
        cards = $('.sale-item'),
        cards_mobile = $('.sale-item.mobile'),
        week_obj = {
            понедельник: 'Пн',
            вторник: 'Вт',
            среда: 'Ср',
            четверг: 'Чт',
            пятница: 'Пт',
            суббота: 'Сб',
            воскресенье: 'Вс'
        }
    console.log(slides)
    for (let i = 0; i < 4; i++) {
        let date = $(slides[slide_index + i]).find('.date').text().trim()[0],
            week = week_obj[$(slides[slide_index + i]).find('.week-day').text().toLowerCase()],
            sale = $(slides[slide_index + i]).find('.sale').text()
        if (main_calendar.activeIndex <= slides.length - 4) {
            $(cards[i]).find('.date_card').html(date)
            $(cards[i]).find('.week_card').html(week)
            $(cards[i]).find('.count_sale_card').html(sale)
            $(cards_mobile[i]).find('.date_card').html(date)
            $(cards_mobile[i]).find('.week_card').html(week)
            $(cards_mobile[i]).find('.count_sale_card').html(sale)
        }
    }
    if (main_calendar.activeIndex > slides.length - 4) {
        $(cards[4 - (slides.length - main_calendar.activeIndex)]).next().removeClass('selected')
        $(cards[4 - (slides.length - main_calendar.activeIndex)]).prev().removeClass('selected')
        $(cards[4 - (slides.length - main_calendar.activeIndex)]).addClass('selected')
        $(cards_mobile[4 - (slides.length - main_calendar.activeIndex)]).next().removeClass('selected')
        $(cards_mobile[4 - (slides.length - main_calendar.activeIndex)]).prev().removeClass('selected')
        $(cards_mobile[4 - (slides.length - main_calendar.activeIndex)]).addClass('selected')
    } else if (main_calendar.activeIndex <= slides.length - 4) {
        $(cards[0]).next().removeClass('selected')
        $(cards[0]).addClass('selected')
        $(cards_mobile[0]).next().removeClass('selected')
        $(cards_mobile[0]).addClass('selected')

    }

}

function get_slide_mobile(slide_index) {
    let slides = $('.swiper-sale-calendar-mobile .swiper-slide.swiper-sale-item'),
        cards = $('.sale-item.mobile'),
        week_obj = {
            понедельник: 'Пн',
            вторник: 'Вт',
            среда: 'Ср',
            четверг: 'Чт',
            пятница: 'Пт',
            суббота: 'Сб',
            воскресенье: 'Вс'
        }
    for (let i = 0; i < 4; i++) {
        let date = $(slides[slide_index + i]).find('.date').text().trim()[0],
            week = week_obj[$(slides[slide_index + i]).find('.week-day').text().toLowerCase()],
            sale = $(slides[slide_index + i]).find('.sale').text()
        if (main_calendar_mobile.activeIndex <= slides.length - 4) {
            $(cards[i]).find('.date_card').html(date)
            $(cards[i]).find('.week_card').html(week)
            $(cards[i]).find('.count_sale_card').html(sale)
        }
    }
    if (main_calendar_mobile.activeIndex > slides.length - 4) {
        $(cards[4 - (slides.length - main_calendar_mobile.activeIndex)]).next().removeClass('selected')
        $(cards[4 - (slides.length - main_calendar_mobile.activeIndex)]).prev().removeClass('selected')
        $(cards[4 - (slides.length - main_calendar_mobile.activeIndex)]).addClass('selected')
    } else if (main_calendar.activeIndex <= slides.length - 4) {
        $(cards[0]).next().removeClass('selected')
        $(cards[0]).addClass('selected')

    }

}

get_slide_desctop(main_calendar.activeIndex)
get_slide_mobile(main_calendar_mobile.activeIndex)

main_calendar.on('slideChange', function () {
    if (main_calendar.activeIndex <= $('.swiper-sale-calendar .swiper-slide.swiper-sale-item').length) {
        get_slide_desctop(main_calendar.activeIndex)
    }
})
main_calendar_mobile.on('slideChange', function () {
    if (main_calendar_mobile.activeIndex <= $('.swiper-sale-calendar-mobile .swiper-slide.swiper-sale-item').length) {
        get_slide_mobile(main_calendar_mobile.activeIndex)
    }
})

let index_slide_women = false
$('.next-stock-slider-women-arrow.stock-slider-arrow').click(function () {

    if (index_slide_women) {
        index_slide_women = false
        stock_catalog_swiper_womennew.slideTo(0)
    }

    if ($(this).hasClass('swiper-button-disabled')) {
        index_slide_women = true
    }
})

let index_slide_man = false
$('.next-stock-slider-man-arrow.stock-slider-arrow').click(function () {

    if (index_slide_man) {
        index_slide_man = false
        stock_catalog_swiper_man.slideTo(0)
    }

    if ($(this).hasClass('swiper-button-disabled')) {
        index_slide_man = true
    }
})

let index_slide_child = false
$('.next-stock-slider-child-arrow.stock-slider-arrow').click(function () {

    if (index_slide_child) {
        index_slide_child = false
        stock_catalog_swiper_child.slideTo(0)
    }

    if ($(this).hasClass('swiper-button-disabled')) {
        index_slide_child = true
    }
})



