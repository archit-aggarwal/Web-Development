 var squares = document.querySelectorAll(".square");
 var reset = document.querySelector("#reset");
 var easy = document.querySelector("#easy");
 var hard = document.querySelector("#hard");
 var inputlength = 6;
 hard.classList.add("selected");

 easy.addEventListener("click",function(){
   inputlength = 3;
   easy.classList.add("selected");
   hard.classList.remove("selected");
   for(var i=3;i<6;i++)
   { squares[i].style.display = "none"; }
   Reset();
 });
 
 hard.addEventListener("click",function(){
   inputlength = 6;
   hard.classList.add("selected");
   easy.classList.remove("selected");
   for(var i=3;i<6;i++)
   	{ squares[i].style.display = "block"; }
   Reset();
 });

 function Reset()
 {
   reset.textContent = "New Colors? ";
   message.textContent = "";
   colors = colorarr(inputlength);
   correct = colors[pickrandom(colors.length)];
   rgb = document.querySelector("#rgb");
   rgb.textContent = correct;
   document.querySelector("h1").style.background = "steelblue";
   colorgame();
 }
 
 reset.addEventListener("click",function(){ Reset(); });
 
 function pickrandom(length)
 {
    return (Math.floor(Math.random()*length));
 }
 
 function colorrandom()
 {
    var r = (Math.floor(Math.random()*256));
    var g = (Math.floor(Math.random()*256));
    var b = (Math.floor(Math.random()*256));
    return("rgb(" + r + ", " + g + ", "+ b + ")");
 }
 
 function colorarr(length)
 {
 	var arr = [];
 	for(var i=0;i<length;i++)
 	{
 		arr.push(colorrandom());
 	}
 	return arr;
 }
 
 var colors = colorarr(inputlength);
 var correct = colors[pickrandom(colors.length)];
 var rgb = document.querySelector("#rgb");
 var message = document.querySelector("#message"); 
 rgb.textContent = correct;
 colorgame();

function colorgame()
{ 
 for(var i=0 ;i<inputlength;i++)
 {
 	squares[i].style.background = colors[i];
 	squares[i].addEventListener("click",function(){
      var picked = this.style.background;
 
      if(picked == correct) {
        message.textContent = "correct";
        for(var i=0;i<inputlength;i++)
          squares[i].style.background = picked;
        document.querySelector("h1").style.background = picked;
        reset.textContent = "Play Again?";
      }  
      else{
      	message.textContent = "Try Again!";
        this.style.background = "#232323";
      }
	});
 }
}