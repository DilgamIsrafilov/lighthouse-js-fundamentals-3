function howManyHundreds(num){
const hundred = Math.trunc(num/100)
if(hundred % 100 >= 1){
}else{
console.log(0)
}
return hundred
}
console.log(howManyHundreds(899))
