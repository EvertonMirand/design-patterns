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

const civic = new Car(4, 'v6', 'grey');
const cx5 = new Suv(4, 'v8', 'red', 4);
