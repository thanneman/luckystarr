$(document).ready(function () {
  // Auto set footer copyright date
  const date = new Date();
  const year = date.getFullYear();
  $('.year').text(year);
});

$('.nav-link').click(function (e) {
  var headerHeight = $('#nav').height();
  var jump = $(this).attr('href');
  var new_position = $(jump).offset();
  $('html, body')
    .stop()
    .animate({ scrollTop: new_position.top - headerHeight }, 500);
  e.preventDefault();
});
