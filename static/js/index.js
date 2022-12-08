$(document).ready(function () {
    $(function () {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });

    $(".our-collection-images-item").hover(function () {
        const elemts = $('.our-collection-images-item')
        for (let i=0; i < elemts.length; i++) {
            $(elemts[i]).css('width', '65px')
        }
        $(this).css('width', '140px')
        $($(this).next()).css('width', '85px')
        $($(this).prev()).css('width', '85px')
    })

    $(".our-collection-images-item").mouseleave(function (e) {
        $(this).css('width', '65px')
    })

})