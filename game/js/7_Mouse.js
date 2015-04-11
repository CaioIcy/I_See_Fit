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
		var orgfill = daux.fillStyle;
		daux.fillStyle = "white";
		daux.fillRect(auxcanvas.width-100, 10, 100, 40);
		daux.fillStyle = "black";
		daux.fillText("mX: " + this.mx, auxcanvas.width-60, 20);
		daux.fillText("mY: " + this.my, auxcanvas.width-60, 40);
		daux.fillStyle = orgfill;
	};
	
	this.update = function(){
		
	};
	
	this.mouseClick = function(){
		//state = 1;
		//paused = false;
		
		//if menu
		if(state == STATE_MENU){
			//if start
			if(this.mx > 162+120 && this.mx < 162+120+200 && this.my > 458 && this.my < 458+62){
				state = STATE_HELP;
			}
			//if credits
			if(this.mx > 586+120 && this.mx < 586+120+200 && this.my > 458 && this.my < 458+62){
				state = STATE_CREDITS;
			}
		}
		//if credits
		if(state == STATE_CREDITS){
			if(this.mx > 377+120 && this.mx < 377+120+200+10 && this.my > 521 && this.my < 595){
				state = STATE_MENU;
			}
		}
		//if help
		if(state == STATE_HELP){
			//X
			if(this.mx > 810+120 && this.mx < 810+120+80 && this.my > 0 && this.my < 0+85){
				state = STATE_GAME;
				paused = false;
			}
		}
		//if endgame
		if(state == STATE_ENDGAME){
			if(this.mx > 121+120 && this.mx < 121+120 && this.my > 435 && this.my < 435+70){
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

