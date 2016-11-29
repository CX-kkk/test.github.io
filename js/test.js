var mood = "happy";
/*Array*/
var beatles = Array(4);
var beatles = Array();
beatles[0] = "John";
var beatles = ["John","Paul","George","Ringo"];
var years = Array(1940,1941,1942,1943);
var lennon = Array("John",1940,false);

var name = "John";
beatles[0] = name;

var lennon = Array();
lennon["name"] = "John";
lennon["year"] = 1940;
lennon["living"] = false;

if (3>2) {
	console.log("lalala.");
};

var a=1;
while(a<1){
	console.log(a);
	a++;
}

var b=1;
do {
	console.log(b);
	b++;
}while(b<1);

for (var i = 0; i < 1; i++) {
	console.log(i);
};


/*function*/
function shout(){
	var beatles = Array("John","Paul","George","Ringo");
	for (var i = 0; i < beatles.length; i++) {
	 	console.log(beatles[i]);
	 }; 
};
shout();


function multiply (num1,num2) {
	var total = num1 * num2;
	return total;
};
var total = multiply(3, 3);
console.log(total);

/*Object*/
var jeremy = new Person;
jeremy.age;
jeremy.mood;