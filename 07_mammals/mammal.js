var Mammal = function(theName)
{
	this.name = theName;
	this.offspring = [];
}

Mammal.prototype.sayHello = function()
{
	return "My name is "+this.name+", I'm a Mammal";
}

Mammal.prototype.haveBaby = function()
{
	var babyName = "Baby "+this.name;
	var baby = new Mammal(babyName);
	this.offspring.push(baby);
	return baby;
}


var Cat = function(theName,theColor)
{
	Mammal.call(this,theName);
	this.color = theColor;
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby = function(color)
{
	var babyName = "Baby "+this.name;
	var baby = new Cat(babyName,color);
	this.offspring.push(baby);
	return baby;
}