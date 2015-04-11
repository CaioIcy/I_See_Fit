/* *************************
 * "CLASS": Keyboard
 * *************************/

function Keyboard(){

	this.updateKeyInput = function(dt){	
	
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
					jump.pause();
					jump.play();
					if(player.collidingFrom == FROM_UP && player.collidingWith.sprite == boxgear_circle_sprite || player.collidingWith.sprite == box_circle_sprite){
						player.vy = JUMPSPEED * Math.sqrt(Math.PI) * 0.78 * dt;
					}
					else{
						player.vy = JUMPSPEED * dt;
					}
					player.midAir = true;
					FLOOR = canvas.height -24;
				}
			}
			//SQUARE -- PUSH
			else if(player.currentType == PLAYER_IS_SQUARE && player.collidingWith != false && player.collidingWith.sprite != metal_box){
				
				var boxesColliding = NOT_COLLIDING;
				for(i = 0; i<entities.length; i++){
					 boxesColliding = detectCollision(player.lastCollision, entities[i]);
					 if(entities[i] instanceof Portal) continue;
					 
					 if(player.lastCollision.x == entities[i].x && player.lastCollision.y == entities[i].y){
					 
					 }
					 else if(boxesColliding != NOT_COLLIDING){
						//player.lastCollision.x = entities[i].x + entities[i].sprite.width + 2;
						if(player.collidingFrom == FROM_LEFT){
							/*if((pressedKeys[VK_LEFT] || pressedKeys[VK_A])){
								player.lastCollision.x = entities[i].x + entities[i].sprite.width;
							}
							else*/ if((pressedKeys[VK_RIGHT] || pressedKeys[VK_D])){
								player.lastCollision.x = entities[i].x- player.lastCollision.sprite.width - 2;
							}
						}
						else if(player.collidingFrom == FROM_RIGHT){
							if((pressedKeys[VK_LEFT] || pressedKeys[VK_A])){
								player.lastCollision.x = entities[i].x + entities[i].sprite.width + 2;
							}
							/*else if((pressedKeys[VK_RIGHT] || pressedKeys[VK_D])){
								player.lastCollision.x = entities[i].x - entities[i].sprite.width;
							}*/
						}
						break;
					}
				}
			
				if(player.collidingFrom == FROM_LEFT){
					if((pressedKeys[VK_LEFT] || pressedKeys[VK_A]) && boxesColliding == NOT_COLLIDING){
						player.collidingWith.x = player.x + player.sprite.width;
					}
					else if((pressedKeys[VK_RIGHT] || pressedKeys[VK_D])&& boxesColliding == NOT_COLLIDING){
						player.collidingWith.x = player.x+player.sprite.width + 2;
					}
				}
				else if(player.collidingFrom == FROM_RIGHT){
					if((pressedKeys[VK_LEFT] || pressedKeys[VK_A])&& boxesColliding == NOT_COLLIDING){
						player.collidingWith.x = player.x - player.collidingWith.sprite.width - 2;
					}
					else if((pressedKeys[VK_RIGHT] || pressedKeys[VK_D])&& boxesColliding == NOT_COLLIDING){
						player.collidingWith.x = player.x - player.sprite.width;
					}
				}
				
			}
			//TRIANGLE -- DESTROY
			else if(player.currentType == PLAYER_IS_TRIANGLE){
				if(player.collidingWith != false){
					if((player.collidingFrom == FROM_LEFT || player.collidingFrom == FROM_RIGHT) &&
						player.collidingWith.sprite != metal_box && player.collidingWith.sprite != box_triangle_sprite &&
						player.collidingWith.sprite != boxgear_triangle_sprite &&
						player.collidingWith.sprite != box_square_sprite &&
						player.collidingWith.sprite != boxgear_square_sprite){
						player.collidingWith.destroy();
						player.collidingWith = false;
					}
					
				}
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
