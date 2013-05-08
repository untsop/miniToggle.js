$(".colors span").click(function(){
  color = $(this).attr("class");
  $(".demo > div").removeAttr("class").addClass(color);
});