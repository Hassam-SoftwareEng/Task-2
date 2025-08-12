$(document).ready(function () {
  var owl = $(".owl-carousel");

  owl.owlCarousel({
    items: 1,
    loop: true,
    dots: true, // from your second script
    responsive: {
      576: {
        items: 2,
      },
      992: {
        items: 2,
      },
      993: {
        items: 3,
      },
    },
  });

  $(".next-btn").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(".prev-btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});
