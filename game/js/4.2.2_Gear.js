/* *************************
 * "CLASS": Gear
 * *************************/
 
function Gear(x,y){
	Entity.call(this,x,y);
		
	this.sprite = gear_sprite;
	
	this.update = function(dt){
		this.sprite.update(dt);
	};
	
	this.render = function(){
		renderEntity(this);
	};
	
	this.destroy = function(){
		entities.splice(entities.indexOf(this), 1);
	};

	return this;
}

function createGear(xpos,ypos){
	var x = xpos*SPRITE_SIZE;
	var y = (ypos*SPRITE_SIZE) + 64;
	//var position = xpos*7 + ypos;
	entities[entities.length] = new Gear(x,y);
}
