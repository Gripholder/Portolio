console.log("connected")

$(".hire").click(function() {
  var offset = 20;

$('html, body').animate({
    scrollTop: $("#fifthPage").offset().top + offset
}, 2000);
})

$(".getStarted").click(function() {
  $(".form").append("<p>hello</p>")
})
