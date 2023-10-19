/**
 *  URL 다루기
 */

var url = "http://www.mysite.com/user?name=둘리&email"

// 예1) 리다이렉트
// window.location.href = url;
//
// 예2) ajax 통신
// $.ajax(url)
// fetch(url, 옵션)


// 1. escape: URL 전부를 encoding 사용(x), deprecated
var url2 = escape(url);
console.log(url2);

// 2. encodeURI


// 3. encodeURIComponent

