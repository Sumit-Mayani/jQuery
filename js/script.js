document.addEventListener("DOMContentLoaded", function () {
  //$("p").click(function () {
  // console.log("you clicked");
  // $(this).hide();
  // $("#odd").click(function () {
  //   console.log("you click on odd");
  // });
  //});

  // ------------------ selector --------------------------
  // there are three types of selector

  // 		1. element selector
  // 		2. id selector
  // 		3. class selector

  // other selectors

  //  1. universal selectors

  // $('*').click(function (){
  //     console.log("all")
  // });

  //p:first selector
  //p:last selector

  // $('p:first').click(function () {
  //     console.log("you click first p")
  // })

  //---------------  events ------------------------

  // 1) mouse event = mouseenter, mouseleave, click, dblclick;
  // 2) Keyboard event = keypress, keydown, keyup;
  // 3) form event = hover, submit, change, focus, blur;
  // 4) document/window event = load, unload, resize, scroll;

  // 1) mouse event

  // $('p').mouseenter(function () {

  //   $('#odd').hover(function () {
  //     $(this).css("background-color", "green");
  //    })
  //   console.log('you enter mouse',this)
  // })

  // ---------- on method ---------------

  //---------- single on method --------------

  // $("p:last").on("click", function () {
  //   $(".third").css({
  //     "background-color": "yellow",
  //     color: "black",
  //     padding: "5px",
  //   });
  // });

  // -------------- multiple on method handle -----------

  // $("p").on({
  //   click: function () {
  //     $("#odd").css({
  //       "background-color": "red",
  //       color: "white",
  //       padding: "5px",
  //     });
  //   },
  //   mouseleave: function () {
  //     $(".even").css({
  //       "background-color": "black",
  //       color: "white",
  //       padding: "5px",
  //     });
  //   },
  // });

  //-------- hide and show ----------------

  // $(".para").on('click', function () {
  //   $(".para").hide(1000, function () {
  //     console.log('hide ');
  //   })

  //   $(".para").show(1000, function () {
  //     console.log('show');
  //   })
  // })

  // ------------toggle-------------

  // $('.btn').on('click', function () {
  //   $('.para').hide(1000, function () {
  //     console.log("hide");
  //   });

  //   $('.para').show(1000,function () {
  //     console.log('show');
  //   });

  // });

  // ------- extra effects animation -----------------

  // fadeIn();
  // fadeOut();
  // fadeToggle();
  // fadeTo();

  // $(".btn").on("click", function () {
  //   $(".para").fadeOut(1000, function () {
  //     console.log("fade out");
  //   });

  //   $(".para").fadeIn(1000, function () {
  //     console.log("fade in");
  //   });
  // });

  
});
