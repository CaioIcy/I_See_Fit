
/* *************************
 * "CLASS": Scenary
 * *************************/

function Scenary(x, y){

	Entity.call(this, x, y);
	this.sprite = new Image();
	this.sprite.src = "res/background.png";

	
	this.update = function(dt){
	};
	
	this.render = function(){
		//img, sx, sy, sw, sh, x, y, w, h
		d.drawImage(this.sprite, this.x, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
		d.drawImage(giantFloor, this.x, 0, canvas.width, canvas.height, 0, canvas.height-24, canvas.width, canvas.height);
	};

	return this;
}

var scenary = new Scenary(0, 0);
