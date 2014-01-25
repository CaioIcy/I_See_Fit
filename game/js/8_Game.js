/* *************************
 * Main
 * *************************/

function update(dt){
	if(!paused){
		keyboard.updateKeyInput(dt);
		mouse.update();
		player.update(dt);
		player.checkPlayerCollisionWith(entities);
		camera.update(dt);
	}
 }
 
function render(){
	if(!paused){
		scenary.render();
		player.render();
		renderAll(entities);
	}
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
	createBox(9, 6, false);
	
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
