var x = 0;
var y = 1;
var z = [];
var sum = 0;

while (z < 4000000) {
z = x + y;
x = y;
y = z;
if(z % 2 === 0) {
sum += z;
console.log(z);
}};
console.log(sum);