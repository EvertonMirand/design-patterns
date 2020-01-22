class Car {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}
}

class Suv extends Car {
	constructor(doors, engine, color, wheels) {
		super(doors, engine, color);
		this.wheels = wheels;
	}
}

class SingletonCar extends Car {
	static instance = null;
	constructor(doors, engine, color) {
		if (SingletonCar.instance) {
			return SingletonCar.instance;
		}
		super(doors, engine, color);
		return this;
	}
}

const civic = new Car(4, 'v6', 'grey');
const cx5 = new Suv(4, 'v8', 'red', 4);
const civic2 = new SingletonCar(4, 'v6', 'grey');

console.log(civic);
console.log(cx5);
console.log(civic2);
