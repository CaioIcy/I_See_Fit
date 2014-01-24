/* *************************
 * "CLASS": Keyboard
 * *************************/

function Keyboard(){

	this.updateKeyInput = function(dt){	
	
	};
	
	this.checkPause = function(){
		//PAUSE
		if(pressedKeys[VK_ENTER]){
			if(paused){
				alert("paused = false");
				paused = false;
			}
			else{
				alert("paused = true");
				paused = true;
			}
		}
		else{
		
		}
	};
	
}

function keyPressed(e) {
	if(!e){
		var e = window.onkeydown;
	}
	e=e||event;
	pressedKeys[e.keyCode] = true;
};

function keyReleased(e){
	if(!e){
		var e = window.onkeyup;
	}
	e=e||event;
	pressedKeys[e.keyCode] = false;
};

window.addEventListener('keydown', keyPressed, false);
window.addEventListener('keyup', keyReleased, false);

var keyboard = new Keyboard();
