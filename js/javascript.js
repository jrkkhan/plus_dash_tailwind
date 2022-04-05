 /* notifican dropdown */
function notiFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


// dropdowns
$(document).ready(function(){
  $("#expand").click(function(){
    $("#dropdown").toggle();
    $("#expandicon").css("transform", "rotate(180deg)");
  });
});



$(document).ready(function(){
  $("#sidebar-btn").click(function(){
    $("#customscroll").toggle();
     $("#sidebar").toggle();
  });
});



// dropdowns
$(document).ready(function(){
  $(".chart-drop").click(function(){
    $(".chardropscroll").toggle();
   
  });
});




// campaign drop resend list
$(document).ready(function(){
  $(".Resend-drop").click(function(){
    $(".Resend-drop-list").toggle();
   
  });
});
