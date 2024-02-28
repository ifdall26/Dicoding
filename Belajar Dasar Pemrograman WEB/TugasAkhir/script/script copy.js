// pada saat di klik
$(".page-scroll").on("click", function (e) {
  //ambil isi href
  var tujuan = $(this).attr("href");
  // tangkap elemen ybs
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $("html, body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 60,
    },
    0.3,
    "swing"
  );

  e.preventDefault();
});
