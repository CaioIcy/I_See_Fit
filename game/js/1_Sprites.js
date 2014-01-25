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
