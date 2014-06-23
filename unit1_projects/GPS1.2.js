// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.William Davis
//  2.


// 0. "YOU SIGNED... WHO?!"
Vince Vaughn
30
"Great moments are born from great opportunities!"

// 1. "Here they Come!"
var adam = {
    name: "adam sandler",
    age: 47,
    quote: "That's your home! Are you too good for your home?!"
};
    
var kristen = {
    name: "kristen bell",
    age: 33,
    quote: 'Do you wanna build a snowman?'
};

var jim = {
    name: 'jim carrey',
    age: 52,
    quote: '...So you/'re telling me there's a chance? YEAH!'
};

var Client=function (name, age, quote){
    this.name=name; this.age=age; this.quote=quote;
        
}




// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
console.log(shooterMcGavin.constructor === Client);
console.log(shooterMcGavin.age === 48);
console.log(shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.");


// 3. "SHOW 'EM OFF!"

var list = [kristen,jim,adam]
    for (var i=0; i<list.length; i++){
        console.log("My name is "+ list[i].name + ",my age is" + list[i].age + "," + list[i].quote);
    }

// 4. "But wait, there's more!"
adam["showQuote"]=function(){
    console.log (this.quote)
}

// 5.  ** BONUS **
var statement = "This service provided by Matt, Will, and Mike... Agents of the Stars";
adam["showStatement"]= statement
console.log(adam.showStatement)
 