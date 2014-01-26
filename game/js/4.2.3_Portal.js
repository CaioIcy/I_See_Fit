/* *************************
 * "CLASS": Portal
 * *************************/

function Portal(x,y){
	
	Entity.call(this,x,y);
	this.sprite = portal_closed_sprite;
	
	this.update = function(dt){
		this.sprite.update(dt);
		
		if(player.gearsCollected == 0){
			this.sprite = portal_closed_sprite;
		}
		else if(player.gearsCollected == 1){
			this.sprite = portal_onegear_sprite;
		}
		else if(player.gearsCollected == 2){
			this.sprite = portal_twogear_sprite;
		}
		else if(player.gearsCollected == 3){
			this.sprite = portal_open_sprite;
		}
		
	};
	
	return this;
}

function createPortal(xpos,ypos){
	var x = xpos*SPRITE_SIZE;
	var y = (ypos*SPRITE_SIZE) + 64;
	var position = xpos*7 + ypos;
	entities[position] = new Portal(x,y);
}