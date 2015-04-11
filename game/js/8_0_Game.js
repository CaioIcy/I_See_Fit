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
