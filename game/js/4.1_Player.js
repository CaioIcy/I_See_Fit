
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

var player = new Player(50, canvas.height - 40, 40, 40);