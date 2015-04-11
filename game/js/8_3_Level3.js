
function initializeLevel3(){
	music.play();

	entities.splice(0,entities.length);
	
	//left wall
	createBox(3+0, 0, false, metal_box);
	createBox(3+0, 1, false, metal_box);
	createBox(3+0, 2, false, metal_box);
	createBox(3+0, 3, false, metal_box);
	createBox(3+0, 4, false, metal_box);
	createBox(3+0, 5, false, metal_box);
	createBox(3+0, 6, false, metal_box);
	createBox(3+0, 7, false, metal_box);
	createBox(3+1, 7, false, breakable_box);
	createBox(3+2, 7, false, box_square_sprite);
	createBox(3+3, 7, false, breakable_box);
	createBox(3+4, 7, false, breakable_box);

	//puzzle 1

	createBox(4+1, 4, false, metal_box);
	createBox(4+2, 4, false, metal_box);
	createBox(4+3, 4, false, metal_box);
	createBox(4+4, 4, false, metal_box);
	createBox(4+5, 4, false, metal_box);
	createBox(4+6, 4, false, metal_box);
	createBox(4+7, 4, false, metal_box);
	createBox(4+8, 4, false, metal_box);
	createBox(4+9, 4, true, box_circle_sprite);

	createBox(4+12,6, true, boxgear_circle_sprite);
	createBox(4+12,7, false, metal_box);
	createEnemy(4,2,160);
	createEnemy(6,2,160);
	createGear(5,3);

	//puzzle 2
	createEnemy(14, -1, 200);
	createEnemy(19, -1, 200);
	createBox(2+14, 2, false, metal_box);
	createBox(2+15, 2, false, metal_box);
	createBox(2+16, 2, false, metal_box);
	createBox(2+17, 2, false, metal_box);
	createGear(19,1);

	//puzzle 3

	createBox(21, 5, false, metal_box);
	createBox(21, 6, false, metal_box);
	createBox(21, 7, false, metal_box);
	createBox(22,7, true, boxgear_circle_sprite);
	createBox(23,7, true, boxgear_circle_sprite);
	createBox(24, 5, false, metal_box);
	createBox(24, 6, false, metal_box);
	createBox(24, 7, false, metal_box);
	createEnemy(24,4,200);
	createGear(23,6);

	createPortal(28,4);

	createBox(35, 0, false, metal_box);
	createBox(35, 1, false, metal_box);
	createBox(35, 2, false, metal_box);
	createBox(35, 3, false, metal_box);
	createBox(35, 4, false, metal_box);
	createBox(35, 5, false, metal_box);
	createBox(35, 6, false, metal_box);
	createBox(35, 7, false, metal_box);
	createBox(35, 8, false, metal_box);
	
	//right wall;


	player.gearsCollected = 0;
	scenary = new Scenary(0, 0);
	paused = false;
}

