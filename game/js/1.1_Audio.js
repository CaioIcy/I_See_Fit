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