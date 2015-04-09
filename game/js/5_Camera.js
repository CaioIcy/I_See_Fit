
/* *************************
 * "CLASS": Camera
 * *************************/
 
function Camera(x, y){

	Entity.call(this,x,y);
	
	this.update = function(dt){
		if(player_direction == 'left'){
			//LEFT END OF SCENARY
			scenary.x += player.vx * dt * 2;

			for(i=0; i<entities.length; i++){
				var entity = entities[i];
				if(entity != 0){
					entity.x -= player.vx * dt * 2;
				}
			}
			
			if(scenary.x <= 0){
				scenary.x = 0;
			}
			if(player.x <= LEFT_CAMERA_PIN){
				player.x = LEFT_CAMERA_PIN;
			}
		}
		else if(player_direction == 'right'){
			//RIGHT END OF SCENARY
			scenary.x += player.vx * dt * 2;

			for(i=0; i<entities.length; i++){
				var entity = entities[i];
				if(entity != 0){
					entity.x -= player.vx * dt * 2;
				}
			}
			if(scenary.x >= (BACKGROUND_WIDTH - canvas.width)){
				scenary.x = BACKGROUND_WIDTH - canvas.width;
			}
			if(player.x >= RIGHT_CAMERA_PIN && player.x < RIGHT_CAMERA_PIN+5 &&scenary.x != BACKGROUND_WIDTH-canvas.width){
				player.x = RIGHT_CAMERA_PIN;
			}
			if(player.x >= canvas.width - player.sprite.width){
				player.x = canvas.width - player.sprite.width;
			}
		}
	};

	return this;
}

var camera = new Camera(0,0);
