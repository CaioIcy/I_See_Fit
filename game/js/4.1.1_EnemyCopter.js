/* *************************
 * "CLASS": EnemyCopter
 * *************************/

function EnemyCopter(x, y, range){

	Entity.call(this,x,y);
	this.sprite = enemycopter_sprite_left;
	this.speed = 177;
	this.range = range;
	
	this.updateMovement = function(dt){
		if(Math.abs(this.x-player.x) < this.range){
			var xToFollow = player.x - this.x;
			var yToFollow = player.y - this.y;
			var hypotenuse = Math.sqrt( (xToFollow*xToFollow)+(yToFollow*yToFollow) );
			
			hypotenuse = (hypotenuse==0) ? 1 : hypotenuse;
			xToFollow /= hypotenuse;
			yToFollow /= hypotenuse;
			
			this.x += xToFollow * dt * this.speed;
			this.y += yToFollow * dt * this.speed;
		}
	};
	
	//Update
	this.update = function(dt){
	
		if(this.x - player.x < 0){
			this.sprite = enemycopter_sprite_left;
		}
		else{
			this.sprite = enemycopter_sprite_right;
		}
	
		this.sprite.update(dt);
		this.updateMovement(dt);
	};
	
	this.destroy = function(){
		entities.splice(entities.indexOf(this), 1);
	};
	
	return this;
}

function createEnemy(xpos,ypos,range){
	var x = xpos*SPRITE_SIZE;
	var y = (ypos*SPRITE_SIZE) + 64;
	var position = xpos*7 + ypos;
	entities[position] = new EnemyCopter(x,y,range);
}