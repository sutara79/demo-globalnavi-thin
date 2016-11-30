/**
 * 途中からスライドダウンするグローバルナビの動きを設定する
 */
var setGlobalnaviThin = function() {
  var action = null;
  var gnav_thin = $('.globalnavi-thin');
  var gnav_orig = $('.globalnavi-original');
  var change_line = gnav_orig.height() + gnav_orig.offset().top + 100; // オリジナルの下端に、100pxの余裕を追加
  $(window).scroll(function () {
    var winTop = $(this).scrollTop();
    if (winTop > change_line) { // スライドダウンの動作
      if (action != 'down') { // 同じ動作は重複させない
        action = 'down';
        gnav_thin
          .show()
          .stop() // 同じ要素に対する別のイベントがあれば、ただちに中止させる
          .animate({top: '0px'}, 250);
      }
    }
    else { // スライドアップの動作
      if (action != 'up') { // 同じ動作は重複させない
        action = 'up';
        gnav_thin
          .stop() // 同じ要素に対する別のイベントがあれば、ただちに中止させる
          .animate({top: '-' + gnav_thin.height() + 'px'}, 200, function() {
            $(this).hide();
          });
      }
    }
  }).trigger('scroll');
};
/**
 * ページ読み込み後に実行する
 */
$(function() {
  setGlobalnaviThin();
});