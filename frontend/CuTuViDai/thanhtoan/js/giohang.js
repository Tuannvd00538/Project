$('.thongtin').fadeOut();

$('#check1').click(function() {
   if(this.checked) {
        $('.thongtin').fadeOut();
        $('#giaoma').fadeIn();
   }
});

$('#check2').click(function() {
   if(this.checked) {
        $('.thongtin').fadeOut();
        $('#thecao').fadeIn();
   }
});

$('#check3').click(function() {
   if(this.checked) {
        $('.thongtin').fadeOut();
        $('#atm').fadeIn();
   }
});

$('#check4').click(function() {
   if(this.checked) {
        $('.thongtin').fadeOut();
        $('#visa').fadeIn();
   }
});

$('#check5').click(function() {
   if(this.checked) {
        $('.thongtin').fadeOut();
        $('#chuyenkhoan').fadeIn();
   }
});