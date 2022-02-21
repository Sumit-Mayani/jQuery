// var sumit = $.noConflict(); //you can create your own variable to store $ value

// $ is nothing but its a jQuery;
// $ = jQuery;

// you can also write
// jQuery.noConflict(); or $.noConflict();


$.noConflict();

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

  // ------- fade effects  -----------------

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

  //-------------- slide effects ------------------

  // slideUp();
  // slideDown();
  // SlideToggle();

  // ----------------- animate -------------------

  //$('.para').animate({
  //opacity: 0.6,
  //height: '150px',
  //width: '100px',
  //}, 2000); // you can also set fast and slow in timer area
  // you can also set animation in qeue
  // $('.para').animate({ opacity: 0.3 },1000);
  // $('.para').animate({ width: "200px" },2000);
  // stop();
  // you can also using stop() method to stop effect or animation

  //----------- insert html in jquery  ---------------------

  // 1. text();
  // 2. html();
  // 3. val();

  // $('.para').text("hello ");
  // $('.para').html("hello world");

  // $('#txt').val('this value change in form only') // you can not use html() and text() in form

  //--------------- you can remove element -----------------
  // 1. remove();

  // $('.para').remove();

  //--------------- empty text -------------------
  // 1. empty();

  // $('#txt').empty();


  //-------------------- add class  -----------------
  // 1. addClass();
  // 2. removeClass();

  // $('.para').addClass('class1');

  // $('.para').removeClass('class1');

  //--------------------- add css ------------------

  // $('.para').css({'background-color': "red","color":"white"})

  //--------- last but not least AJAX --------------

  // 1. get();
  // 2. post();

  //var data1 = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";

  //$('.btn').on('click', function () {
    // $.get(data1, function (data, status) {
    //   alert("data : " + data);
    //   alert("status : " + status);
    // });


    // $.post(data1,
    // {
    //   name: "Donald Duck",
    //   city: "Duckburg"
    // },
    // function(data, status){
    //   alert("Data: " + data + "\nStatus: " + status);
    // });
  //});

  //-------important---------------

  // The noConflict() method releases the hold on the $ shortcut identifier, so that other scripts can use it.
  //$.noConflict();


});
