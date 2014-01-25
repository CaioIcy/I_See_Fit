
function Player(x,y,width,height){

	Entity.call(this,x,y,width,height);
	
	this.speed = 600;
	this.jumpSpeed = (-577);
	this.vx = 0;
	this.vy = 0;
	
	this.midAir = false;
	
	this.sprite = new Sprite('res/player.png', [0, 0], [40,40] , 12, [0]);
	
	this.update = function(dt) {
		this.vx *= FRICTION;
		this.vy *= FRICTION;
		
		if(this.midAir){
			applyGravity(this);
		}
	
		this.x += this.vx * dt;
		this.y += this.vy ;
	}
	
}

var player = new Player(50, canvas.height - 40, 40, 40);