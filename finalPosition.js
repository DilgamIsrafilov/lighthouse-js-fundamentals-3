const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  
const finalPosition = function (moves){
let final = [];
let x = 0;
let y = 0;
for(let move of moves){
if (move === "north"){
y++
}else if (move === "south"){
y--;
}else if (move === "west"){
x--;
}else if(move === "east"){
x++;
}
}
final.push(x,y);
return final
}
console.log(finalPosition(moves));
