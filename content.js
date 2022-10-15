var images = ["https://cdn.dribbble.com/users/465131/screenshots/6521539/i_am_the_low_background.jpg", "https://static.vecteezy.com/system/resources/thumbnails/001/233/776/small/wild-west-landscape-silhouette.jpg"];

var fonts = [
	'Times New Roman',
	'Impact',
	'Comic Sans MS', 'Garamond'
];

var randfont = fonts[Math.floor(Math.random() * fonts.length)];
var randimage = images[Math.floor(Math.random() * images.length)];



var x = document.querySelectorAll('p,li,h1,h2,h3,h4,h5,h6,div,body,input');
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.fontFamily = randfont;
		x[i].style.backgroundImage = randimage;
}



var sounds = ["https://www.myinstants.com/en/instant/wild-west-whistle-78505/?utm_source=copy&utm_medium=share", "https://www.myinstants.com/en/instant/wild-west-sound-60769/?utm_source=copy&utm_medium=share"];

var sound = new Audio(sounds[Math.floor(Math.random() * images.length)]);
sound.loop = true;
sound.play();