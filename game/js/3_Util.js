/* *************************
 * Several useful functions
 * *************************/

function randomize(limit){
	return Math.floor(Math.random()*limit)+1;
}

// A cross-browser requestAnimationFrame
// See https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
var requestAnimFrame = (function(){
    return window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function refreshPage(){
	location.reload(true);
}

function renderHUD(){
	daux.clearRect(0, 0, canvas.width, canvas.height);
	
	if(paused){
		daux.font = "32px Arial";
		daux.fillText(" Paused! ", auxcanvas.width/2 - 60,auxcanvas.height/2);
		daux.font = "10px Arial";
	}
	else{
		//don't render "Paused!"
	}
	
	//mouse position
	mouse.render();
	
	//Game Time
	daux.fillText(gameTime.toFixed(2), 5, auxcanvas.height-15);
	
}
