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
  constructor({ doors = 4, engine = "v6", color = "blue" }) {
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
      case "civic":
        return new Car(4, "v6", "grey");
      case "honda":
        return new Car(2, "v4", "red");

      default:
        return new SingletonCar({});
    }
  }
}

class SuvFactory {
  createSuv(type) {
    switch (type) {
      case "idk":
        return new Suv(4, "v8", "black", 6);
      case "honda":
        return new Suv(8, "v900", "blue", 9);

      default:
        return new Suv(6, "v100", "red", 6);
    }
  }
}

let carMixin = {
  revEngine() {
    console.log(`The ${this.engine} is doing Vromm Vroom`);
  }
};

Object.assign(Car.prototype, carMixin);

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

// Abstract
const autoManufacturer = (type, model) => {
  switch (type) {
    case "car":
      return carFactory.createCar(model);
    case "suv":
      return suvFactory.createSuv(model);
  }
};

const civic = autoManufacturer("car", "civic");

const honda = carFactory.createCar("honda");
const civic2 = carFactory.createCar("hi");
const suv = autoManufacturer("suv", "idk");

console.log(civic);
console.log(honda);
console.log(civic2);
console.log(suv);

civic.revEngine();

// Observer
class Car {
  constructor(gas) {
    this.gas = gas;
  }

  setGasLevel(val) {
    this.gas = val;
    this.notifyAll();
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions.remove.filter(function(el) {
      return el !== observer;
    });
  }

  notifyAll() {
    return this.actions.forEach(
      function(el) {
        el.update(this);
      }.bind(this)
    );
  }
}

class cusumption {
  update(car) {
    car.gas = car.gas + 1;
  }
}
