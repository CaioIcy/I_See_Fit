/* *************************
 * "CLASS": Mouse
 * *************************/
 
function Mouse() {

	this.mx = 0;
	this.my = 0;
	
	this.setXY = function(x,y){
		this.mx = x;
		this.my = y;
	};
	
	this.render = function(){
		daux.clearRect(auxcanvas.width-60, 10, 40, 40);
		daux.fillText("mX: " + this.mx, auxcanvas.width-60, 20);
		daux.fillText("mY: " + this.my, auxcanvas.width-60, 40);
	};
	
	this.update = function(){
		
	};
	
	this.mouseClick = function(){
		//state = 1;
		//paused = false;
		
		//if menu
		if(state == STATE_MENU){
			//if start
			if(this.mx > 83 && this.mx < 290 && this.my > 453 && this.my < 525){
				state = STATE_HELP;
			}
			//if credits
			if(this.mx > 500 && this.mx < 707 && this.my > 453 && this.my < 525){
				state = STATE_CREDITS;
			}
		}
		//if credits
		if(state == STATE_CREDITS){
			if(this.mx > 293 && this.mx < 504 && this.my > 515 && this.my < 586){
				state = STATE_MENU;
			}
		}
		//if help
		if(state == STATE_HELP){
			//X
			if(this.mx > 715 && this.mx < 800 && this.my > 0 && this.my < 85){
				state = STATE_GAME;
				paused = false;
			}
		}
		//if endgame
		if(state == STATE_ENDGAME){
			if(this.mx > 43 && this.mx < 253 && this.my > 434 && this.my < 510){
				refreshPage();
			}
		}
	};

}

var mouse = new Mouse();

function mouseXY(e) {
	e = e||event;
	
	var el = document.querySelector(".wrapper");
	var offsetTop = el.getBoundingClientRect().top;
	var offsetLeft = el.getBoundingClientRect().left;
	
	var mouseX = e.clientX - offsetLeft;
	var mouseY = e.clientY - offsetTop;
		
	//Check mouseX boundaries
	if(mouseX <= 0){
		mouseX = 0;
	}
	else if(mouseX >= canvas.width){
		mouseX = canvas.width;
	}
	else{
		//maintain current mouseX
	}
	
	//Check mouseY boundaries
	if(mouseY <= 0){
		mouseY = 0;
	}
	else if(mouseY >= canvas.height){
		mouseY = canvas.height;
	}
	else{
		//maintain current mouseY
	}
	
	mouse.setXY(mouseX, mouseY);
}

function doMouseClick(e){
	e = e||event;
    mouse.mouseClick();
	if(e.button==2){
		return false;    
	}
}

window.addEventListener('mousemove', mouseXY, false);
window.addEventListener('mousedown', doMouseClick, false);

