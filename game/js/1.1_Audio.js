/* *************************
 * Game Sounds
 * *************************/

var music = new Audio("res/Audio/497799_King-Kilo--Automyso-low.mp3");
 
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

var gear_collect = new Audio("res/Audio/187407__mazk1985__power-up-grab.wav");
var robot_ready = new Audio("res/Audio/187404__mazk1985__robot-ready.wav");
var robot_go = new Audio("res/Audio/187409__mazk1985__robot-go.wav");
var robot_bleep = new Audio("res/Audio/150399__mikobuntu__voc-formant9.wav");
var jump = new Audio("res/Audio/science_fiction_robot_movement_single_003-low.mp3");
var hit = new Audio("res/Audio/87040__runnerpack__stun-low.mp3");
