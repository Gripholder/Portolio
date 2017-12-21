
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

// Animated text
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid rgba(255,255,0,1)}";
        document.body.appendChild(css);
    };
