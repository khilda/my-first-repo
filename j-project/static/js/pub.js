$(function () {
	lang(); //언어선택

})


//언어선택
function lang(){
	$(".btn-lang").click(function(){
		if (!$(this).hasClass("on")) {
			$(this).addClass("on");
		}else{
			$(this).removeClass("on");
		}
		$(".lang").toggle();
	});
}
