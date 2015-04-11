
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
	// level 1
	else if(ENDGAME_VICTORY && state == STATE_GAME && level == 0) {
		paused = true;
		daux.clearRect(0, 0, canvas.width, canvas.height);
		d.clearRect(0, 0, canvas.width, canvas.height);
		entities.splice(0,entities.length);
		initialize();
		state = STATE_GAME;
		level = 1;
		player.health = 3; // also update hud later
		player.x = canvas.width/2;
		player.y = canvas.height - SPRITE_SIZE - 24;
		ENDGAME_VICTORY = false;
	}
	// change from level 1 to level 2
	else if(ENDGAME_VICTORY && state == STATE_GAME && level == 1){
		paused = true;
		daux.clearRect(0, 0, canvas.width, canvas.height);
		d.clearRect(0, 0, canvas.width, canvas.height);
		initializeLevel2();
		level = 2;
		state = STATE_GAME;
		player.health = 3; // also update hud later
		player.x = 50;
		player.y = 100;
		ENDGAME_VICTORY = false;
	}
	// change from level 2 to level 3
	else if(ENDGAME_VICTORY && state == STATE_GAME && level == 2){
		paused = true;
		daux.clearRect(0, 0, canvas.width, canvas.height);
		d.clearRect(0, 0, canvas.width, canvas.height);
		initializeLevel3();
		level = 3;
		state = STATE_GAME;
		player.health = 3; // also update hud later
		player.x = 400;
		player.y = 500;
		ENDGAME_VICTORY = false;
	}
	// victory
	else if(ENDGAME_VICTORY && state == STATE_GAME && level == 3){
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
		mouse.update();
		d.clearRect(0, 0, canvas.width, canvas.height);
		d.drawImage(gameOverScreen,0,0,canvas.width, canvas.height);
		state = STATE_ENDGAME;
	}

	mouse.render();
	
}

