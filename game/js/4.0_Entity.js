/* *************************
 * "CLASS": Entity
 * *************************/

function Entity(x, y, width, height){

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	
	this.sprite;
	this.speed;
	
	this.update = function(dt){
	}
	
	this.render = function(){
		renderEntity(this);
	}

	return this;
}
 