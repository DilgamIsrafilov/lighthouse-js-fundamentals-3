function lastIndexOf (array, num){
for(i = array.length - 1;i >= 0; i--){
if(array[i] === num) {
return i;
}
}
return -1
}

 console.log(lastIndexOf([1,2,3,2,2],2))
