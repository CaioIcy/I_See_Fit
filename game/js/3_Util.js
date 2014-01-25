/* *************************
 * Several useful functions
 * *************************/

function randomize(limit){
	return Math.floor(Math.random()*limit)+1;
}

// A cross-browser requestAnimationFrame
// See https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
var requestAnimFrame = (function(){
    return window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function detectCollision(reference, target){
	var collided = NOT_COLLIDING;
	if(reference.x + reference.sprite.width >= target.x && (reference.y + reference.sprite.height)>= target.y ){
		if(reference.x <= (target.x + target.sprite.width) && reference.y <= (target.y + target.sprite.height)){
			collided = whereCollision(reference, target);
		}
	}
	return collided;
}

function whereCollision(A, B){

	var AcenterX = A.x+(A.sprite.width/2);
	var AcenterY = A.y+(A.sprite.height/2);;
	var BcenterX = B.x+(A.sprite.width/2);;
	var BcenterY = B.y+(A.sprite.height/2);;
	var w = 0.5 * (A.sprite.width + B.sprite.width);
	var h = 0.5 * (A.sprite.height+ B.sprite.height);
	var dx = AcenterX - BcenterX;
	var dy = AcenterY - BcenterY;

	if (Math.abs(dx) <= w && Math.abs(dy) <= h){
		/* collision! */
		var wy = w * dy;
		var hx = h * dx;

		if (wy > hx){
			if (wy > -hx)
				/* collision at the top */
				return FROM_UP;
			else
				/* on the left */
				return FROM_LEFT;
		}
		else{
			if (wy > -hx)
				/* on the right */
				return FROM_RIGHT;
			else
				/* at the bottom */
				return FROM_DOWN;
		}
	}
}

function refreshPage(){
	location.reload(true);
}

function renderEntity(entity){
	d.save();
	d.translate(entity.x, entity.y);
	entity.sprite.render(d);
	d.restore();
}

function renderAll(listOfEntities) {
    for(i = 0; i< listOfEntities.length; i++){
		var entity = listOfEntities[i];
		if(entity){
			entity.render();
		}
	}
}

function updateAll(listOfEntities, dt) {
    for(i = 0; i< listOfEntities.length; i++){
		var entity = listOfEntities[i];
		if(dt==null || dt == undefined){
			entity.update();
		}
		else{
			entity.update(dt);
		}
	}
}

function applyGravity(obj){
	if(obj.midAir){
		var gravity = 15/40;
		obj.vy += gravity;
		if( (obj.y + obj.sprite.height) > FLOOR){
			obj.vy = 0;
			obj.y = FLOOR - obj.sprite.height;
			obj.midAir = false;
		}
	}	
}

function renderHUD(){
	d.fillStyle = "red";
	d.fillRect(0,0,canvas.width,88);

	daux.clearRect(0, 0, canvas.width, canvas.height);
	
	if(paused){
		daux.font = "32px Arial";
		daux.fillText(" Paused! ", auxcanvas.width/2 - 60,auxcanvas.height/2);
		daux.font = "10px Arial";
	}
	else{
		//don't render "Paused!"
	}
	
	//mouse position
	mouse.render();
	
	//Game Time
	daux.fillText(gameTime.toFixed(2), 5, auxcanvas.height-15);
	
}
