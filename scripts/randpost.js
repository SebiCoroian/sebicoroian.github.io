
function rnd()
{
var items = Array('https://facebook.com','https://google.com','https://twitter.com');

var item = items[Math.floor(Math.random()*items.length)];

document.getElementById('link').href=item;
}