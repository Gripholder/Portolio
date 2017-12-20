
// $(document).ready(arrowAnimate)

$(".hire").click(scrollToFifthPage)
$(".learn").click(scrollToSecondPage)

console.log($("#arrow").css("width"))

var arrow = $("#arrow")
var pos = 0

var arrowDown = setInterval(arrowDownFunction, 30)
// var arrowUp

function arrowDownFunction() {
  if(pos < 20){
    arrow.css("top", pos + "px")
    pos++
  } else {
    clearInterval(arrowDown)
    arrowUp = setInterval(arrowUpFunction, 30)
  }
}

var arrowUp = setInterval(arrowUp, 30)

function arrowUpFunction() {
  if(0 <= pos && pos <= 20) {
    arrow.css("top", pos + "px")
    pos--
  } else {
    clearInterval(arrowUp)
    arrowDown = setInterval(arrowDownFunction, 30)
  }
}

function scrollToFifthPage() {
  var offset = 20;

  $("html, body").animate(
    {
      scrollTop: $("#fifthPage").offset().top + offset
    },
    2000
  );
};

function scrollToSecondPage() {
  var offset = 20;

  $("html, body").animate(
    {
      scrollTop: $("#secondPage").offset().top + offset
    },
    1000
  );
}
