$(document).ready(function() {
  $('#btn1').click(function() {
    $("#p1, #p2").hide(1000);
  });
});
$(document).ready(function() {
  $('#btn2').click(function() {
    $("#p2").show(1000);
  });
});
$(document).ready(function() {
  $('#btn3').click(function() {
    $("#p3").toggle(1000);
  });
});
$(document).ready(function() {
  $('#btn4').click(function() {
    $(".b1, .b2").fadeOut();
  });
});
$(document).ready(function() {
  $('#btn5').click(function() {
    $(".b2").fadeIn();
  });
});
$(document).ready(function() {
  $('#btn6').click(function() {
    $(".b3").toggle();
  });
});
$(document).ready(function() {
  $('#btn7').click(function() {
    $(".b4").fadeTo("slow", 0.2);
  });
});
$(document).ready(function() {
  $('#btn8').click(function() {
    $(".b5, .b6").slideUp("fast");
  });
});
$(document).ready(function() {
  $('#btn9').click(function() {
    $(".b6").slideDown("slow");
  });
});
$(document).ready(function() {
  $('#btn10').click(function() {
    $(".b7").slideToggle(2000);
  });
});
$(document).ready(function() {
  $("#btn11").click(function() {
    $("#ani1").animate({left : '100px'});
  });
});

$(document).ready(function() {
  $("#btn12").click(function() {
    $("#ani2").animate({left : '100px', width : '+=30px'});
  });
});

$(document).ready(function() {
  $("#btn13").click(function() {
    var div = $("#ani3");
    div.animate({height : "300px"}, 1000);
    div.animate({width : "300px"}, 1000);
    div.animate({height : "100px"}, 1000);
    div.animate({width : "100px", left : "230px"}, 1000);
  });
});
$(document).ready(function() {
  $("#btn14").click(function() {
  $("#ani3").stop();
  });
});
$(document).ready(function() {
  $("#btn15").click(function() {
  $("#ani4").css({"background" : "yellow", "width" : "300px"}).slideUp(1000)
  .slideDown(1000);
  });
});
$(document).ready(function() {
  $("#btn16").click(function() {
    $("#text1").text("hello world");
  });
});
$(document).ready(function() {
  $("#btn17").click(function() {
    alert($("#text1").html());
  });
});
$(document).ready(function() {
  $("#btn18").click(function() {
    alert($("#link1").attr('href'));
  });
});
$(document).ready(function() {
  $("#btn19").click(function() {
    alert($("#link1").attr({
      "href" : 'https://www.youtube.com',
      "title" : "samar"
    }));
  });
});
$(document).ready(function() {
  $('#btn20').click(function() {
    $("#link1").attr('href', function(i, origText) {
      return origText + "/model.html";
    });
  });
});