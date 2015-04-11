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
		renderHP();
	}
	renderHUD();
}

function initialize(){
	music.play();

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
	createBox(1, 7, false, box_square_sprite);
	createBox(2, 7, false, breakable_box);
	createBox(8, 6, false, metal_box);
	createBox(8, 7, false, metal_box);
	
	//puzzle 2
	createGear(11,6);
	createBox(9, 7, true, boxgear_circle_sprite);
	createBox(15, 6, false, box_circle_sprite);
	createBox(15, 7, false, metal_box);
	createBox(16,7,false, box_square_sprite);
	
	//puzzle 3
	createBox(13, 4, false, metal_box);
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
	createPortal(16,4);
	// createBox(15, 3, false, metal_box);
	createBox(16, 3, false, metal_box);
	createBox(17, 3, false, metal_box);
	createBox(18, 3, false, metal_box);
	createBox(19, 3, false, metal_box);
	createBox(20, 3, false, metal_box);
	createBox(21, 3, false, metal_box);
	createBox(21, 4, false, box_triangle_sprite);
	createBox(21, 5, false, box_triangle_sprite);
	createBox(21, 6, false, box_triangle_sprite);
	createBox(21, 7, false, box_triangle_sprite);

	//puzzle 5
	createBox(22, 3, false, metal_box);
	createSpike(23, 3, true, spikegear_circle_start, START_SPIKE);
	createSpike(24, 3, true, spikegear_circle, MIDDLE_SPIKE);
	createSpike(25, 3, true, spikegear_circle, MIDDLE_SPIKE);
	createSpike(26, 3, true, spikegear_circle, MIDDLE_SPIKE);
	createSpike(27, 3, true, spikegear_circle, MIDDLE_SPIKE);
	createSpike(28, 3, true, spikegear_circle, MIDDLE_SPIKE);
	createSpike(29, 3, true, spikegear_circle_end, END_SPIKE);
	
	createSpike(23,0,false,downspike_start, START_SPIKE);
	createSpike(24,0,false,downspike_middle, MIDDLE_SPIKE);
	createSpike(25,0,false,downspike_middle, MIDDLE_SPIKE);
	createSpike(26,0,false,downspike_middle, MIDDLE_SPIKE);
	createSpike(27,0,false,downspike_middle, MIDDLE_SPIKE);
	createSpike(28,0,false,downspike_middle, MIDDLE_SPIKE);
	createSpike(29,0,false,downspike_end, END_SPIKE);
	
	createEnemy(28,1,260);
	createGear(29,2);
	
	//right wall
	createBox(30, 0, false, metal_box);
	createBox(30, 1, false, metal_box);
	createBox(30, 2, false, metal_box);
	createBox(30, 3, false, metal_box);
	createBox(30, 4, false, metal_box);
	createBox(30, 5, false, metal_box);
	createBox(30, 6, false, metal_box);
	createBox(30, 7, false, metal_box);
	
	menu = resources.get('res/menu.png');
	
	ENDGAME_VICTORY = false;
	level = 1;

	lastTime = window.performance.now();
    main();
}

function initializeLevel2(quant){
	music.play();

	entities.splice(0,entities.length);
	
	//left wall
	createBox(0, 0, false, metal_box);
	createBox(0, 1, false, metal_box);
	createBox(0, 2, false, metal_box);
	createBox(0, 3, false, metal_box);
	createBox(0, 4, false, metal_box);
	createBox(0, 5, false, metal_box);
	createBox(0, 6, false, metal_box);
	createBox(0, 7, false, metal_box);
	createBox(1, 7, false, box_triangle_sprite);
	createBox(2, 7, false, box_triangle_sprite);
	createBox(3, 7, false, box_triangle_sprite);
	createBox(4, 7, false, box_circle_sprite);
	createBox(5, 0, false, box_triangle_sprite);
	createBox(5, 1, false, box_triangle_sprite);
	createBox(5, 2, false, box_triangle_sprite);
	createBox(5, 3, false, box_triangle_sprite);
	
	//puzzle 1
	createSpike(5,7,true,spikegear_triangle_start,START_SPIKE);
	createSpike(6,7,true,spikegear_triangle,MIDDLE_SPIKE);
	createSpike(7,7,true,spikegear_triangle,MIDDLE_SPIKE);
	createSpike(8,7,true,spikegear_triangle,MIDDLE_SPIKE);
	createSpike(9,7,true,spikegear_triangle,MIDDLE_SPIKE);
	createSpike(10,7,true,spikegear_triangle_end,END_SPIKE);
	createBox(5, 4, false, box_circle_sprite);
	createBox(6, 4, false, box_circle_sprite);
	createBox(7, 4, false, box_circle_sprite); 
	createBox(8, 4, false, box_circle_sprite);
	createBox(9, 4, false, box_circle_sprite);
	createBox(10, 4, false, box_circle_sprite);
	createEnemy(14,6,170);
	createGear(7,3);
	
	//puzzle 2

	createBox(15,6, false, box_circle_sprite);
	createBox(17,4, false, box_circle_sprite);
	createBox(15,2, false, box_circle_sprite);
	createBox(18, 1, false, metal_box);
	createBox(18, 2, false, metal_box);
	createBox(18, 3, false, metal_box);
	createBox(18, 4, false, metal_box);
	createBox(18, 5, false, metal_box);
	createBox(18, 6, false, metal_box);
	createBox(18, 7, false, metal_box);
	createBox(20,2, false, box_circle_sprite);
	createBox(23,2, false, box_circle_sprite);
	createBox(27,2, false, box_circle_sprite);
	createSpike(19,7,false,box_triangle_sprite);
	createSpike(20,7,false,box_triangle_sprite);
	createSpike(21,7,false,box_triangle_sprite);
	createSpike(22,7,false,box_triangle_sprite);
	createSpike(23,7,false,box_triangle_sprite);
	createSpike(24,7,false,box_triangle_sprite);
	createSpike(25,7,false,box_triangle_sprite);
	createSpike(26,7,false,box_triangle_sprite);
	createSpike(27,7,false,box_triangle_sprite);
	
	//puzzle 3
	createBox(30, 2, false, metal_box);
	createBox(30, 3, false, metal_box);
	createBox(30, 4, false, metal_box);
	createBox(30, 5, false, metal_box);
	createBox(30, 6, false, metal_box);
	createBox(30, 7, false, metal_box);
	createBox(31, 2, false, metal_box);
	createBox(32, 2, false, metal_box);
	createBox(33, 2, true, spikegear_triangle,MIDDLE_SPIKE);
	createBox(34, 2, false, metal_box);
	createBox(35, 2, false, metal_box);
	createBox(36, 2, true, spikegear_triangle,MIDDLE_SPIKE);
	createBox(37, 2, false, metal_box);
	createBox(38, 2, false, metal_box);
	createEnemy(39,1,200);
	createGear(40,2);
	createPortal(31,4);
	//puzzle 4

	//puzzle 5
	
	createEnemy(28,4,200);
	createGear(30,1);
	
	//right wall;


	player.gearsCollected = 0;
	scenary = new Scenary(0, 0);
	paused = false;
}

// The main game loop
var lastTime = 0;
var dt = 1.0 / 60.0;
var acct = 0;
var gameSpeed = 1 / 777.0;
function main() {
    var now = (window.performance.now() - lastTime) * gameSpeed;
	if(!paused){
	    acct += now;
	
		while(acct >= dt) {
			update(dt);
			render();
			acct -= dt;
			gameTime += dt;
		}
	}
	
	lastTime = window.performance.now();
	requestAnimFrame(main);

	//drawing menu
	if(state == STATE_MENU){
		paused = true;
		daux.clearRect(0, 0, canvas.width, canvas.height);
		d.clearRect(0, 0, canvas.width, canvas.height);
		d.drawImage(menu,0,0,canvas.width, canvas.height);
	}
	//credits
	else if(state == STATE_CREDITS){
		paused = true;
		daux.clearRect(0, 0, canvas.width, canvas.height);
		d.clearRect(0, 0, canvas.width, canvas.height);
		d.drawImage(creditsScreen,0,0,canvas.width, canvas.height);
	}
	//help
	else if(state == STATE_HELP){
		paused = true;
		daux.clearRect(0, 0, canvas.width, canvas.height);
		d.clearRect(0, 0, canvas.width, canvas.height);
		d.drawImage(helpScreen,0,0,canvas.width, canvas.height);
	}
	// change from level 1 to level 2
	else if(ENDGAME_VICTORY && state == STATE_GAME && level == 1){
		paused = true;
		daux.clearRect(0, 0, canvas.width, canvas.height);
		d.clearRect(0, 0, canvas.width, canvas.height);
		initializeLevel2(entities.length);
		level = 2;
		state = STATE_GAME;
		player.health = 3; // also update hud later
		player.x = 50;
		player.y = 100;
		ENDGAME_VICTORY = false;
	}
	// victory
	else if(ENDGAME_VICTORY && state == STATE_GAME && level == 2){
		paused = true;
		daux.clearRect(0, 0, canvas.width, canvas.height);
		d.clearRect(0, 0, canvas.width, canvas.height);
		d.drawImage(victoryScreen,0,0,canvas.width, canvas.height);
		state = STATE_ENDGAME;
	}
	// game over
	else if(ENDGAME_GAMEOVER && state == STATE_GAME ){
		paused = true;
		daux.clearRect(0, 0, canvas.width, canvas.height);
		d.clearRect(0, 0, canvas.width, canvas.height);
		d.drawImage(gameOverScreen,0,0,canvas.width, canvas.height);
		state = STATE_ENDGAME;
	}
	
}

