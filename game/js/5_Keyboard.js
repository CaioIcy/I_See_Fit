/* *************************
 * "CLASS": Keyboard
 * *************************/

function Keyboard(){

	this.updateKeyInput = function(dt){	
	
		//PLAYER MOVEMENT
		if(pressedKeys[VK_LEFT]){
			player.vx -= 15;
		}
		else if(pressedKeys[VK_RIGHT]){
			player.vx += 15;
        }
		
		//PLAYER JUMP
		if(pressedKeys[VK_UP] || pressedKeys[VK_W]){
			if(!player.midAir){
				player.vy = -15;
				player.midAir = true;
			}
		}
		
	};
	
}

function keyPressed(e) {
	if(!e){
		var e = window.onkeydown;
	}
	e=e||event;
	pressedKeys[e.keyCode] = true;
	
	if(pressedKeys[VK_ENTER]){
			if(paused){
				paused = false;
			}
			else{
				paused = true;
			}
		}
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
