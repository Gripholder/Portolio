
// $(document).ready(arrowAnimate)

$(".hire").click(scrollToFifthPage)
$(".learn").click(scrollToSecondPage)

console.log($("#arrow").css("width"))

var arrow = $("#arrow")
var pos = 0

var arrowDown = setInterval(arrowDownFunction, 20)
// var arrowUp

function arrowDownFunction() {
  if(pos < 100){
    arrow.css("top", pos + "px")
    pos++
  } else {
    clearInterval(arrowDown)
    arrowUp = setInterval(arrowUpFunction, 20)
  }
}

var arrowUp = setInterval(arrowUp, 20)

function arrowUpFunction() {
  if(0 <= pos && pos <= 100) {
    arrow.css("top", pos + "px")
    pos--
  } else {
    clearInterval(arrowUp)
    arrowDown = setInterval(arrowDownFunction, 20)
  }
}

// setInterval(function () {
//   if (pos < 50){
//       arrow.css("top", pos + "px")
//       console.log(arrow.css("top"))
//       pos++
//       pos1--
//   } elseif (pos1 <= 50) {
//     arrow.css("top", pos + "px")
//     console.log(arrow.css("top"))
//     pos1++
//   }
//   // console.log(arrow)
//   // arrow = arrow + 1
//   console.log(arrow)
// }, 10)

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
