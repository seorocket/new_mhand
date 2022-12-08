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
    slidesPerView: 4,
    spaceBetween: 30,
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
})
new Swiper('.stock-catalog-swiper-man', {
    slidesPerView: 4,
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
})
new Swiper('.stock-catalog-swiper-child', {
    slidesPerView: 4,
    spaceBetween: 30,
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
})
new Swiper('.brand-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
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
})

