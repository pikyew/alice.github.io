// Page Scroll (smooth scroll to sections)
$(".page-scroll").click(function (e) {
  e.preventDefault();
  const target = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(target).offset().top - 64
  }, 1000, "swing");
});

// ScrollSpy (highlight nav while scrolling)
$("body").scrollspy({
  target: ".navbar",
  offset: 65
});

// Page Loader (fade out when loaded)
$(window).on("load", function () {
  $(".page-loader").fadeOut("slow");
});

// WOW.js (trigger scroll animations)
new WOW().init();

// Portfolio Filter with Isotope
$(window).on("load", function () {
  const $portfolio = $("#portfolio");

  $(".portfolio_menu ul li").click(function () {
    $(".portfolio_menu ul li").removeClass("active_prot_menu");
    $(this).addClass("active_prot_menu");
  });

  $portfolio.isotope({
    itemSelector: ".col-sm-4",
    layoutMode: "fitRows"
  });

  $("#filters a").click(function (e) {
    e.preventDefault();
    const filter = $(this).data("filter");
    $portfolio.isotope({ filter: filter });
  });
});

// Scroll to Top Button (show/hide + click scroll)
$(window).scroll(function () {
  const isVisible = $(this).scrollTop() > 200;
  $(".return-to-top, .scrolltotop").toggle(isVisible);
});

$(".return-to-top, .scrolltotop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000, "swing");
});

// Close Mobile Menu on Link Click
$(".navbar-collapse").on("click", "a:not(.dropdown-toggle)", function () {
  $(".navbar-collapse").collapse("hide");
});
