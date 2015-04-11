
function initializeLevel2(){
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
	createBox(1, 7, false, metal_box);
	createBox(2, 7, false, metal_box);
	createBox(3, 7, false, metal_box);
	createBox(4, 7, false, box_circle_sprite);
	createBox(5, 0, false, metal_box);
	createBox(5, 1, false, metal_box);
	createBox(5, 2, false, metal_box);
	createBox(5, 3, false, metal_box);
	
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

	createBox(14,5, false, box_circle_sprite);
	createBox(16,3, false, box_circle_sprite);
	createBox(14,1, false, box_circle_sprite);
	createBox(16,7, false, breakable_box);
	createBox(17,7, true, boxgear_circle_sprite);
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
	createBox(32, 3, false, metal_box);
	createBox(33, 3, false, metal_box);
	createBox(34, 3, false, metal_box);
	createBox(34, 2, false, metal_box);
	createBox(35, 2, false, metal_box);
	createBox(36, 2, true, spikegear_triangle,MIDDLE_SPIKE);
	createBox(35, 3, false, metal_box);
	createBox(36, 3, false, metal_box);
	createBox(37, 3, false, metal_box);
	createBox(37, 2, false, metal_box);
	createBox(38, 2, false, metal_box);
	createEnemy(39,1,200);
	createGear(40,-1);
	createPortal(31,4);
	//puzzle 4

	//puzzle 5
	
	createEnemy(28,4,200);
	createGear(30,1);
	
	//right wall;
	createBox(43, 0, false, metal_box);
	createBox(43, 1, false, metal_box);
	createBox(43, 2, false, metal_box);
	createBox(43, 3, false, metal_box);
	createBox(43, 4, false, metal_box);
	createBox(43, 5, false, metal_box);
	createBox(43, 6, false, metal_box);
	createBox(43, 7, false, metal_box);
	createBox(43, 8, false, metal_box);
	createBox(42, 3, false, box_circle_sprite);

	player.x = 400;
	player.y = canvas.height - FLOOR - 24;
	ENDGAME_VICTORY = true;

	player.gearsCollected = 0;
	scenary = new Scenary(0, 0);
	paused = false;
}
