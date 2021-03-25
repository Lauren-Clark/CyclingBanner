
window.onload = initBannerLink;
var theAd = 0;
var adURL = new Array("ladieswhogeek.org/lwg-blogs-fantomah-first-female-superhero/","cambriancomics.com/2018/02/26/golden-age-showcase-olga-mesmer/",
	"comicvine.gamespot.com/the-shadow/4005-28923/","syfy.com/syfywire/firsts-mandrake-the-magician-was-the-worlds-first-comic-superhero",
	"inverse.com/article/15443-zorro-was-the-first-american-cinematic-superhero-and-he-s-coming-back","comicvine.gamespot.com/the-phantom/4005-7957/");
var adImages = new Array("images/fantomah2.jpg","images/olga1.jpg","images/shadow.jpg","images/mandrake.jpg","images/zorro.jpg","images/phantom.jpg");

function initBannerLink() {
if (document.getElementById("adBanner").parentNode.tagName == "A")
{
document.getElementById("adBanner").parentNode.onclick =
newLocation;
}
rotate();
}

function newLocation() {
document.location.href = "http://www." + adURL[theAd];
return false;
}
function rotate() {
theAd++;
if (theAd == adImages.length) {
theAd = 0;
}
document.getElementById("adBanner").src = adImages[theAd];
setTimeout(rotate, 4 * 1000);
}