
function Player(x, y, width, height){

	Entity.call(this, x, y, width, height);
	
	this.speed = 300;
	this.vx = 0;
	this.vy = 0;
	this.currentType = PLAYER_IS_SQUARE;
	this.midAir = false;
	
	this.sprite = new Sprite('res/player_square.png', [0, 0], [width,height] , 12, [0]);
	
	this.update = function(dt) {
		this.vx *= FRICTION;
		this.vy *= FRICTION;
		
		if(this.midAir){
			applyGravity(this);
		}
	
		this.x += this.vx * dt;
		this.y += this.vy;
	}
	
	this.checkPlayerCollisionWith = function(array){
		for(i = 0; i<array.length; i++){
			var collision = detectCollision(player, array[i]);
			if(collision != NOT_COLLIDING){
				if(collision == FROM_LEFT){
					this.x = array[i].x - this.sprite.width - 1;
					this.vx = -1;
				}
				else if(collision == FROM_RIGHT){
					this.x = array[i].x + array[i].sprite.width + 1;
					this.vx = 1;
				}
				else if(collision == FROM_UP){
					this.y = array[i].y + array[i].sprite.height + 1;
					this.vy = 0;
				}
				else if(collision == FROM_DOWN){
					this.y = array[i].y - this.sprite.height - 1;
					this.vy = 0;
					this.midAir = false;
				}
			}
			else{
				if(this.y < FLOOR - this.sprite.height){
					this.midAir = true;
				}
			}
		}
	;}
	
	this.transform = function(type){
		if(!this.midAir){
			if(type == PLAYER_IS_CIRCLE){
				this.speed = 600;
				this.sprite = new Sprite('res/player_circle.png', [0, 0], [this.sprite.width, this.sprite.height] , 12, [0]);
				this.currentType = PLAYER_IS_CIRCLE;
			}
			else if(type == PLAYER_IS_SQUARE){
				this.speed = 300;
				this.sprite = new Sprite('res/player_square.png', [0, 0], [this.sprite.width, this.sprite.height] , 12, [0]);
				this.currentType = PLAYER_IS_SQUARE;
			}
			else if(type == PLAYER_IS_TRIANGLE){
				this.speed = 300;
				this.sprite = new Sprite('res/player_triangle.png', [0, 0], [this.sprite.width, this.sprite.height] , 12, [0]);
				this.currentType = PLAYER_IS_TRIANGLE;
			}
		}
	};
	
}

var player = new Player(canvas.width/2, canvas.height - 40, 40, 40);