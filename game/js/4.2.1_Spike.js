/* *************************
 * "CLASS": Spike
 * *************************/

var START_SPIKE = 55;
var MIDDLE_SPIKE = 56;
var END_SPIKE = 57;
 
function Spike(x,y,mutant,sprite,type){
	// type = 0, 1, 2

	Entity.call(this,x,y);
	
	this.mutant = mutant;	
	this.sprite = sprite;
	this.type = type;
	
	this.update = function(dt){
		this.sprite.update(dt);
		if(this.mutant){
			if(player.currentType == PLAYER_IS_SQUARE){
				if(this.type == START_SPIKE){
					this.sprite = spikegear_square_start;
				}
				else if(this.type == MIDDLE_SPIKE){
					this.sprite = spikegear_square;
				}
				else if(this.type == END_SPIKE){
					this.sprite = spikegear_square_end;
				}
			}
			else if(player.currentType == PLAYER_IS_CIRCLE){
				if(this.type == START_SPIKE){
					this.sprite = spikegear_circle_start;
				}
				else if(this.type == MIDDLE_SPIKE){
					this.sprite = spikegear_circle;
				}
				else if(this.type == END_SPIKE){
					this.sprite = spikegear_circle_end;
				}
			}
			else if(player.currentType == PLAYER_IS_TRIANGLE){
				if(this.type == START_SPIKE){
					this.sprite = spikegear_triangle_start;
				}
				else if(this.type == MIDDLE_SPIKE){
					this.sprite = spikegear_triangle;
				}
				else if(this.type == END_SPIKE){
					this.sprite = spikegear_triangle_end;
				}
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

function createSpike(xpos,ypos,mutant,sprite,type){
	var x = xpos*SPRITE_SIZE;
	var y = (ypos*SPRITE_SIZE) + 64;
	var position = xpos*7 + ypos;
	entities[position] = new Spike(x,y,mutant,sprite,type);
}