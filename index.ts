let x: number = 5;

console.log("hello typescript");

let str: string = "hello";

function add(x: number, y: number): number {
    return x + y;
}

function userClickBtn() {
    console.log((document.querySelector("#fnameInput") as HTMLInputElement).value);
}


class Car {
    manufacturer: string;
    model: string;
    year: number;
    plate: string;
    price: number;

    constructor(mnftr: string, mdl: string, year: number, plate: string, price: number) {
        this.manufacturer = mnftr;
        this.model = mdl;
        this.year = year;
        this.plate = plate;
        this.price = price;
    }


    toString(): string {
        return `the car with the plate ${this.plate} is a ${this.manufacturer} ${this.model}, it was built on ${this.year}, and sells for ${this.price}`
    }

    discountTenPercent(): void {
        this.price = 0.9 * this.price;
    }

    discountBy(howMuch: number) {
        if (howMuch > 10 && howMuch < 25) {
            this.price = this.price - howMuch;
        }
    }
}

class Person {
    firstName: string;
    lastName: string;
    phone: string;
    birthYear: number;
    hasDriverLicense: boolean;
    car: Car | null;

    constructor(firstName: string,
        lastName: string,
        phone: string,
        birthYear: number,
        hasDriverLicense: boolean,
        car: Car | null = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.birthYear = birthYear;
        this.hasDriverLicense = hasDriverLicense;
        this.car = car;
    }

    toString() {
        return `${this.firstName} ${this.lastName}, was born on ${this.birthYear}` +
            `, ${this.firstName} ${this.hasDriverLicense ? "can drive a car" : "can't drive"}` +
            `${this.hasDriverLicense ? this.car?.toString() : ""}`
    }
}

let car1 = new Car("Mazda", "6", 2020, "324-35-7765", 1000000);
console.log(car1.toString());
car1.discountTenPercent();
console.log(car1.toString());
car1.discountBy(500);
console.log(car1.toString());


// car1.manufacturer = "Mazda";
// car1.model = "6";
// car1.year = 2020;
// car1.plate = "324-35-7765";


let car2 = new Car("Subaru", "Outback", 2018, "kdyb72", 80000);
console.log(car2.toString());
car2.discountTenPercent();
console.log(car2.toString());
car2.discountBy(500);
console.log(car2.toString());

// car2.manufacturer = "Subaru";
// car2.model = "Outback";
// car2.year = 2018;
// car2.plate = "kdyb72";

let p1 = new Person("john", "doe", "123-456-7890", 2000, true, car1);
let p2 = new Person("lamar", "weshahi", "333-546-8798", 2001, false, null);
console.log(p1.toString());
console.log(p2.toString());

