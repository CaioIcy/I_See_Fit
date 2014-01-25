
function Player(x, y){

	Entity.call(this, x, y);
	
	this.speed = 600;
	this.vx = 0;
	this.vy = 0;
	this.currentType = PLAYER_IS_CIRCLE;
	this.midAir = false;
	
	this.collidingWith;
	this.collidingFrom;
	
	this.currentAudio = playerCircleAudio;
	
	this.currentSprites = playerCircleSprites;
	this.currentAction = IDLE;
	this.sprite = player_circle_walking;//new Sprite('res/player_circle.png', [0, 0], [SPRITE_SIZE, SPRITE_SIZE] , 12, [0,1,2,3]);
	
	this.update = function(dt) {
		this.determineCurrentAction();
	
		this.sprite = this.currentSprites[this.currentAction];
		this.sprite.update(dt);
		this.audio = this.currentAudio[this.currentAction];
		this.audio.play();
		
		if(Math.abs(this.vx)<=0.3){
			this.vx = 0;
		}
		else{
			this.vx *= FRICTION;
		}
		this.vy *= FRICTION;
		
		if(this.midAir){
			applyGravity(this);
		}
	
		this.x += this.vx * dt;
		this.y += this.vy;
	};
	
	this.checkPlayerCollisionWith = function(array){
		for(i = 0; i<array.length; i++){
			var collision = detectCollision(player, array[i]);
			if(collision != NOT_COLLIDING){
				this.collidingWith = array[i];
				if(collision == FROM_LEFT){
					this.collidingFrom = FROM_LEFT;
					this.x = array[i].x - this.sprite.width;
					this.vx = -1;
					this.lastCollision = array[i];
				}
				else if(collision == FROM_RIGHT){
					this.collidingFrom = FROM_RIGHT;
					this.x = array[i].x + array[i].sprite.width;
					this.vx = 1;
					this.lastCollision = array[i];
				}
				else if(collision == FROM_DOWN){
					this.collidingFrom = FROM_DOWN;
					this.y = array[i].y + array[i].sprite.height;
					this.vy = 0;
					this.lastCollision = array[i];
				}
				else if(collision == FROM_UP){
					this.collidingFrom = FROM_UP;
					this.y = array[i].y - this.sprite.height;
					this.vy = 0;
					this.midAir = false;
					FLOOR = array[i].y;
					this.lastCollision = array[i];
				}
			}
			else{
				//this.collidingFrom = NOT_COLLIDING;
				
				if(FLOOR != canvas.height){
					if(this.lastCollision.x > (this.x+this.sprite.width) || this.x > (this.lastCollision.x+this.lastCollision.sprite.width)){
						FLOOR = canvas.height;
					}
				}
				
				if(this.y < FLOOR - this.sprite.height){
					this.midAir = true;
				}
				
			}
		}
	};
	
	this.transform = function(type){
		if(!this.midAir){
			if(type == PLAYER_IS_CIRCLE){
				this.speed = 600;
				this.currentSprites = playerCircleSprites;
				//this.sprite = player_circle_walking;//new Sprite('res/player_circle.png', [0, 0], [SPRITE_SIZE, SPRITE_SIZE] , 12, [0,1,2,3]);
				this.currentType = PLAYER_IS_CIRCLE;
			}
			else if(type == PLAYER_IS_SQUARE){
				this.speed = 300;
				this.currentSprites = playerSquareSprites;
				//this.sprite = player_square_walking;//new Sprite('res/player_square.png', [0, 0], [this.sprite.width, this.sprite.height] , 12, [0]);
				this.currentType = PLAYER_IS_SQUARE;
			}
			else if(type == PLAYER_IS_TRIANGLE){
				this.speed = 300;
				this.currentSprites = playerTriangleSprites;
				//this.sprite = player_triangle_walking;//new Sprite('res/player_triangle.png', [0, 0], [this.sprite.width, this.sprite.height] , 12, [0]);
				this.currentType = PLAYER_IS_TRIANGLE;
			}
		}
	};
	
	this.determineCurrentAction = function(){
		//idle
		if(this.vx == 0 && this.vy == 0){
			this.currentAction = IDLE;
		}
		//walking
		else if(this.vx != 0 && !this.midAir){
			this.currentAction = WALKING;
		}
		//skill
		else if(this.vy != 0 && this.midAir){
			this.currentAction = SKILL;
		}
	};
	
}

var player = new Player(canvas.width/2, canvas.height - SPRITE_SIZE);
