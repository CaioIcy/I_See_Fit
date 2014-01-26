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
var state = 0;

var gameTime = 0;
var paused = false;

var PLAYER_IS_CIRCLE = 1;
var PLAYER_IS_SQUARE = 2;
var PLAYER_IS_TRIANGLE = 3;

var FRICTION = 0.95;
var FLOOR = canvas.height-24;
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

var player_direction = '';

var LEFT_CAMERA_PIN = 200;
var RIGHT_CAMERA_PIN = 600;

var BACKGROUND_WIDTH = 2000;

// Jamming from file: 1.0_Sprites.js
/* *************************
 * Game Images
 * *************************/

resources.load([
    'res/background.png',
	'res/square_spritesheet_left.png',
	'res/square_spritesheet_right.png',
	'res/circle_spritesheet_left.png',
	'res/circle_spritesheet_right.png',
	'res/triangle_spritesheet_left.png',
	'res/triangle_spritesheet_right.png',
	'res/misc_spritesheet.png',
	'res/giant_floor.png',
	'res/enemycopter_spritesheet.png',
	'res/gear_animation.png',
	'res/menu.png',
	'res/portal_spritesheet.png'
]);
resources.onReady(initialize);
 
var menu;
var giantFloor = new Image();
giantFloor.src = "res/giant_floor.png";
 
var spritesize = [SPRITE_SIZE, SPRITE_SIZE];

//(url, pos, size, speed, frames, dir, once) 
var IDLE = 0;
var WALKING = 1;
var SKILL = 2;

var playerCircleSprites = new Array();
var playerSquareSprites = new Array();
var playerTriangleSprites = new Array();

/* RIGHT */
var player_circle_idle_right = new Sprite('res/circle_spritesheet_right.png', [0,0], spritesize, 7, [0,1], 'horizontal', false);
var player_square_idle_right = new Sprite('res/square_spritesheet_right.png', [0,0], spritesize, 7, [0,1,2,3], 'horizontal', false);
var player_triangle_idle_right = new Sprite('res/triangle_spritesheet_right.png', [0,0], spritesize, 0, [0], 'horizontal', true);

var player_circle_walking_right = new Sprite('res/circle_spritesheet_right.png', [0,128], spritesize, 7, [0,1,2,3,4], 'horizontal', false);
var player_square_walking_right = new Sprite('res/square_spritesheet_right.png', [0,64], spritesize, 7, [0,1,2,3,4,5,6], 'horizontal', false);
var player_triangle_walking_right = new Sprite('res/triangle_spritesheet_right.png', [0,128], spritesize, 7, [0,1,2,3,4,5,6,7], 'horizontal', false);

var player_circle_skill_right = new Sprite('res/circle_spritesheet_right.png', [0,256], spritesize, 7, [0], 'horizontal', false);
var player_square_skill_right = new Sprite('res/square_spritesheet_right.png', [0,192], spritesize, 7, [0,1,2,3,4], 'horizontal', false);
var player_triangle_skill_right = new Sprite('res/triangle_spritesheet_right.png', [0,64], spritesize, 7, [0,1,2,3], 'horizontal', false);

/* LEFT */
var player_circle_idle_left = new Sprite('res/circle_spritesheet_left.png', [0,0], spritesize, 7, [0,1], 'horizontal', false);
var player_square_idle_left = new Sprite('res/square_spritesheet_left.png', [0,0], spritesize, 7, [0,1], 'horizontal', false);
var player_triangle_idle_left = new Sprite('res/triangle_spritesheet_left.png', [0,0], spritesize, 0, [0], 'horizontal', true);

var player_circle_walking_left = new Sprite('res/circle_spritesheet_left.png', [0,128], spritesize, 7, [0,1,2,3,4], 'horizontal', false);
var player_square_walking_left = new Sprite('res/square_spritesheet_left.png', [0,64], spritesize, 7, [0,1,2,3,4,5,6], 'horizontal', false);
var player_triangle_walking_left = new Sprite('res/triangle_spritesheet_left.png', [0,128], spritesize, 7, [0,1,2,3,4,5,6,7], 'horizontal', false);

var player_circle_skill_left = new Sprite('res/circle_spritesheet_left.png', [0,256], spritesize, 7, [0], 'horizontal', false);
var player_square_skill_left = new Sprite('res/square_spritesheet_left.png', [0,192], spritesize, 7, [0,1,2,3,4], 'horizontal', false);
var player_triangle_skill_left = new Sprite('res/triangle_spritesheet_left.png', [0,64], spritesize, 7, [0,1,2,3], 'horizontal', false);

playerCircleSprites[IDLE] =  player_circle_idle_left;
playerCircleSprites[WALKING] = player_circle_walking_left;
playerCircleSprites[SKILL] = player_circle_skill_left;

playerSquareSprites[IDLE] = player_square_idle_left;
playerSquareSprites[WALKING] = player_square_walking_left;
playerSquareSprites[SKILL] = player_square_skill_left;

playerTriangleSprites[IDLE] = player_triangle_idle_left;
playerTriangleSprites[WALKING] = player_triangle_walking_left;
playerTriangleSprites[SKILL] = player_triangle_skill_left;

/* MISC */

var box_square_sprite = new Sprite('res/misc_spritesheet.png', [0,0], spritesize, 0, [0], 'horizontal', true);
var boxgear_square_sprite = new Sprite('res/misc_spritesheet.png', [64,0], spritesize, 0, [0], 'horizontal', true);

var box_circle_sprite = new Sprite('res/misc_spritesheet.png', [384,0], spritesize, 0, [0], 'horizontal', true);
var boxgear_circle_sprite = new Sprite('res/misc_spritesheet.png', [448, 0], spritesize , 0, [0], 'horizontal', true);

var box_triangle_sprite = new Sprite('res/misc_spritesheet.png', [192, 0], spritesize , 0, [0], 'horizontal', true);
var boxgear_triangle_sprite = new Sprite('res/misc_spritesheet.png', [256, 0], spritesize , 0, [0], 'horizontal', true);

var metal_box = new Sprite('res/misc_spritesheet.png', [320, 64], spritesize , 0, [0], 'horizontal', true);

var enemycopter_sprite_left = new Sprite('res/enemycopter_spritesheet.png', [0,0], spritesize, 7, [0,1,2,3], 'horizontal', false);
var enemycopter_sprite_right = new Sprite('res/enemycopter_spritesheet.png', [0,64], spritesize, 7, [0,1,2,3], 'horizontal', false);
var gear_sprite =  new Sprite('res/gear_animation.png', [0,0], spritesize, 7, [0,1,2,3,4,3,2,1,0], 'horizontal', false);

var spike_square_start = new Sprite('res/misc_spritesheet.png', [0,3*64], spritesize, 0, [0], 'horizontal', true);
var spike_square = new Sprite('res/misc_spritesheet.png', [1*64,3*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_square = new Sprite('res/misc_spritesheet.png', [2*64,3*64], spritesize, 0, [0], 'horizontal', true);
var spike_square_end = new Sprite('res/misc_spritesheet.png', [3*64,3*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_square_start = new Sprite('res/misc_spritesheet.png', [0,4*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_square_end = new Sprite('res/misc_spritesheet.png', [3*64,4*64], spritesize, 0, [0], 'horizontal', true);

var spike_circle_start = new Sprite('res/misc_spritesheet.png', [0,1*64], spritesize, 0, [0], 'horizontal', true);
var spike_circle = new Sprite('res/misc_spritesheet.png', [1*64,1*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_circle = new Sprite('res/misc_spritesheet.png', [2*64,1*64], spritesize, 0, [0], 'horizontal', true);
var spike_circle_end = new Sprite('res/misc_spritesheet.png', [3*64,1*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_circle_start = new Sprite('res/misc_spritesheet.png', [0,2*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_circle_end = new Sprite('res/misc_spritesheet.png', [3*64,2*64], spritesize, 0, [0], 'horizontal', true);

var spike_triangle_start = new Sprite('res/misc_spritesheet.png', [0,5*64], spritesize, 0, [0], 'horizontal', true);
var spike_triangle = new Sprite('res/misc_spritesheet.png', [1*64,5*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_triangle = new Sprite('res/misc_spritesheet.png', [2*64,5*64], spritesize, 0, [0], 'horizontal', true);
var spike_triangle_end = new Sprite('res/misc_spritesheet.png', [3*64,5*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_triangle_start = new Sprite('res/misc_spritesheet.png', [0,6*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_triangle_end = new Sprite('res/misc_spritesheet.png', [3*64,6*64], spritesize, 0, [0], 'horizontal', true);

var downspike_start = new Sprite('res/misc_spritesheet.png', [5*64,7*64], spritesize, 0, [0], 'horizontal', true);
var downspike_middle = new Sprite('res/misc_spritesheet.png', [6*64,7*64], spritesize, 0, [0], 'horizontal', true);
var downspike_end = new Sprite('res/misc_spritesheet.png', [7*64,7*64], spritesize, 0, [0], 'horizontal', true);

var portal_closed_sprite = new Sprite('res/portal_spritesheet.png', [0,0], [320,256], 0, [0], 'horizontal', true);
var portal_onegear_sprite = new Sprite('res/portal_spritesheet.png', [320,0], [320,256], 0, [0], 'horizontal', true);
var portal_twogear_sprite = new Sprite('res/portal_spritesheet.png', [0,256], [320,256], 0, [0], 'horizontal', true);
var portal_open_sprite = new Sprite('res/portal_spritesheet.png', [320,256], [320,256], 0, [0], 'horizontal', true);

// Jamming from file: 1.1_Audio.js
/* *************************
 * Game Sounds
 * *************************/

var playerCircleAudio = new Array();
var playerSquareAudio = new Array();
var playerTriangleAudio = new Array();

var sound_circle_idle = new Audio("res/Audio/motor.mp3");
var sound_square_idle = new Audio();
var sound_triangle_idle = new Audio();

var sound_circle_walking = new Audio();
var sound_square_walking = new Audio();
var sound_triangle_walking = new Audio();

var sound_circle_skill = new Audio();
var sound_square_skill = new Audio();
var sound_triangle_skill = new Audio();

playerCircleAudio[IDLE] = sound_circle_idle;
playerCircleAudio[WALKING] = sound_circle_walking;
playerCircleAudio[SKILL] = sound_circle_skill;

playerSquareAudio[IDLE] = sound_square_idle;
playerSquareAudio[WALKING] = sound_square_walking;
playerSquareAudio[SKILL] = sound_square_skill;

playerTriangleAudio[IDLE] = sound_triangle_idle;
playerTriangleAudio[WALKING] = sound_triangle_walking;
playerTriangleAudio[SKILL] = sound_triangle_skill;

var gear_collect = new Audio;

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
		if(entity != 0){
			entity.update(dt);
		}
	}
}

function applyGravity(obj){
	if(obj.midAir){
		var gravity = 19/40;
		obj.vy += gravity;
		if( (obj.y + obj.sprite.height) > FLOOR){
			obj.vy = 0;
			obj.y = FLOOR - obj.sprite.height ;
			obj.midAir = false;
		}
	}	
}

function renderHUD(){
	daux.fillStyle = "green";
	//d.fillRect(0,0,canvas.width,64);
	

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
	};
	
	this.render = function(){
		renderEntity(this);
	};

	return this;
}

var numberOfEntities = (canvas.width*2/64) * ((canvas.height-64)/64);
var entities = new Array();

for(i=0;i<numberOfEntities;i++){
	entities[i] = 0;
}

// Jamming from file: 4.1.0_Player.js

function Player(x, y){

	Entity.call(this, x, y);
	
	this.invulnerableSeconds = 2*1000;
	this.now = window.performance.now();
	this.lastDamageTaken = this.now;
	
	this.health = 3;
	this.speed = 400;
	this.vx = 0;
	this.vy = 0;
	this.currentType = PLAYER_IS_CIRCLE;
	this.midAir = false;
	
	this.collidingWith;
	this.collidingFrom;
	this.lastCollision;
	
	this.gearsCollected = 0;
	
	this.currentAudio = playerCircleAudio;
	
	this.currentSprites = playerCircleSprites;
	this.currentAction = IDLE;
	this.sprite = player_circle_walking_left;//new Sprite('res/player_circle.png', [0, 0], [SPRITE_SIZE, SPRITE_SIZE] , 12, [0,1,2,3]);
	
	this.update = function(dt) {
		this.now = window.performance.now();
		this.determineCurrentAction();
		
		this.sprite = this.currentSprites[this.currentAction];
		
		if(this.currentType == PLAYER_IS_SQUARE && pressedKeys[VK_S] && this.vx != 0){
			//this.sprite = (player_direction == 'left') ? player_square_skill_left : player_square_skill_right;
			if(player_direction == 'left'){
				//pushing
				if(this.vx < 0 && this.collidingFrom == FROM_RIGHT){
					this.sprite = player_square_skill_left;
				}
				//pulling
				else if(this.vx < 0 && this.collidingFrom == FROM_LEFT){
					this.sprite = player_square_skill_right;
				}
				else{
					this.sprite = player_square_walking_left;
				}
			}
			else if(player_direction == 'right'){
				//pushing
				if(this.vx > 0 && this.collidingFrom == FROM_LEFT){
					this.sprite = player_square_skill_right;
				}
				//pulling
				else if(this.vx > 0 && this.collidingFrom == FROM_RIGHT){
					this.sprite = player_square_skill_left;
				}
				else{
					this.sprite = player_square_walking_right;
				}
			}
		}
		
		this.sprite.update(dt);
		this.audio = this.currentAudio[this.currentAction];
		this.audio.play();
		
		
		
		this.checkDirection();
		
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
		
		this.checkHealth();
	};
	
	this.checkPlayerCollisionWith = function(array, dt){
		for(i = 0; i<array.length; i++){
			if(array[i] instanceof Portal){
				//depends on number of gears collected
				continue;
			}
			var collision = detectCollision(player, array[i]);
			if(collision != NOT_COLLIDING){
				this.collidingWith = array[i];
				
				if(array[i] instanceof Gear){
					this.gearsCollected++;
					array[i].destroy();
					continue;
				}
				
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
					
					if(array[i] instanceof Spike){
						if(array[i].sprite == downspike_start || array[i].sprite == downspike_middle || array[i].sprite == downspike_end){
							this.takeDamage();
						}
					}
					
				}
				else if(collision == FROM_UP){
					this.collidingFrom = FROM_UP;
					this.y = array[i].y - this.sprite.height;
					this.vy = 0;
					this.midAir = false;
					FLOOR = array[i].y;
					this.lastCollision = array[i];
					
					if(array[i] instanceof Spike){
						if(this.currentType == PLAYER_IS_SQUARE){
							//nothing
						}
						else if(this.currentType == PLAYER_IS_CIRCLE){
							if(player.collidingFrom == FROM_UP && player.collidingWith.sprite == boxgear_circle_sprite || player.collidingWith.sprite == box_circle_sprite){
								player.vy = JUMPSPEED * Math.sqrt(Math.PI) * 0.78 * dt;
							}
							else{
								player.vy = JUMPSPEED * dt;
							}
							player.midAir = true;
							FLOOR = canvas.height -24;
						}
						else if(this.currentType == PLAYER_IS_TRIANGLE){
							//fix margin of error
							this.takeDamage();
						}
					}
					
				}
				if(this.lastCollision.sprite == boxgear_triangle_sprite || this.lastCollision.sprite == box_triangle_sprite){
					this.takeDamage();
				}
			}
			else{
				if(FLOOR != (canvas.height - 24)){
					if(this.lastCollision.x > (this.x+this.sprite.width) || this.x > (this.lastCollision.x+this.lastCollision.sprite.width)){
						FLOOR = canvas.height - 24;
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
				this.speed = 400;
				this.currentSprites = playerCircleSprites;
				this.currentType = PLAYER_IS_CIRCLE;
			}
			else if(type == PLAYER_IS_SQUARE){
				this.speed = 200;
				this.currentSprites = playerSquareSprites;
				this.currentType = PLAYER_IS_SQUARE;
			}
			else if(type == PLAYER_IS_TRIANGLE){
				this.speed = 200;
				this.currentSprites = playerTriangleSprites;
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
	
	this.checkDirection = function(){
		if(this.vx > 0){
			player_direction = 'right';
			playerCircleSprites[IDLE] =  player_circle_idle_right;
			playerCircleSprites[WALKING] = player_circle_walking_right;
			playerCircleSprites[SKILL] = player_circle_skill_right;

			playerSquareSprites[IDLE] = player_square_idle_right;
			playerSquareSprites[WALKING] = player_square_walking_right;
			playerSquareSprites[SKILL] = player_square_skill_right;

			playerTriangleSprites[IDLE] = player_triangle_idle_right;
			playerTriangleSprites[WALKING] = player_triangle_walking_right;
			playerTriangleSprites[SKILL] = player_triangle_skill_right;
		}
		else{
			player_direction = 'left';
			playerCircleSprites[IDLE] =  player_circle_idle_left;
			playerCircleSprites[WALKING] = player_circle_walking_left;
			playerCircleSprites[SKILL] = player_circle_skill_left;

			playerSquareSprites[IDLE] = player_square_idle_left;
			playerSquareSprites[WALKING] = player_square_walking_left;
			playerSquareSprites[SKILL] = player_square_skill_left;

			playerTriangleSprites[IDLE] = player_triangle_idle_left;
			playerTriangleSprites[WALKING] = player_triangle_walking_left;
			playerTriangleSprites[SKILL] = player_triangle_skill_left;
		}
	};
	
	this.checkHealth = function(){
		if(this.health <= 0){
			//alert("flw");
			refreshPage();
		}
	};
	
	this.takeDamage = function(){
		//alert(this.now +" - "+ this.lastDamageTaken +" >= "+this.invulnerableSeconds);
		if((this.now - this.lastDamageTaken) >= this.invulnerableSeconds){
			this.lastDamageTaken = window.performance.now();
			this.health--;
			alert("health = " + this.health);
		}
	};
	
}

var player = new Player(canvas.width/2, canvas.height - SPRITE_SIZE - 24);

// Jamming from file: 4.1.1_EnemyCopter.js
/* *************************
 * "CLASS": EnemyCopter
 * *************************/

function EnemyCopter(x, y, range){

	Entity.call(this,x,y);
	this.sprite = enemycopter_sprite_left;
	this.speed = 177;
	this.range = range;
	
	this.updateMovement = function(dt){
		if(Math.abs(this.x-player.x) < this.range){
			var xToFollow = player.x - this.x;
			var yToFollow = player.y - this.y;
			var hypotenuse = Math.sqrt( (xToFollow*xToFollow)+(yToFollow*yToFollow) );
			
			hypotenuse = (hypotenuse==0) ? 1 : hypotenuse;
			xToFollow /= hypotenuse;
			yToFollow /= hypotenuse;
			
			this.x += xToFollow * dt * this.speed;
			this.y += yToFollow * dt * this.speed;
		}
	};
	
	//Update
	this.update = function(dt){
	
		if(this.x - player.x < 0){
			this.sprite = enemycopter_sprite_left;
		}
		else{
			this.sprite = enemycopter_sprite_right;
		}
	
		this.sprite.update(dt);
		this.updateMovement(dt);
	};
	
	this.destroy = function(){
		entities.splice(entities.indexOf(this), 1);
	};
	
	return this;
}

function createEnemy(xpos,ypos,range){
	var x = xpos*SPRITE_SIZE;
	var y = (ypos*SPRITE_SIZE) + 64;
	var position = xpos*7 + ypos;
	entities[position] = new EnemyCopter(x,y,range);
}
// Jamming from file: 4.2.0_Box.js
/* *************************
 * "CLASS": Box
 * *************************/

function Box(x, y, mutant,sprite){

	Entity.call(this,x,y);
	
	this.mutant = mutant;	
	this.sprite = sprite;
	
	this.update = function(dt){
		this.sprite.update(dt);
		if(this.mutant){
			if(player.currentType == PLAYER_IS_SQUARE){
				this.sprite = boxgear_square_sprite;
			}
			else if(player.currentType == PLAYER_IS_CIRCLE){
				this.sprite = boxgear_circle_sprite;
			}
			else if(player.currentType == PLAYER_IS_TRIANGLE){
				this.sprite = boxgear_triangle_sprite;
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

function createBox(xpos,ypos,mutant,sprite){
	var x = xpos*SPRITE_SIZE;
	var y = (ypos*SPRITE_SIZE) + 64;
	var position = xpos*7 + ypos;
	entities[position] = new Box(x,y,mutant,sprite);
}
// Jamming from file: 4.2.1_Spike.js
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
// Jamming from file: 4.2.2_Gear.js
/* *************************
 * "CLASS": Gear
 * *************************/
 
function Gear(x,y){
	Entity.call(this,x,y);
		
	this.sprite = gear_sprite;
	
	this.update = function(dt){
		this.sprite.update(dt);
	};
	
	this.render = function(){
		renderEntity(this);
	};
	
	this.destroy = function(){
		entities.splice(entities.indexOf(this), 1);
	};

	return this;
}

function createGear(xpos,ypos){
	var x = xpos*SPRITE_SIZE;
	var y = (ypos*SPRITE_SIZE) + 64;
	var position = xpos*7 + ypos;
	entities[position] = new Gear(x,y);
}
// Jamming from file: 4.2.3_Portal.js
/* *************************
 * "CLASS": Portal
 * *************************/

function Portal(x,y){
	
	Entity.call(this,x,y);
	this.sprite = portal_closed_sprite;
	
	this.update = function(dt){
		this.sprite.update(dt);
		
		if(player.gearsCollected == 0){
			this.sprite = portal_closed_sprite;
		}
		else if(player.gearsCollected == 1){
			this.sprite = portal_onegear_sprite;
		}
		else if(player.gearsCollected == 2){
			this.sprite = portal_twogear_sprite;
		}
		else if(player.gearsCollected == 3){
			this.sprite = portal_open_sprite;
		}
		
	};
	
	return this;
}

function createPortal(xpos,ypos){
	var x = xpos*SPRITE_SIZE;
	var y = (ypos*SPRITE_SIZE) + 64;
	var position = xpos*7 + ypos;
	entities[position] = new Portal(x,y);
}
// Jamming from file: 4.3_Scenary.js
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

// Jamming from file: 5_Camera.js
/* *************************
 * "CLASS": Camera
 * *************************/
 
function Camera(x, y){

	Entity.call(this,x,y);
	
	this.update = function(dt){
		if(player_direction == 'left'){
			//LEFT END OF SCENARY
			scenary.x += player.vx * dt * 2;

			for(i=0; i<entities.length; i++){
				var entity = entities[i];
				if(entity != 0){
					entity.x -= player.vx * dt * 2;
				}
			}
			
			if(scenary.x <= 0){
				scenary.x = 0;
			}
			if(player.x <= LEFT_CAMERA_PIN){
				player.x = LEFT_CAMERA_PIN;
			}
		}
		else if(player_direction == 'right'){
			//RIGHT END OF SCENARY
			scenary.x += player.vx * dt * 2;

			for(i=0; i<entities.length; i++){
				var entity = entities[i];
				if(entity != 0){
					entity.x -= player.vx * dt * 2;
				}
			}
			if(scenary.x >= (BACKGROUND_WIDTH - canvas.width)){
				scenary.x = BACKGROUND_WIDTH - canvas.width;
			}
			if(player.x >= RIGHT_CAMERA_PIN && player.x < RIGHT_CAMERA_PIN+5 &&scenary.x != BACKGROUND_WIDTH-canvas.width){
				player.x = RIGHT_CAMERA_PIN;
			}
			if(player.x >= canvas.width - player.sprite.width){
				player.x = canvas.width - player.sprite.width;
			}
		}
	};

	return this;
}

var camera = new Camera(0,0);
// Jamming from file: 6_Keyboard.js
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
					if(player.collidingFrom == FROM_UP && player.collidingWith.sprite == boxgear_circle_sprite || player.collidingWith.sprite == box_circle_sprite){
						player.vy = JUMPSPEED * Math.sqrt(Math.PI) * 0.78 * dt;
					}
					else{
						player.vy = JUMPSPEED * dt;
					}
					player.midAir = true;
					FLOOR = canvas.height -24;
				}
			}
			//SQUARE -- PUSH
			else if(player.currentType == PLAYER_IS_SQUARE && player.collidingWith != false && player.collidingWith.sprite != metal_box){
				
				var boxesColliding = NOT_COLLIDING;
				for(i = 0; i<entities.length; i++){
					 boxesColliding = detectCollision(player.lastCollision, entities[i]);
					 if(entities[i] instanceof Portal) continue;
					 
					 if(player.lastCollision.x == entities[i].x && player.lastCollision.y == entities[i].y){
					 
					 }
					 else if(boxesColliding != NOT_COLLIDING){
						//player.lastCollision.x = entities[i].x + entities[i].sprite.width + 2;
						if(player.collidingFrom == FROM_LEFT){
							/*if((pressedKeys[VK_LEFT] || pressedKeys[VK_A])){
								player.lastCollision.x = entities[i].x + entities[i].sprite.width;
							}
							else*/ if((pressedKeys[VK_RIGHT] || pressedKeys[VK_D])){
								player.lastCollision.x = entities[i].x- player.lastCollision.sprite.width - 2;
							}
						}
						else if(player.collidingFrom == FROM_RIGHT){
							if((pressedKeys[VK_LEFT] || pressedKeys[VK_A])){
								player.lastCollision.x = entities[i].x + entities[i].sprite.width + 2;
							}
							/*else if((pressedKeys[VK_RIGHT] || pressedKeys[VK_D])){
								player.lastCollision.x = entities[i].x - entities[i].sprite.width;
							}*/
						}
						break;
					}
				}
			
				if(player.collidingFrom == FROM_LEFT){
					if((pressedKeys[VK_LEFT] || pressedKeys[VK_A]) && boxesColliding == NOT_COLLIDING){
						player.collidingWith.x = player.x + player.sprite.width;
					}
					else if((pressedKeys[VK_RIGHT] || pressedKeys[VK_D])&& boxesColliding == NOT_COLLIDING){
						player.collidingWith.x = player.x+player.sprite.width + 2;
					}
				}
				else if(player.collidingFrom == FROM_RIGHT){
					if((pressedKeys[VK_LEFT] || pressedKeys[VK_A])&& boxesColliding == NOT_COLLIDING){
						player.collidingWith.x = player.x - player.collidingWith.sprite.width - 2;
					}
					else if((pressedKeys[VK_RIGHT] || pressedKeys[VK_D])&& boxesColliding == NOT_COLLIDING){
						player.collidingWith.x = player.x - player.sprite.width;
					}
				}
				
			}
			//TRIANGLE -- DESTROY
			else if(player.currentType == PLAYER_IS_TRIANGLE){
				if(player.collidingWith != false){
					if((player.collidingFrom == FROM_LEFT || player.collidingFrom == FROM_RIGHT) &&
						player.collidingWith.sprite != metal_box && player.collidingWith.sprite != box_triangle_sprite &&
						player.collidingWith.sprite != boxgear_triangle_sprite){
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

// Jamming from file: 7_Mouse.js
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
		state = 1;
		paused = false;
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


// Jamming from file: 8_Game.js
/* *************************
 * Main
 * *************************/

function update(dt){
	if(!paused){
		keyboard.updateKeyInput(dt);
		mouse.update();
		player.update(dt);
		player.checkPlayerCollisionWith(entities, dt);
		updateAll(entities, dt);
		camera.update(dt);
	}
 }
 
function render(){
	if(!paused){
		scenary.render();
		renderAll(entities);
		player.render();
	}
	renderHUD();
}

function initialize(){
	//left wall
	createBox(0, 0, false, metal_box);
	createBox(0, 1, false, metal_box);
	createBox(0, 2, false, metal_box);
	createBox(0, 3, false, metal_box);
	createBox(0, 4, false, metal_box);
	createBox(0, 5, false, metal_box);
	createBox(0, 6, false, metal_box);
	createBox(0, 7, false, metal_box);
	
	createSpike(1,4,false,downspike_start, START_SPIKE);
	createSpike(2,4,false,downspike_middle, MIDDLE_SPIKE);
	createSpike(3,4,false,downspike_end, END_SPIKE);
	
	//puzzle 1
	createBox(3, 7, false, box_square_sprite);
	createBox(8, 6, false, metal_box);
	createBox(8, 7, false, metal_box);
	
	createEnemy(14,4, 200);
	
	//puzzle 2
	createBox(9, 7, true, boxgear_circle_sprite);
	createBox(15, 5, false, metal_box);
	createBox(15, 6, false, metal_box);
	createBox(15, 7, false, metal_box);
	
	//puzzle 3
	createBox(17, 7, false, box_circle_sprite);
	createBox(12, 4, false, metal_box);
	createBox(11, 4, false, metal_box);
	createBox(11, 3, false, metal_box);
	createBox(10, 3, false, metal_box);
	createBox(9, 3, false, metal_box);
	createBox(8, 3, false, metal_box);
	createBox(7, 3, false, metal_box);
	createBox(6, 3, false, metal_box);
	createBox(5, 3, false, metal_box);
	createBox(4, 3, false, metal_box);
	createBox(3, 3, false, metal_box);
	createBox(2, 3, false, metal_box);
	createBox(1, 3, false, metal_box);
	createGear(1,2);
	createSpike(3,2,true,spikegear_triangle_start,START_SPIKE);
	createSpike(4,2,true,spikegear_triangle,MIDDLE_SPIKE);
	createSpike(5,2,true,spikegear_triangle_end,END_SPIKE);
	createBox(6, 2, false, metal_box);
	
	//puzzle 4
	createPortal(18,4);
	createBox(23, 5, false, metal_box);
	createBox(23, 6, false, metal_box);
	createBox(23, 7, false, metal_box);

	//right wall
	createBox(30, 0, false, metal_box);
	createBox(30, 1, false, metal_box);
	createBox(30, 2, false, metal_box);
	createBox(30, 3, false, metal_box);
	createBox(30, 4, false, metal_box);
	createBox(30, 5, false, metal_box);
	createBox(30, 6, false, metal_box);
	createBox(30, 7, false, metal_box);
	
	menu = d.createPattern(resources.get('res/menu.png'), 'repeat');
	
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
	
	//drawing menu
	if(state==0){
		paused = true;
		daux.clearRect(0, 0, canvas.width, canvas.height);
		d.clearRect(0, 0, canvas.width, canvas.height);
		d.fillStyle = menu;
		d.fillRect(0,0,canvas.width, canvas.height);
	}
}

