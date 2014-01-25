
function Player(x,y,width,height){

	Entity.call(this,x,y,width,height);
	
	this.vx = 0;
	this.vy = 0;
	
	this.sprite = new Sprite('res/player.png', [0, 0], [40,40] , 12, [0]);
	
	this.update = function(dt) {
		this.x += this.vx * dt;
		this.y += this.vy * dt;
	}
	
}

var player = new Player(50, canvas.height - 40, 40, 40);