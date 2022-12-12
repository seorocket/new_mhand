$(document).ready(function () {
    $(function () {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            console.log($(this).index())
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
        console.log($(this).next())
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

    $('.search-container.brands input').on('input', function() {
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

//    поиск по фио и содержимому отзыва

})