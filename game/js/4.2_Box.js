/* *************************
 * "CLASS": Box
 * *************************/

var boxes = [];
 
function Box(x, y, mutant){

	Entity.call(this,x,y);
	
	this.mutant = mutant;	
	this.sprite = new Sprite('res/box.png', [0, 0], [SPRITE_SIZE,SPRITE_SIZE] , 12, [0]);

	
	this.update = function(dt){
		if(this.mutant){
			if(player.currentType == PLAYER_IS_SQUARE){
				//this.sprite = new Sprite('res/box.png', [0, 0], [40,40] , 12, [0]);
			}
			else if(player.currentType == PLAYER_IS_CIRCLE){
				//this.sprite = new Sprite('res/box.png', [0, 0], [40,40] , 12, [0]);
			}
			else if(player.currentType == PLAYER_IS_TRIANGLE){
				// Sprite('res/box.png', [0, 0], [40,40] , 12, [0]);
			}
		}
		else{
			//don't change sprites
		}
	};
	
	this.render = function(){
		renderEntity(this);
	};
	
	this.destroy = function(){
		entities.splice(entities.indexOf(this), 1);
	};

	return this;
}

function createBox(xpos,ypos,mutant){
	var x = xpos*SPRITE_SIZE;
	var y = ypos*SPRITE_SIZE;
	var position = xpos*7 + ypos;
	entities[position] = new Box(x,y,mutant);
}