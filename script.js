console.log("connected");

$(".hire").click(function() {
  var offset = 20;

  $("html, body").animate(
    {
      scrollTop: $("#fifthPage").offset().top + offset
    },
    2000
  );
});

$(".getStarted").click(function() {
  let form = $(".form");

  form.css({ visibility: "visible" });
  form.animate({ height: "100%", width: "100%" });
});
