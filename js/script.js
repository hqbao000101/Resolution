$(document).ready(function () {
  // todo: window scroll event
  window.addEventListener("scroll", function () {
    // todo: header stick
    if (window.scrollY > 50) {
      $("#header").addClass("stick");
    } else {
      $("#header").removeClass("stick");
    }

    // todo: active menu item
    if (window.scrollY >= 700) {
      $(
        "header .header__menu .menu__container .menu__right nav ul li a"
      ).removeClass("active");
      $(
        "header .header__menu .menu__container .menu__right nav ul li:nth-child(2) a"
      ).addClass("active");
    } else {
      $(
        "header .header__menu .menu__container .menu__right nav ul li a"
      ).removeClass("active");
      $(
        "header .header__menu .menu__container .menu__right nav ul li:first-child a"
      ).addClass("active");
    }
    if (window.scrollY >= 1900) {
      $(
        "header .header__menu .menu__container .menu__right nav ul li a"
      ).removeClass("active");
      $(
        "header .header__menu .menu__container .menu__right nav ul li:nth-child(3) a"
      ).addClass("active");
    }
    if (window.scrollY >= 2900) {
      $(
        "header .header__menu .menu__container .menu__right nav ul li a"
      ).removeClass("active");
      $(
        "header .header__menu .menu__container .menu__right nav ul li:nth-child(4) a"
      ).addClass("active");
    }
    if (window.scrollY >= 5600) {
      $(
        "header .header__menu .menu__container .menu__right nav ul li a"
      ).removeClass("active");
      $(
        "header .header__menu .menu__container .menu__right nav ul li:nth-child(5) a"
      ).addClass("active");
    }
    if (window.scrollY >= 6700) {
      $(
        "header .header__menu .menu__container .menu__right nav ul li a"
      ).removeClass("active");
      $(
        "header .header__menu .menu__container .menu__right nav ul li:nth-child(6) a"
      ).addClass("active");
    }

    // todo: btn active - visible
    if (this.window.scrollY > 250) {
      $("#top").addClass("btn-active");
    } else {
      $("#top").removeClass("btn-active");
    }
  });

  // todo: click event
  // todo: toggle menu visible
  $("#header .header__content .content__left .content__menu").click(
    function () {
      $("#header .header__menu").addClass("header__menu--visible");
      $("#body__overlay").addClass("body__overlay--visible");
    }
  );

  // todo: close menu
  $("header .header__menu .menu__container .menu__right .menu__close").click(
    function () {
      $("#header .header__menu").removeClass("header__menu--visible");
      $("#body__overlay").removeClass("body__overlay--visible");
    }
  );
  $("#body__overlay").click(
    function () {
      $("#header .header__menu").removeClass("header__menu--visible");
      $("#body__overlay").removeClass("body__overlay--visible");
    }
  );

  // todo: click menu item
  $("header .header__menu .menu__container .menu__right nav ul li a").click(
    function () {
      $("#header .header__menu").removeClass("header__menu--visible");
      $("#body__overlay").removeClass("body__overlay--visible");
      $(
        "header .header__menu .menu__container .menu__right nav ul li a"
      ).removeClass("active");
      $(this).addClass("active");
    }
  );
});
