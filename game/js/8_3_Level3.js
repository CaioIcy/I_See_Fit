
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
	createBox(1, 7, false, box_triangle_sprite);
	createBox(2, 7, false, box_triangle_sprite);
	createBox(3, 7, false, box_triangle_sprite);
	createBox(4, 7, false, box_circle_sprite);
	createBox(5, 0, false, box_triangle_sprite);
	createBox(5, 1, false, box_triangle_sprite);
	createBox(5, 2, false, box_triangle_sprite);
	createBox(5, 3, false, box_triangle_sprite);
	
	createEnemy(28,4,200);
	createGear(30,1);
	
	//right wall;


	player.gearsCollected = 0;
	scenary = new Scenary(0, 0);
	paused = false;
}

