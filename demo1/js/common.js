/**
 * 途中からスライドダウンするグローバルナビの動きを設定する
 */
var setGlobalnaviThin = function() {
  var direction = null;
  var gnav_thin = $('.globalnavi-thin');
  var gnav_orig = $('.globalnavi-original');
  var change_line = gnav_orig.height() + gnav_orig.offset().top + 100; // オリジナルの下端に、100pxの余裕を追加
  $(window).scroll(function () {
    var winTop = $(this).scrollTop();
    if (winTop > change_line) {
      if (direction !== 1) {
        slideDownGlobalnavi(gnav_thin);
      }
      direction = 1;
    } else {
      if (direction !== 0) {
        slideUpGlobalnavi(gnav_thin);
      }
      direction = 0;
    }
  });
};
/**
 * グローバルナビをスライドアップした後、非表示にする
 */
var slideUpGlobalnavi = function(gnav_thin) {
  var h = gnav_thin.height();
  gnav_thin
    .stop()
    .animate({top: '-' + h + 'px'}, 200, function() {
      $(this).hide();
    });
};
/**
 * グローバルナビを表示した後、スライドダウンする
 */
var slideDownGlobalnavi = function(gnav_thin) {
  gnav_thin
    .show()
    .stop()
    .animate({top: '0px'}, 250);
};
/**
 * ページ読み込み後に実行する
 */
$(function() {
  setGlobalnaviThin();
});