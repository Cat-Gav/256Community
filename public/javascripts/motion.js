

var $start_menu = $(".start-menu");
$start_menu.hide();

var open_start_menu = function(){
	$start_button.addClass("selected");
	$start_menu.attr("hidden", null);
	$start_menu.slideDown(100); 
	
};
var close_start_menu = function(){
	$start_button.removeClass("selected");
	$start_menu.attr("hidden", "hidden");
	$start_menu.hide();
};
var toggle_start_menu = function(){
	if($start_menu.is(":hidden")){
		open_start_menu();
	}else{
		close_start_menu();
	}
};

var $start_button = $(".start-button");
$start_button.on("pointerdown", function(){
	toggle_start_menu();
});

$("body").on("pointerdown", function(e){
	if($(e.target).closest(".start-menu, .start-button").length === 0){
		close_start_menu();
	}
});

$(window).on("keydown", function(e){
	if(e.which === 27){
		close_start_menu();
	}
});

function MobileVer() {
    return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
}

function close(element) {
element.hide()
}
let zindex = 1;
$(".win").on('mousedown', function(){
    $(this).css({"z-index" : zindex++})
})
