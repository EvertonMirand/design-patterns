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
	constructor({ doors = 4, engine = 'v6', color = 'blue' }) {
		if (SingletonCar.instance) {
			return SingletonCar.instance;
		}
		super(doors, engine, color);
		return this;
	}
}

class CarFactory {
	createCar(type) {
		switch (type) {
			case 'civic':
				return new Car(4, 'v6', 'grey');
			case 'honda':
				return new Car(2, 'v4', 'red');
			case 'suv':
				return new Suv(4, 'v8', 'black', 6);
			default:
				return new SingletonCar({});
		}
	}
}

const factory = new CarFactory();

const civic = factory.createCar('civic');
const honda = factory.createCar('honda');
const civic2 = factory.createCar('hi');
const suv = factory.createCar('suv');

console.log(civic);
console.log(honda);
console.log(civic2);
console.log(suv);
