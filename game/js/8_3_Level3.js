
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

	createBox(1, 4, false, metal_box);
	createBox(2, 4, false, metal_box);
	createBox(3, 4, false, metal_box);
	createBox(4, 4, false, metal_box);
	createBox(5, 4, false, metal_box);
	createBox(6, 4, false, metal_box);
	createBox(7, 4, false, metal_box);
	createBox(8, 4, false, metal_box);
	createBox(9, 4, true, box_circle_sprite);

	createBox(12,6, true, boxgear_circle_sprite);
	createBox(12,7, false, metal_box);
	createEnemy(1,2,160);
	createEnemy(3,2,160);
	createGear(2,3);

	//puzzle 2
	createEnemy(9, -1, 200);
	createEnemy(15, -1, 200);
	createBox(12, 2, false, metal_box);
	createBox(13, 2, false, metal_box);
	createBox(14, 2, false, metal_box);
	createBox(15, 2, false, metal_box);
	createGear(15,1);

	//puzzle 3

	createBox(16, 5, false, metal_box);
	createBox(16, 6, false, metal_box);
	createBox(16, 7, false, metal_box);
	createBox(17,7, true, boxgear_circle_sprite);
	createBox(18,7, true, boxgear_circle_sprite);
	createBox(19, 5, false, metal_box);
	createBox(19, 6, false, metal_box);
	createBox(19, 7, false, metal_box);
	createBox(20,7, true, boxgear_circle_sprite);
	createEnemy(19,4,200);
	createGear(18,6);

	createPortal(25,4);

	createBox(31, 0, false, metal_box);
	createBox(31, 1, false, metal_box);
	createBox(31, 2, false, metal_box);
	createBox(31, 3, false, metal_box);
	createBox(31, 4, false, metal_box);
	createBox(31, 5, false, metal_box);
	createBox(31, 6, false, metal_box);
	createBox(31, 7, false, metal_box);
	createBox(31, 8, false, metal_box);
	
	//right wall;


	player.gearsCollected = 0;
	scenary = new Scenary(0, 0);
	paused = false;
}

