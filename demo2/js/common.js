/**
 * 途中からスライドダウンするグローバルナビの動きを設定する
 */
var setGlobalnaviThin = function() {
  var gnav_thin = $('.globalnavi-thin');
  var gnav_orig = $('.globalnavi-original');
  var change_line = gnav_orig.height() + gnav_orig.offset().top + 100; // オリジナルの下端に、100pxの余裕を追加
  $(window).scroll(function () {
    var winTop = $(this).scrollTop();
    if (winTop > change_line) {
      gnav_thin.slideDown(250);
    } else {
      gnav_thin.slideUp(200);
    }
  });
};
/**
 * ページ読み込み後に実行する
 */
$(function() {
  setGlobalnaviThin();
});