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
	
	//puzzle 1
	createBox(1, 7, false, box_square_sprite);
	createBox(8, 6, false, metal_box);
	createBox(8, 7, false, metal_box);
	
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
	//createBox(4, 2, false, metal_box);
	//createBox(4, 1, false, metal_box);
	//gear on 1,2
	createSpike(2,2,true,spikegear_triangle_start,START_SPIKE);
	createSpike(3,2,true,spikegear_triangle,MIDDLE_SPIKE);
	createSpike(4,2,true,spikegear_triangle_end,END_SPIKE);
	
	createSpike(2,1,false,spike_triangle_start,START_SPIKE);
	createSpike(3,1,false,spike_triangle,MIDDLE_SPIKE);
	createSpike(4,1,false,spike_triangle_end,END_SPIKE);
	
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
