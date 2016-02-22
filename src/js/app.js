var app = {};

$(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.0,
      isTouch           = Modernizr.touch;

  if (isTouch) { $('.slideLeftOnScroll').addClass('animated'); }

  $window.on('scroll', slideLeftOnScroll);

  function slideLeftOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.0;

    // Showed...

    $(".slideLeftOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){

            $this.addClass('animated ' + $this.data('animation'));
            $this.addClass('form-statement');

          }, parseInt($this.data('timeout'),10));
        } else {

          $this.addClass('animated ' + $this.data('animation'));
          $this.addClass('form-statement');

        }
      }

    });


    // Hidden...
   $(".slideLeftOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {

        $(this).removeClass('animated slideInLeft ');
        $this.removeClass('form-statement');
      }
    });
  }

  slideLeftOnScroll();
});
var app = {};

$(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.0,
      isTouch           = Modernizr.touch;

  if (isTouch) { $('.slideRightOnScroll').addClass('animated'); }

  $window.on('scroll', slideRightOnScroll);

  function slideRightOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.0;

    // Showed...

    $(".slideRightOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){

            $this.addClass('animated ' + $this.data('animation'));
            $this.addClass('headshot2-container');

          }, parseInt($this.data('timeout'),10));
        } else {

          $this.addClass('animated ' + $this.data('animation'));
          $this.addClass('headshot2-container');

        }
      }

    });


    // Hidden...
   $(".slideRightOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {

        $(this).removeClass('animated slideInRight ');
        $this.removeClass('headshot2-container');
      }
    });
  }

  slideRightOnScroll();
});


$(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      win_height_scrollUp= $window.height() *1.75,
      isTouch           = Modernizr.touch;

  if (isTouch) { $('.revealOnScroll').addClass('animated'); }

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...

    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){

            $this.addClass('animated ' + $this.data('animation'));
            $this.addClass('quotes');

          }, parseInt($this.data('timeout'),10));
        } else {

          $this.addClass('animated ' + $this.data('animation'));
          $this.addClass('quotes');

        }
      }

    });


    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_scrollUp < offsetTop) {

        $(this).removeClass('animated bounceInDown ');
        $this.removeClass('quotes');
      }
    });
  }

  revealOnScroll();
});
