/* *************************
 * Main
 * *************************/

function update(dt){
	if(!paused){
		keyboard.updateKeyInput(dt);
		mouse.update();
		player.update(dt);
		player.checkPlayerCollisionWith(entities);
		updateAll(entities, dt);
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
	createBox(0, 0, false, metal_box);
	createBox(0, 1, false, metal_box);
	createBox(0, 2, false, metal_box);
	createBox(0, 3, false, metal_box);
	createBox(0, 4, false, metal_box);
	createBox(0, 5, false, metal_box);
	createBox(0, 6, false, metal_box);
	createBox(0, 7, false, metal_box);
	
	createBox(30, 0, false, metal_box);
	createBox(30, 1, false, metal_box);
	createBox(30, 2, false, metal_box);
	createBox(30, 3, false, metal_box);
	createBox(30, 4, false, metal_box);
	createBox(30, 5, false, metal_box);
	createBox(30, 6, false, metal_box);
	createBox(30, 7, false, metal_box);
	
	createBox(3,7,true,boxgear_circle_sprite);
	
	createEnemy(15,5);
	
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
