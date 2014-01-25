
function Player(x,y,width,height){

	Entity.call(this,x,y,width,height);
	
	this.render = function(){
		
		d.fillStyle = "black";
		d.fillRect(player.x,player.y,player.width,player.height);
		
	}
	
	this.update = function(dt) {
		if(pressedKeys[VK_LEFT]){
			this.x=this.x-1;
		}
		else if(pressedKeys[VK_RIGHT]){
			this.x=this.x+1;
		}
	}
	
}

player = new Player(50, canvas.height - 40, 40, 40);