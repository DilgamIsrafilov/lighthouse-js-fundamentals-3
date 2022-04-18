
function calculateRectangleArea(length,width){
let areaRec = length * width;
if(length > 0 && width > 0 ){
return areaRec
}else if(length < 0 || width < 0){
console.log("undefined")
}else if(length === 0 || width === 0){
console.log(0)
}
return areaRec
}
console.log(calculateRectangleArea(10,0))

function calculateTriangleArea(base, height){
let areaTri = base * height/2;
if(base >= 0 || height >= 0 ){
return areaTri
}else if(base < 0 || height < 0){
console.log("undefined")
}
return areaTri
}
console.log(calculateTriangleArea(10,5))

function calculateCircleArea(radius){
let areaCirc = Math.PI * radius * radius;
if(radius >= 0 ){
return areaCirc
}else if(radius < 0){
console.log("undefined")
}
return areaCirc
}
console.log(calculateCircleArea(10))
