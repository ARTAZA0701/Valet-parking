canvas = document.getElementbyId ('myCanvss')

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
  background_imgTag = new Image ();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;

  greencar_imgTag = new Image ();
  greeencar_imgTag.onload = uploadgreencar;
  greencar_imgTag.src = greencar_image;
  
} 

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0 , 0 , canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x , greencar_y , greencar.height, greencar.width);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	window.addEventListener("keydown",my_keydown);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >= 0);
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, x = " + greencar_x +  " | y = " +greencar_y ); 
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	
}

function left()
{
	//Define function to move the car left side   
}

function right()
{
	//Define function to move the car right side
}
 