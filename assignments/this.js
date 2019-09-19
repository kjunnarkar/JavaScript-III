/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when you use the "this" keyword on the global scope. The this keyword then applies to the window object which is all of Javascript. It can crash your system.

* 2. Implicit binding is automatic when the function is invoked. This can only be used for objects with methods. "this" refers to the object left of the dot.

* 3. In new binding, by using the "new" key word, a new object is created and then the "this" key word points to that object.

* 4. In explicit binding, the three types of explicit binding are: call, apply, and bind. The function is invoked immediately by using these.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function myTeam() {
    console.log(`My favorite team is the ${this.team}`);
}
const team = "Angels";
myTeam();

// Principle 2
// code example for Implicit Binding
const lasVegas = {
    dayFun: "Swimming Pool",
    nightFun: "Night club",
    favBuffet: "Rio Seafood",
    favHike: "Red Rock Canyon",
    favLake: "Lake Meade",
    toDo: function() {
        return `In Las Vegas I like to use the ${this.dayFun} in the heat of the day. I also like to visit ${this.favHike} and ${this.favLake}. At night, I like to eat at ${this.favBuffet} and go to the ${this.nightFun}.`;
    } 
};
console.log(lasVegas.toDo());

// Principle 3
// code example for New Binding
function outdoorFun(act1, act2) {
    this.running = act1;
    this.softball = act2;
}
let outSide = new outdoorFun("running","softball");
console.log(`My favorite exercise activities are ${outSide.running} and ${outSide.softball}.`);

// Principle 4
// code example for Explicit Binding

function myFavPlace() {
    console.log(`My favorite place is ${this.city} in ${this.state}.`);
}
const visit = {
    city: "Kaanapali Beach",
    state: "Hawaii"
};
myFavPlace.call(visit);
