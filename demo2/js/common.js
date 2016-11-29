/**
 * PC向け グローバルナビのロゴだけを固定する
 */
var fixGlobalnaviForPc = function() {
  var gnav_thin = $('.globalnavi-thin');
  var gnav_orig = $('.globalnavi-original');
  var change_line = gnav_orig.height() + gnav_orig.offset().top + 100; // オリジナルの下端に、100pxの余裕を追加
  $(window).scroll(function () {
    var winTop = $(this).scrollTop();
    if (winTop > change_line) {
      gnav_thin.slideDown();
    } else {
      gnav_thin.slideUp();
    }
  });
};
/**
 * ページ読み込み後に実行する
 */
$(function() {
  fixGlobalnaviForPc();
});