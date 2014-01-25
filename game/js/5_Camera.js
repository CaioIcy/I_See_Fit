/* *************************
 * "CLASS": Camera
 * *************************/
 
function Camera(x, y){

	Entity.call(this,x,y);
	
	this.update = function(dt){
		if(player_direction == 'left'){
			//LEFT END OF SCENARY
			scenary.x += player.vx * dt * 2;
			if(scenary.x <= 0){
				scenary.x = 0;
			}
			if(player.x <= RIGHT_CAMERA_PIN){
				player.x = RIGHT_CAMERA_PIN;
			}
		}
		else if(player_direction == 'right'){
			//RIGHT END OF SCENARY
			scenary.x += player.vx * dt * 2;
			if(scenary.x >= (2000 - canvas.width)){
				scenary.x = 2000 - canvas.width;
			}
			if(player.x >= LEFT_CAMERA_PIN){
				player.x = LEFT_CAMERA_PIN;
			}
		}
	};

	return this;
}

var camera = new Camera(0,0);