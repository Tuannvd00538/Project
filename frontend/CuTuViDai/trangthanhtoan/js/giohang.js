$('.thongtin').hide();

$('#check1').click(function() {
   if(this.checked) {
        $('.thongtin').hide();
        $('#giaoma').show();
   }
});

$('#check2').click(function() {
   if(this.checked) {
        $('.thongtin').hide();
        $('#thecao').show();
   }
});

$('#check3').click(function() {
   if(this.checked) {
        $('.thongtin').hide();
        $('#atm').show();
   }
});

$('#check4').click(function() {
   if(this.checked) {
        $('.thongtin').hide();
        $('#visa').show();
   }
});

$('#check5').click(function() {
   if(this.checked) {
        $('.thongtin').hide();
        $('#chuyenkhoan').show();
   }
});