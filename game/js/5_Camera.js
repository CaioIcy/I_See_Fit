/* *************************
 * "CLASS": Camera
 * *************************/
 
function Camera(x, y){

	Entity.call(this,x,y);
	
	this.update = function(dt){
		if(player.x>=600){
			camera.x += player.x-600;
		}
	};

	return this;
}

camera = new Camera(0,0);