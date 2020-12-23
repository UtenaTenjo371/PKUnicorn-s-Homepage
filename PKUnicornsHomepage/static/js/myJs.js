  /**
   * 从 file 域获取 本地图片 url
   */
  function getFileUrl(sourceId) {
    var url;
    if (navigator.userAgent.indexOf("MSIE") >= 1) { // IE
      url = document.getElementById(sourceId).value;
    } else if (navigator.userAgent.indexOf("Firefox") > 0) { // Firefox
      url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
    } else if (navigator.userAgent.indexOf("Chrome") > 0) { // Chrome
      url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
    }
    return url;
  };
 
  /**
   * 将本地图片 显示到浏览器上
   */
  function preImg(sourceId, targetId) {
    var url = getFileUrl(sourceId);
    document.body.style.backgroundImage="url("+url+")";
  };
/**
 * 不同引擎搜索
 */
function baidu() {
  document.forms[0].action = "http://www.baidu.com/s";
  document.getElementById("option_baidu").value = document.getElementById("search_text").value;
}

function bing() {
  document.forms[0].action = "http://cn.bing.com/search";
  document.getElementById("option_bing").value = document.getElementById("search_text").value;

}

function google() {
  document.forms[0].action = "http://www.google.com/search";
  document.getElementById("option_google").value = document.getElementById("search_text").value;

}