$(document).ready(function() {
  $('#reset').click(function() {
    $('.envelope').removeClass('open');
    setTimeout(function() {
      $('.envelope').addClass('open');
    }, 500);
  });
});

// setTimeout(function(){window.location.href="/html/home.html"},3000);
