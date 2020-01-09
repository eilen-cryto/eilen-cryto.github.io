// JavaScript Document

$(window).scroll(function(){
	
if ($("#incendios").visible(true)) {
$(".uno").addClass("visible");
} else {
$(".uno").removeClass("visible");
}
	if ($("#catastrofe").visible(true)) {
$(".dos").addClass("visible");
} else {
$(".dos").removeClass("visible");
}
	
	if ($("#oposicion").visible(true)) {
$(".tres").addClass("visible");
} else {
$(".tres").removeClass("visible");
}
	
});