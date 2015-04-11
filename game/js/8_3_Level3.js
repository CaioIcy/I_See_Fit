
function initializeLevel3(){
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
	createBox(1, 7, false, breakable_box);
	createBox(2, 7, false, box_square_sprite);
	createBox(3, 7, false, breakable_box);
	createBox(4, 7, false, breakable_box);

	//puzzle 1
	createBox(4, 4, false, metal_box);
	createBox(5, 4, false, metal_box);
	createBox(6, 4, false, metal_box);
	createBox(7, 4, false, metal_box);
	createBox(8, 4, false, metal_box);
	createBox(9, 4, false, metal_box);
	createBox(12,6, true, boxgear_circle_sprite);
	createBox(12,7, false, metal_box);
	createEnemy(4,3,160);
	createEnemy(6,3,160);
	createGear(5,3);
	

	
	createEnemy(28,4,200);
	createGear(30,1);
	
	//right wall;


	player.gearsCollected = 0;
	scenary = new Scenary(0, 0);
	paused = false;
}

