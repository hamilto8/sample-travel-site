class Person  {
	constructor(name, color) {
		this.name = name;
		this.color = color;
	}
	
	greet(){
		console.log('Aloha, I am ' + this.name + ' and my favorite color is ' + this.color);
	}
}
//***TRADITIONAL NODE JS WAY TO EXPORT***
// module.exports = Person;

//***NEW ES6 WAY***
export default Person;