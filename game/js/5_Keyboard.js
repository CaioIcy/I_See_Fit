/* *************************
 * "CLASS": Keyboard
 * *************************/

function Keyboard(){

	this.updateKeyInput = function(dt){	
		//alert(dt);
	
		//PLAYER MOVEMENT
		if(pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
			player.vx -= player.speed * dt;
		}
		else if(pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
			player.vx += player.speed * dt;
        }
		
		//PLAYER SKILL
		if(pressedKeys[VK_S]){
			//CIRCLE -- JUMP
			if(player.currentType == PLAYER_IS_CIRCLE){
				if(!player.midAir){
					player.vy = (-630) * dt;
					player.midAir = true;
				}
			}
			//SQUARE -- PUSH
			else if(player.currentType == PLAYER_IS_SQUARE && player.collidingWith != false){
				if(player.collidingFrom == FROM_LEFT){
					if(pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
						player.collidingWith.x = player.x + player.sprite.width;
					}
					else if(pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
						player.collidingWith.x = player.x+player.sprite.width + 2;
					}
				}
				else if(player.collidingFrom == FROM_RIGHT){
					if(pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
						player.collidingWith.x = player.x - player.collidingWith.sprite.width - 2;
					}
					else if(pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
						player.collidingWith.x = player.x - player.sprite.width;
					}
				}
				
			}
			//TRIANGLE -- DESTROY
			else if(player.currentType == PLAYER_IS_TRIANGLE){
				
			}
		}
		else{
			player.collidingWith = false;
		}
		
		//TRANSFORM TO CIRCLE
		if(pressedKeys[VK_Q]){
			player.transform(PLAYER_IS_CIRCLE);
		}
		//TRANSFORM TO SQUARE
		if(pressedKeys[VK_W]){
			player.transform(PLAYER_IS_SQUARE);
		}
		//TRANSFORM TO TRIANGLE
		if(pressedKeys[VK_E]){
			player.transform(PLAYER_IS_TRIANGLE);
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
