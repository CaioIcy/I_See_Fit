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
	'res/misc_spritesheet.png'
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

/* RIGHT */
var player_circle_idle_right = new Sprite('res/circle_spritesheet_right.png', [0,0], spritesize, 7, [0,1], 'horizontal', false);
var player_square_idle_right = new Sprite('res/square_spritesheet_right.png', [0,0], spritesize, 7, [0,1,2,3], 'horizontal', false);
var player_triangle_idle_right = new Sprite('res/triangle_spritesheet_right.png', [0,0], spritesize, 0, [0], 'horizontal', true);

var player_circle_walking_right = new Sprite('res/circle_spritesheet_right.png', [0,128], spritesize, 7, [0,1,2,3,4], 'horizontal', false);
var player_square_walking_right = new Sprite('res/square_spritesheet_right.png', [0,64], spritesize, 7, [0,1,2,3,4,5,6], 'horizontal', false);
var player_triangle_walking_right = new Sprite('res/triangle_spritesheet_right.png', [0,128], spritesize, 7, [0,1,2,3,4,5,6,7], 'horizontal', false);

var player_circle_skill_right = new Sprite('res/circle_spritesheet_right.png', [0,256], spritesize, 7, [0], 'horizontal', false);
var player_square_skill_right = new Sprite('res/square_spritesheet_right.png', [0,128], spritesize, 7, [0,1,2,3], 'horizontal', false);
var player_triangle_skill_right = new Sprite('res/triangle_spritesheet_right.png', [0,64], spritesize, 7, [0,1,2,3], 'horizontal', false);

/* LEFT */
var player_circle_idle_left = new Sprite('res/circle_spritesheet_left.png', [0,0], spritesize, 7, [0,1], 'horizontal', false);
var player_square_idle_left = new Sprite('res/square_spritesheet_left.png', [0,0], spritesize, 7, [0,1], 'horizontal', false);
var player_triangle_idle_left = new Sprite('res/triangle_spritesheet_left.png', [0,0], spritesize, 0, [0], 'horizontal', true);

var player_circle_walking_left = new Sprite('res/circle_spritesheet_left.png', [0,128], spritesize, 7, [0,1,2,3,4], 'horizontal', false);
var player_square_walking_left = new Sprite('res/square_spritesheet_left.png', [0,64], spritesize, 7, [0,1,2,3,4,5,6], 'horizontal', false);
var player_triangle_walking_left = new Sprite('res/triangle_spritesheet_left.png', [0,128], spritesize, 7, [0,1,2,3,4,5,6,7], 'horizontal', false);

var player_circle_skill_left = new Sprite('res/circle_spritesheet_left.png', [0,256], spritesize, 7, [0], 'horizontal', false);
var player_square_skill_left = new Sprite('res/square_spritesheet_left.png', [0,128], spritesize, 7, [0,1,2,3], 'horizontal', false);
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

