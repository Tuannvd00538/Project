$('#themhang').click(function () {
	localStorage.setItem("cart", Math.random().toString(36).substring(7));
	location.reload();
});

$('#huyhang').click(function () {
	localStorage.removeItem("cart");
	location.reload();
})


var cart = localStorage.getItem("cart");

if (cart == null && cart == undefined){
	$('#giohangtrong').show();
	$('#giocohang').hide();
}
else {
	$('#giohangtrong').hide();
	$('#giocohang').show();
}
