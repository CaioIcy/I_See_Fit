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
// Jamming from file: 1_Sprites.js
/* *************************
 * Game Images
 * *************************/

resources.load([
    'res/background.png',
	'res/player_square.png',
	'res/player_circle.png',
	'res/player_triangle.png'
]);
resources.onReady(initialize);
 
var backgroundPattern;

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
		entity.render();
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

// Jamming from file: 4.0_Entity.js
/* *************************
 * "CLASS": Entity
 * *************************/

function Entity(x, y, width, height){

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	
	this.sprite;
	this.speed;
	
	this.update = function(dt){
	}
	
	this.render = function(){
		renderEntity(this);
	}

	return this;
}
 
// Jamming from file: 4.1_Player.js

function Player(x,y,width,height){

	Entity.call(this,x,y,width,height);
	
	this.speed = 300;
	this.vx = 0;
	this.vy = 0;
	this.currentType = PLAYER_IS_SQUARE;
	this.midAir = false;
	
	this.sprite = new Sprite('res/player_square.png', [0, 0], [40,40] , 12, [0]);
	
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
		if(type == PLAYER_IS_CIRCLE){
			this.speed = 600;
			this.sprite = new Sprite('res/player_circle.png', [0, 0], [40,40] , 12, [0]);
			this.currentType = PLAYER_IS_CIRCLE;
		}
		else if(type == PLAYER_IS_SQUARE){
			this.speed = 300;
			this.sprite = new Sprite('res/player_square.png', [0, 0], [40,40] , 12, [0]);
			this.currentType = PLAYER_IS_SQUARE;
		}
		else if(type == PLAYER_IS_TRIANGLE){
			this.speed = 300;
			this.sprite = new Sprite('res/player_triangle.png', [0, 0], [40,40] , 12, [0]);
			this.currentType = PLAYER_IS_TRIANGLE;
		}
	};
	
}

var player = new Player(50, canvas.height - 40, 40, 40);
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
					player.vy = (-577) * dt;
					player.midAir = true;
				}
			}
			//SQUARE -- PUSH
			else if(player.currentType == PLAYER_IS_SQUARE){
				
			}
			//TRIANGLE -- DESTROY
			else if(player.currentType == PLAYER_IS_TRIANGLE){
				
			}
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
 }

function render(){
	
	d.fillStyle = backgroundPattern;
	d.fillRect(0, 0, canvas.width, canvas.height);
	
	player.render();
	
	renderHUD();	
	
}

function initialize(){
	backgroundPattern = d.createPattern(resources.get('res/background.png'), 'repeat');

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

