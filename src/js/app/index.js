var W = $(".list li").outerWidth(true)
var len = $(".list li").length
$(".list").css("width", W * len + "px")

var myscroll = new IScroll(".scroll-box", {
    scrollX: true,
    scrollY: false
})