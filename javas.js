var spn = document.getElementById("spn"),
    boxes = document.querySelectorAll("#main div"),
    turn = 0,
    button = document.getElementById("hid"),
    submit = document.getElementById("submit"),
    welcome = document.getElementById("form");
const form = document.querySelector('form'),p1 = document.querySelector("#player1"),
      p2 = document.querySelector("#player2");
function selectWinnerBoxes(b1,b2,b3){
    b1.classList.add("won");//we will, we will rock you
    b2.classList.add("won");//we will, we will rock you
    b3.classList.add("won");//we will, we will rock you
    spn.innerHTML = b1.innerHTML + " won"
}

function getWinner(){
    var box1= document.getElementById("box1"),
        box2= document.getElementById("box2")
        box3= document.getElementById("box3"),
        box4= document.getElementById("box4"),
        box5= document.getElementById("box5"),
        box6= document.getElementById("box6"),
        box7= document.getElementById("box7"),
        box8= document.getElementById("box8"),
        box9= document.getElementById("box9");

        //all possible combinations result
        if(box1.innerHTML != "" && box1.innerHTML === box2.innerHTML && box3.innerHTML === box1.innerHTML)
            selectWinnerBoxes(box1,box2,box3);
        if(box4.innerHTML != "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
            selectWinnerBoxes(box4,box5,box6);
        if(box7.innerHTML != "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box7,box8,box9);
        if(box1.innerHTML != "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box1,box4,box7);
        if(box2.innerHTML != "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
        selectWinnerBoxes(box2,box5,box8);
        if(box3.innerHTML != "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box3,box6,box9);
        if(box1.innerHTML != "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box1,box5,box9);
        if(box3.innerHTML != "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box3,box5,box7);
}


function check()
{
    if((localStorage.getItem('player1'))&&(localStorage.getItem('player2')))
    {
        
        let player1 = localStorage.getItem('player1');
        let player2 = localStorage.getItem('player2');
    for(var i =0; i < boxes.length; i++){
        boxes[i].onclick = function(){
            button.classList.remove("hidden");
            if( this.innerHTML !== "X" && this.innerHTML !== "0"){
                
                  
            if(turn%2 === 0)
                {
                    
                    this.innerHTML ="X";
                spn.innerHTML =player2 + "'s turn";}
            else 
                {
                    
                    this.innerHTML = "0";
                spn.innerHTML =player1 + "'s turn";}
            turn++;
            getWinner();
        }
    }
    }
}
else{for(var i =0; i < boxes.length; i++){
    boxes[i].onclick = function(){
        button.classList.remove("hidden");
        if( this.innerHTML !== "X" && this.innerHTML !== "0"){
            
              
        if(turn%2 === 0)
            {
                
                this.innerHTML ="X";
            spn.innerHTML ="0s turn";}
        else 
            {
                
                this.innerHTML = "0";
            spn.innerHTML ="Xs turn";}
        turn++;
        getWinner();
    }
}
}}
}   
function replay(){
    for(var j=0;j<boxes.length;j++){
        boxes[j].innerHTML="";
        boxes[j].classList.remove("won");
    }
    welcome.classList.remove("hidden");
}
submit.addEventListener('click', function(){
    
    localStorage.setItem('player1',p1.value);
    localStorage.setItem('player2',p2.value);
    check();
    welcome.classList.add("hidden");
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
  });
  