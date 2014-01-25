/* *************************
 * "CLASS": Entity
 * *************************/

function Entity(x, y){

	this.x = x;
	this.y = y;
	
	this.sprite;
	this.speed;
	
	this.update = function(dt){
	}
	
	this.render = function(){
		renderEntity(this);
	}

	return this;
}

var numberOfEntities = (canvas.width*2/64) * ((canvas.height-88)/64);
var entities = new Array();

for(i=0;i<numberOfEntities;i++){
	entities[i] = 0;
}
