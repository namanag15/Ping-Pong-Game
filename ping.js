var ball=document.getElementById('ball');
var plank1=document.getElementById('plank1');
var plank2=document.getElementById('plank2');
var surf=document.getElementById('surf');
var leftBound=surf.getBoundingClientRect().left;
var rightBound=surf.getBoundingClientRect().right;
var topBound=surf.getBoundingClientRect().top;
var bottomBound=surf.getBoundingClientRect().bottom;
plank1.style.top=plank1.getBoundingClientRect().top;
plank1.style.bottom=plank1.getBoundingClientRect().bottom;
plank2.style.top=plank2.getBoundingClientRect().top;
plank2.style.bottom=plank2.getBoundingClientRect().bottom;
ball.style.left=ball.getBoundingClientRect().left;
ball.style.right=ball.getBoundingClientRect().right;
ball.style.top=ball.getBoundingClientRect().top;
ball.style.bottom=ball.getBoundingClientRect().bottom;

var map=[];
map[81]=false;
map[65]=false;
map[73]=false;
map[75]=false;
var xSpeed;
var ySpeed;
var start;


document.addEventListener("keydown",func1);
document.addEventListener("keyup",func1);
document.addEventListener("mousedown",start);

function start(e){
     xSpeed=Math.floor(Math.random()*10)+3;
     ySpeed=Math.floor(Math.random()*10)+5;
     start=setInterval(move,100);
}

function move(){
	ball.style.top=(parseInt(ball.style.top)-ySpeed)+'px';
    ball.style.left=(parseInt(ball.style.left)-xSpeed)+'px';
    check();

}

function check(){
	if(ball.getBoundingClientRect().top-surf.getBoundingClientRect().top<ySpeed){
		ball.style.top=surf.getBoundingClientRect().top+'px';
		ySpeed=-1.2*ySpeed;
	}
	if(surf.getBoundingClientRect().bottom-ball.getBoundingClientRect().bottom<(-1*ySpeed)){
		ball.style.bottom=surf.getBoundingClientRect().bottom+'px';
		ySpeed=-1.2*ySpeed;
	}
	if(ball.getBoundingClientRect().left-plank1.getBoundingClientRect().right<xSpeed){
		if(ball.getBoundingClientRect().bottom<plank1.getBoundingClientRect().bottom&&ball.getBoundingClientRect().top>plank1.getBoundingClientRect().top){
		   ball.style.left=plank1.getBoundingClientRect().right+'px';
		   xSpeed=-1.1*xSpeed;
		}
		else{
			ball.style.left=surf.getBoundingClientRect().left+'px';
			window.clearInterval(start);
		}
	}
	if(plank2.getBoundingClientRect().left-ball.getBoundingClientRect().right<(-1*xSpeed)){
		if(ball.getBoundingClientRect().bottom<plank2.getBoundingClientRect().bottom&&ball.getBoundingClientRect().top>plank2.getBoundingClientRect().top){
		   ball.style.right=plank1.getBoundingClientRect().left+'px';
		   xSpeed=-1.1*xSpeed;
		}
		else{
			ball.style.right= surf.getBoundingClientRect().right+'px';
			window.clearInterval(start);
		}
	}
	
}

function func1(e){
	var keyCode=e.which;
	var type=e.type;
	if (map[keyCode]===true || map[keyCode]===false){
		if (type=="keydown"){
			map[keyCode]=true;
		}
		if (type=="keyup"){
			map[keyCode]=false;
		}
	}
      if(map[81]===true && surf.getBoundingClientRect().top < plank1.getBoundingClientRect().top){
      	if(plank1.getBoundingClientRect().top-surf.getBoundingClientRect().top<15){
			plank1.style.top=surf.getBoundingClientRect().top+'px';
		}
		else{
		plank1.style.top=(parseInt(plank1.style.top)-15)+'px';
      }
  }

      if(map[65]===true && plank1.getBoundingClientRect().bottom < surf.getBoundingClientRect().bottom){
      	if(surf.getBoundingClientRect().bottom-plank1.getBoundingClientRect().bottom<15){
			plank1.style.bottom=surf.getBoundingClientRect().bottom+'px';
		}
		else{
		plank1.style.top=(parseInt(plank1.style.top)+15)+'px';
      }
  }

  if(map[73]===true && surf.getBoundingClientRect().top < plank2.getBoundingClientRect().top){
      	if(plank2.getBoundingClientRect().top-surf.getBoundingClientRect().top<15){
			plank2.style.top=surf.getBoundingClientRect().top+'px';
		}
		else{
		plank2.style.top=(parseInt(plank2.style.top)-15)+'px';
      }
      }

      if(map[75]===true && plank2.getBoundingClientRect().bottom < surf.getBoundingClientRect().bottom){
      	if(surf.getBoundingClientRect().bottom-plank2.getBoundingClientRect().bottom<15){
			plank2.style.bottom=surf.getBoundingClientRect().bottom+'px';
		}
		else{
		plank2.style.top=(parseInt(plank2.style.top)+15)+'px';
      }
      }

}
