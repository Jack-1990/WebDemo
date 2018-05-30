$(function () {
    $(".search .search_title2 .mg-l15").click(function () {
        $(".search .search_title2 .mg-l15").removeClass("current")
        $(this).addClass("current")
    })

    $(".otherContent .title .name").click(function () {
        $(".otherContent .title .name").removeClass("current")
        $(this).addClass("current")
    })
})