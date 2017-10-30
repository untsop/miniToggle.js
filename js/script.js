$(".colors span").click(function(){
  color = $(this).attr("class");
  $(".demo .minitoggle").removeAttr("class").addClass(color);
});