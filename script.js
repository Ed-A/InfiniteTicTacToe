let n=0;
let X=0;
let O=0;
let x_array = [];
let o_array = [];
let element;

window.addEventListener("click", exe);

function exe(){

	let main = event.srcElement;
	let id = main.id;
  
	if(id != "" && main.innerHTML==""){
    write(main, id);    
      
    if(X==3 && O==3){
      blinkit();
    }

    if(X>3 || O>3){
      clearblink();
      if(O>3){
        --O;
      }else{
        --X;
      }
      blinkit();
    }
  }

  if(x_array.length==3){
    if(checkit('x')){
      window.removeEventListener("click", exe);
      justclear();
    }
  }

  if(o_array.length==3){
    if(checkit('o')){
      window.removeEventListener("click", exe);
      justclear();
    }
  }

}

function checkit(symbol){
  
    let array = [];

    switch(symbol){
      case 'x':
        array = x_array;
        break;
      case 'o':
        array = o_array;
        break;
    }

    //for diagonal win
    if((array.includes('00') && array.includes('11') && array.includes('22')) ||(array.includes('02') && array.includes('11') && array.includes('20')) ){
      switch(symbol){
        case 'x':
          X_win();
          break;
        case 'o':
          O_win();
          break;
      }
      return true;
    }

    let x1 = parseInt(array[0][0]);
    let x2 = parseInt(array[1][0]);
    let x3 = parseInt(array[2][0]);
    let y1 = parseInt(array[0][1]);
    let y2 = parseInt(array[1][1]);
    let y3 = parseInt(array[2][1]);

    //for horizontal win
    if((x1+x2+x3 == 3 && y1==y2 && y2==y3)){
      switch(symbol){
        case 'x':
          X_win();
          break;
        case 'o':
          O_win();
          break;
      }
      return true;
    }


    //for vertical win
    if((y1+y2+y3 == 3) && (x1==x2 && x2==x3)){
      switch(symbol){
        case 'x':
          X_win();
          break;
        case 'o':
          O_win();
          break;
      }
      return true;
    }
}

function O_win(){
  document.getElementById('display').innerHTML = "<a style='color: #FDADC8;'>O wins!</a>";
  document.getElementById('reload').classList.remove('hidden');
}

function X_win(){
  document.getElementById('display').innerHTML = "<a style='color: #3E46CB;'>X wins!</a>";
  document.getElementById('reload').classList.remove('hidden');
}
  
function clearblink(){
  element.innerHTML = "";
  element.classList.remove("blink");
}

function justclear(){
  element.classList.remove("blink");
}

function blinkit(){
		if(n%2==0){
      element = document.getElementById(o_array[0]);
      o_array.shift();
    }else{
      element = document.getElementById(x_array[0]);
      x_array.shift();
    }
    element.classList.add("blink");
}

function write(element, id){
    if(n%2==0){
      element.innerHTML = "<img src='O.png'>";
      n++;
      O++;
      o_array.push(id);
    }else{
      element.innerHTML = "<img src='X.png'>";
      n++;
      X++;
      x_array.push(id);
    }
}