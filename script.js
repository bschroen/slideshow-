var $ = function(id){
	return document.getElementById(id);
}

var timer;
var currentSlide = 0;
var image = new Image();

var images = ["images/pug.jpg" , "images/abully.jpg" , "images/basset.jpg" , "images/corg.jpg" , "images/golden.jpg" , "images/rott.jpg" , "images/shephard.jpg" , "images/pyrenees.jpg" , "images/huskies.jpg" , "images/greyhawk.jpg"];
var titles = ["Pug Puppy" , "American Bulldog" , "Basset Hound Puppies" , "Corgie Puppies" , "Puppy Golden Retievers" , "Baby Rottweilers" , "German Shephards" , "Pyrenees" , "Huskies" , "Greyhawk puppies"];
var captions = ["Pug Puppy" , "American Bulldog" , "Basset Hound Puppies" , "Corgie Puppies" , "Puppy Golden Retievers" , "Baby Rottweilers" , "German Shephards" , "Pyrenees" , "Huskies" , "Greyhawk puppies"];

var count=images.length;

var preload = function()
{
	for(var i=0; i< count; i++)
	{
		image.src = images[i];
		images.push(image);
	}
}


//changing the play / pause 
var slidecontrol = function ()
{
	var path=$("control").src;
	var testState = new RegExp("play");
	if(testState.test(path))
	{
		$("control").src = "images/pause.png";
		displayImage();
	}
	else
	{
		$("control").src = "images/play.png";
		clearTimeout(timer);
	}
}

var displayImage = function()
{
	if(currentSlide > 10)
	{
		currentSlide = 0;
	}
	$("main_image").src = images[currentSlide];
	$("title").innerHTML = titles[currentSlide];
	$("caption").innerHTML = captions[currentSlide];

	currentSlide++;
	timer = setTimeout(displayImage, 5000);
}


window.onload = function()
{
	preload();
}