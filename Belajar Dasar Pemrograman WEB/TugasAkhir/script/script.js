$.extend($.easing, {
  easeInOutCustom: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
    return (-c / 2) * (--t * (t - 2) - 1) + b;
  },
});

$(".page-scroll").on("click", function (e) {
  var stop = $(this).attr("href");

  var stopArea = $(stop);

  var offsetTop = stopArea.offset().top;

  $("body, html").animate(
    {
      scrollTop: offsetTop - 85,
    },
    1250,
    "easeInOutCustom"
  );

  e.preventDefault();
});
