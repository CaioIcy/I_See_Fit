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
	createBox(3, 7, false, box_square_sprite);
	createBox(8, 6, false, metal_box);
	createBox(8, 7, false, metal_box);
	
	//puzzle 2
	createGear(17,4);
	createBox(9, 7, true, boxgear_circle_sprite);
	createBox(15, 6, false, box_circle_sprite);
	createBox(15, 7, false, metal_box);
	createBox(16,7,false, box_square_sprite);
	
	//puzzle 3
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
	
	createEnemy(28,1,160);
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
	//credits
	else if(state==2){
		paused = true;
		daux.clearRect(0, 0, canvas.width, canvas.height);
		d.clearRect(0, 0, canvas.width, canvas.height);
		//d.drawImage(helpScreen,0,0,canvas.width, canvas.height);
		d.fillStyle="red";d.fillRect(0,0,canvas.width,canvas.height);
	}
	//help
	else if(state==3){
		paused = true;
		daux.clearRect(0, 0, canvas.width, canvas.height);
		d.clearRect(0, 0, canvas.width, canvas.height);
		d.drawImage(helpScreen,0,0,canvas.width, canvas.height);
	}
	
}
