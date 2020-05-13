var maxscore = document.querySelector("input");
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var reset = document.querySelector("#reset"); 
var inputmax = document.querySelector("input");
var outputmax = document.querySelector("#max");
var p1score = 0;
var p2score = 0;
var max = 5;
var gameover = false;
p1.addEventListener("click",function(){
	if(!gameover)
	{
	p1score += 1;
	if(p1score == max) 
		{
			gameover = true;
			player1.classList.add("winner");
			player2.classList.add("loser");
		}	
	player1.textContent = p1score;	
    }
});
p2.addEventListener("click",function(){
	if(!gameover)
	{
	p2score += 1;
    if(p2score == max) 
    	{
    		gameover = true;
    		player2.classList.add("winner");
			player1.classList.add("loser");
    	}	
    player2.textContent = p2score;
    } 
});
function Reset()
{
	p1score = 0; 
	p2score = 0;
	player1.textContent = 0;
	player2.textContent = 0;
	gameover = false;
	player1.classList.remove("winner");
	player2.classList.remove("winner");
	player2.classList.remove("loser");
	player1.classList.remove("loser");
}
 reset.addEventListener("click",function(){Reset();});
 
 inputmax.addEventListener("change",function(){
  outputmax.textContent = this.value;
  max = Number(this.value);
  Reset();
 });