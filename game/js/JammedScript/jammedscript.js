// Jamming from file: 0_Global.js
/* *************************
 * Variables / Constants
 * *************************/

// Canvas/Context
var canvas = document.getElementById("canvas");
var d = canvas.getContext("2d");
var auxcanvas = document.getElementById("auxcanvas");
var daux = auxcanvas.getContext("2d");
// Auxiliary global index
var i = 0;
// Keystrokes array
var pressedKeys = [];

var gameTime = 0;
var paused = false;

var PLAYER_IS_CIRCLE = 1;
var PLAYER_IS_SQUARE = 2;
var PLAYER_IS_TRIANGLE = 3;

var FRICTION = 0.95;
var FLOOR = canvas.height;
var SQUARE_SPEED = 300;
var TRIANGLE_SPEED = 300;
var CIRCLE_SPEED = 600;

var FROM_LEFT = 1;
var FROM_RIGHT = 2;
var FROM_DOWN = 3;
var FROM_UP = 4;
var NOT_COLLIDING = 5;

var SPRITE_SIZE = 64;
var JUMPSPEED = (-830);
// Jamming from file: 1_Sprites.js
/* *************************
 * Game Images
 * *************************/

resources.load([
    'res/background.png',
	'res/player_circle.png',
	'res/player_square.png',
	'res/square_spritesheet.png',
	'res/circle_spritesheet.png',
	'res/player_triangle.png',
	'res/triangle_spritesheet.png',
	'res/box.png'
]);
resources.onReady(initialize);
 
var backgroundPattern;
var spritesize = [SPRITE_SIZE, SPRITE_SIZE];

//(url, pos, size, speed, frames, dir, once) 
var IDLE = 0;
var WALKING = 1;
var SKILL = 2;

var playerCircleSprites = new Array();
var playerSquareSprites = new Array();
var playerTriangleSprites = new Array();

var player_circle_idle = new Sprite('res/circle_spritesheet.png', [0,0], spritesize, 7, [0,1], 'horizontal', false);
var player_square_idle = new Sprite('res/square_spritesheet.png', [0,0], spritesize, 7, [0,1], 'horizontal', false);
var player_triangle_idle = new Sprite('res/triangle_spritesheet.png', [0,0], spritesize, 7, [0,1], 'horizontal', false);

var player_circle_walking = new Sprite('res/circle_spritesheet.png', [0,128], spritesize, 7, [0,1,2,3,4], 'horizontal', false);
var player_square_walking = new Sprite('res/square_spritesheet.png', [0,128], spritesize, 7, [0,1,2,3,4], 'horizontal', false);
var player_triangle_walking = new Sprite('res/triangle_spritesheet.png', [0,128], spritesize, 7, [0,1,2,3,4], 'horizontal', false);

var player_circle_skill = new Sprite('res/circle_spritesheet.png', [0,256], spritesize, 7, [0], 'horizontal', false);
var player_square_skill = new Sprite('res/square_spritesheet.png', [0,256], spritesize, 7, [0], 'horizontal', false);
var player_triangle_skill = new Sprite('res/triangle_spritesheet.png', [0,256], spritesize, 7, [0], 'horizontal', false);

playerCircleSprites[IDLE] = player_circle_idle;
playerCircleSprites[WALKING] = player_circle_walking;
playerCircleSprites[SKILL] = player_circle_skill;

playerSquareSprites[IDLE] = player_square_idle;
playerSquareSprites[WALKING] = player_square_walking;
playerSquareSprites[SKILL] = player_square_skill;

playerTriangleSprites[IDLE] = player_triangle_idle;
playerTriangleSprites[WALKING] = player_triangle_walking;
playerTriangleSprites[SKILL] = player_triangle_skill;

// Jamming from file: 2_VkValues.js
/* *************************
 * Virtual Keyboard Values
 * *************************/
 
//numbers (keyboard)
var VK_0 = 48;
var VK_1 = 49;
var VK_2 = 50;
var VK_3 = 51;
var VK_4 = 52;
var VK_5 = 53;
var VK_6 = 54;
var VK_7 = 55;
var VK_8 = 56;
var VK_9 = 57;

//numpad
var VK_NUM0 = 96;
var VK_NUM1 = 97;
var VK_NUM2 = 98;
var VK_NUM3 = 99;
var VK_NUM4 = 100;
var VK_NUM5 = 101;
var VK_NUM6 = 102;
var VK_NUM7 = 103;
var VK_NUM8 = 104;
var VK_NUM9 = 105;
var VK_NUMMULTIPLY = 106;
var VK_NUMADD = 107;
var VK_NUMSUBTRACT = 109;
var VK_NUMDECIMAL = 110;
var VK_NUMDIVIDE = 111;

//function keys
var VK_F1 = 112;
var VK_F2 = 113;
var VK_F3 = 114;
var VK_F4 = 115;
var VK_F5 = 116;
var VK_F6 = 117;
var VK_F7 = 118;
var VK_F8 = 119;
var VK_F9 = 120;
var VK_F11 = 122;
var VK_F12 = 123;

//letters
var VK_A = 65;
var VK_B = 66;
var VK_C = 67;
var VK_D = 68;
var VK_E = 69;
var VK_F = 70;
var VK_G = 71;
var VK_H = 72;
var VK_I = 73;
var VK_J = 74;
var VK_K = 75;
var VK_L = 76;
var VK_M = 77;
var VK_N = 78;
var VK_O = 79;
var VK_P = 80;
var VK_Q = 81;
var VK_R = 82;
var VK_S = 83;
var VK_T = 84;
var VK_U = 85;
var VK_V = 86;
var VK_W = 87;
var VK_X = 88;
var VK_Y = 89;
var VK_Z = 90;

//others
var VK_BACKSPACE = 8;
var VK_TAB = 9;
var VK_ENTER = 13;
var VK_SHIFT = 16;
var VK_CTRL = 17;
var VK_PAUSE = 19;
var VK_CAPSLOCK = 20;
var VK_ESC = 27;
var VK_SPACEBAR = 32;
var VK_PAGEUP = 33;
var VK_PAGEDOWN = 34;
var VK_END = 35;
var VK_HOME = 36;
var VK_LEFT = 37;
var VK_UP = 38;
var VK_RIGHT = 39;
var VK_DOWN = 40;
var VK_INSERT = 45;
var VK_DELETE = 46;
var VK_NUMLOCK = 144;
var VK_SCRLOCK = 145;
var VK_SEMICOLON_COLON = 186;
var VK_EQUALS_PLUS = 187;
var VK_COMMA = 188;
var VK_MINUS_UNDERSCORE = 189;
var VK_PERIOD = 190;
var VK_FORWARDSLASH_QUESTIONMARK = 191;
var VK_TILDE = 192;
var VK_OPENBRACKETS = 219;
var VK_BACKSLASH_PIPE = 220;
var VK_CLOSEBRACKETS = 221;
var VK_QUOTES = 222;

// Jamming from file: 3_Util.js
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
	var AcenterY = A.y+(A.sprite.height/2);
	var BcenterX = B.x+(A.sprite.width/2);
	var BcenterY = B.y+(A.sprite.height/2);
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
				return FROM_DOWN;
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
				return FROM_UP;
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
	daux.fillText(gameTime.toFixed(2) +" floor:"+ FLOOR, 5, auxcanvas.height-15);
	daux.fillText("pX: " + player.x, 600, auxcanvas.height-15);
	daux.fillText("pY+H: " + (player.y+player.sprite.height), 600, auxcanvas.height-30);
	
}

// Jamming from file: 4.0_Entity.js
/* *************************
 * "CLASS": Entity
 * *************************/

function Entity(x, y){

	this.x = x;
	this.y = y;
	
	this.sprite;
	this.speed;
	
	this.update = function(dt){
	}
	
	this.render = function(){
		renderEntity(this);
	}

	return this;
}

var numberOfEntities = (canvas.width*2/64) * ((canvas.height-88)/64);
var entities = new Array();

for(i=0;i<numberOfEntities;i++){
	entities[i]=0;
}

// Jamming from file: 4.1_Player.js

function Player(x, y){

	Entity.call(this, x, y);
	
	this.speed = 600;
	this.vx = 0;
	this.vy = 0;
	this.currentType = PLAYER_IS_CIRCLE;
	this.midAir = false;
	
	this.collidingWith;
	this.collidingFrom;
	
	this.currentSprites = playerCircleSprites;
	this.currentAction = IDLE;
	this.sprite = player_circle_walking;//new Sprite('res/player_circle.png', [0, 0], [SPRITE_SIZE, SPRITE_SIZE] , 12, [0,1,2,3]);
	
	this.update = function(dt) {
		this.determineCurrentAction();
	
		this.sprite = this.currentSprites[this.currentAction];
		this.sprite.update(dt);
		
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

// Jamming from file: 4.2_Box.js
/* *************************
 * "CLASS": Box
 * *************************/

var boxes = [];
 
function Box(x, y, mutant){

	Entity.call(this,x,y);
	
	this.mutant = mutant;	
	this.sprite = new Sprite('res/box.png', [0, 0], [SPRITE_SIZE,SPRITE_SIZE] , 12, [0]);

	
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
		entities.splice(entities.indexOf(this), 1);
	};

	return this;
}

function createBox(xpos,ypos,mutant){
	var x = xpos*SPRITE_SIZE;
	var y = (ypos*SPRITE_SIZE) + 88;
	var position = xpos*7 + ypos;
	entities[position] = new Box(x,y,mutant);
}
// Jamming from file: 5_Keyboard.js
/* *************************
 * "CLASS": Keyboard
 * *************************/

function Keyboard(){

	this.updateKeyInput = function(dt){	
		//alert(dt);
	
		//PLAYER MOVEMENT
		if(pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
			player.vx -= player.speed * dt;
		}
		else if(pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
			player.vx += player.speed * dt;
        }
		
		//PLAYER SKILL
		if(pressedKeys[VK_S]){
			//CIRCLE -- JUMP
			if(player.currentType == PLAYER_IS_CIRCLE){
				if(!player.midAir){
					player.vy = JUMPSPEED * dt;
					player.midAir = true;
					FLOOR = canvas.height;
				}
			}
			//SQUARE -- PUSH
			else if(player.currentType == PLAYER_IS_SQUARE && player.collidingWith != false){
				//alert("colliding from " + player.collidingFrom);
				if(player.collidingFrom == FROM_LEFT){
					//alert("kyop from left");
					if(pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
						player.collidingWith.x = player.x + player.sprite.width;
					}
					else if(pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
						player.collidingWith.x = player.x+player.sprite.width + 2;
					}
				}
				else if(player.collidingFrom == FROM_RIGHT){
					//alert("kyop from right");
					if(pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
						player.collidingWith.x = player.x - player.collidingWith.sprite.width - 2;
					}
					else if(pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
						player.collidingWith.x = player.x - player.sprite.width;
					}
				}
				
			}
			//TRIANGLE -- DESTROY
			else if(player.currentType == PLAYER_IS_TRIANGLE){
				if(player.collidingWith != false){
					if(player.collidingFrom == FROM_LEFT || player.collidingFrom == FROM_RIGHT){
						player.collidingWith.destroy();
						player.collidingWith = false;
					}
					
				}
			}
		}
		else{
			player.collidingWith = false;
		}
		
		//TRANSFORM TO CIRCLE
		if(pressedKeys[VK_Q]){
			player.transform(PLAYER_IS_CIRCLE);
		}
		//TRANSFORM TO SQUARE
		if(pressedKeys[VK_W]){
			player.transform(PLAYER_IS_SQUARE);
		}
		//TRANSFORM TO TRIANGLE
		if(pressedKeys[VK_E]){
			player.transform(PLAYER_IS_TRIANGLE);
		}
		
	};
	
}

function keyPressed(e) {
	if(!e){
		var e = window.onkeydown;
	}
	e=e||event;
	pressedKeys[e.keyCode] = true;
	
	if(pressedKeys[VK_ENTER]){
			if(paused){
				paused = false;
			}
			else{
				paused = true;
			}
		}
};

function keyReleased(e){
	if(!e){
		var e = window.onkeyup;
	}
	e=e||event;
	pressedKeys[e.keyCode] = false;
};

window.addEventListener('keydown', keyPressed, false);
window.addEventListener('keyup', keyReleased, false);

var keyboard = new Keyboard();

// Jamming from file: 6_Mouse.js
/* *************************
 * "CLASS": Mouse
 * *************************/
 
function Mouse() {

	this.mx = 0;
	this.my = 0;
	
	this.setXY = function(x,y){
		this.mx = x;
		this.my = y;
	};
	
	this.render = function(){
		daux.clearRect(auxcanvas.width-60, 10, 40, 40);
		daux.fillText("mX: " + this.mx, auxcanvas.width-60, 20);
		daux.fillText("mY: " + this.my, auxcanvas.width-60, 40);
	};
	
	this.update = function(){
		
	};
	
	this.mouseClick = function(){
		
	};

}

var mouse = new Mouse();

function mouseXY(e) {
	e = e||event;
	
	var el = document.querySelector(".wrapper");
	var offsetTop = el.getBoundingClientRect().top;
	var offsetLeft = el.getBoundingClientRect().left;
	
	var mouseX = e.clientX - offsetLeft;
	var mouseY = e.clientY - offsetTop;
		
	//Check mouseX boundaries
	if(mouseX <= 0){
		mouseX = 0;
	}
	else if(mouseX >= canvas.width){
		mouseX = canvas.width;
	}
	else{
		//maintain current mouseX
	}
	
	//Check mouseY boundaries
	if(mouseY <= 0){
		mouseY = 0;
	}
	else if(mouseY >= canvas.height){
		mouseY = canvas.height;
	}
	else{
		//maintain current mouseY
	}
	
	mouse.setXY(mouseX, mouseY);
}

function doMouseClick(e){
	e = e||event;
    mouse.mouseClick();
	if(e.button==2){
		return false;    
	}
}

window.addEventListener('mousemove', mouseXY, false);
window.addEventListener('mousedown', doMouseClick, false);


// Jamming from file: 7_Game.js
/* *************************
 * Main
 * *************************/

function update(dt){
		keyboard.updateKeyInput(dt);
		mouse.update();
		player.update(dt);
		player.checkPlayerCollisionWith(entities);
 }

function render(){
	
	d.fillStyle = backgroundPattern;
	d.fillRect(0, 0, canvas.width, canvas.height);
	
	player.render();
	renderAll(entities);
	
	renderHUD();	
	
}

function initialize(){
	backgroundPattern = d.createPattern(resources.get('res/background.png'), 'repeat');
	
	createBox(0, 0, false);
	createBox(0, 1, false);
	createBox(0, 2, false);
	createBox(0, 3, false);
	createBox(0, 4, false);
	createBox(0, 5, false);
	createBox(0, 6, false);
	createBox(0, 7, false);
	createBox(5, 7, false);
	createBox(4, 6, false);
	
	lastTime = window.performance.now();
    main();
}

// The main game loop
var lastTime;
function main() {
    var now = window.performance.now();
    var dt = (now - lastTime) / 1000.0;
	
	update(dt);
	render();
	
	if(!paused){
		gameTime += dt;
	}
	
	lastTime = now;
	requestAnimFrame(main);
}

