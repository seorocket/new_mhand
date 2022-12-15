new Swiper('.swiper-sale-calendar', {
    navigation: {
        prevEl: '.prev-sale-arrow',
        nextEl: '.next-sale-arrow',
    },
})
new Swiper('.swiper-sale-big-calendar', {
    navigation: {
        prevEl: '.slider-arrows-prev.big',
        nextEl: '.slider-arrows-next.big',
    },
})
new Swiper('.stock-page-swiper', {
    navigation: {
        prevEl: '.slider-arrows-prev.stocks',
        nextEl: '.slider-arrows-next.stocks',
    },
})
new Swiper('.shops-swiper', {
    navigation: {
        prevEl: '.prev-shops-calendar-arrow',
        nextEl: '.next-shops-calendar-arrow',
    },
})
new Swiper('.stock-catalog-swiper-women', {
    slidesPerView: 1,
    observe:true,
    observeParents:true,
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
        1000:{
            spaceBetween: 30,
            slidesPerView: 3
        },
        1400:{
            spaceBetween: 30,
            slidesPerView: 4
        }
    }
})
new Swiper('.stock-catalog-swiper-man', {
    slidesPerView: 1,
    spaceBetween: 30,
    observe:true,
    observeParents:true,
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
        1000:{
            spaceBetween: 30,
            slidesPerView: 3
        },
        1400:{
            spaceBetween: 30,
            slidesPerView: 4
        }
    }
})
new Swiper('.stock-catalog-swiper-child', {
    slidesPerView: 1,
    observe:true,
    observeParents:true,
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
        1000:{
            spaceBetween: 30,
            slidesPerView: 3
        },
        1400:{
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
        1000:{
            slidesPerView: 3
        },
        1400:{
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
    slidesPerView: 2,
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
        1400:{
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

