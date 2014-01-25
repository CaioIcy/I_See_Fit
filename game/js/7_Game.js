/* *************************
 * Main
 * *************************/

function update(dt){
	
		keyboard.updateKeyInput(dt);
		mouse.update();
		player.update(dt);
 }

function render(){
	
	d.fillStyle = backgroundPattern;
	d.fillRect(0, 0, canvas.width, canvas.height);
	
	player.render();
	
	renderHUD();	
	
}

function initialize(){
	backgroundPattern = d.createPattern(resources.get('res/background.png'), 'repeat');

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
