/* *************************
 * "CLASS": Box
 * *************************/

var boxes = [];
 
function Box(x, y, mutant){

	Entity.call(this,x,y);
	
	this.mutant = mutant;	
	this.sprite = new Sprite('res/box.png', [0, 0], [40,40] , 12, [0]);

	
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
		boxes.splice(boxes.indexOf(this), 1);
	};

	return this;
}

function createBox(x,y,mutant){
	boxes[boxes.length] = new Box(x,y,mutant);
}