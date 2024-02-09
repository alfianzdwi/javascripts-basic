//Secara default pembuatan blueprint pada Javascripts menggunakan Function,
//Namun ES6 menyediakan untuk membuat blueprint menggunakan class seperti bahasa lainnya

class Car {
    constructor(brand, color, maxSpeed, chasis) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed
        this.chasis = chasis
    }

    drive () {
        console.log(`${this.brand} ${this.color} is driving`)
    }

    reverse () {
        console.log(`${this.brand} ${this.color} is reversing`)
    }

    turn () {
        console.log(`${this.brand} ${this.color} is turning`)
    }
    
}


const car1 = new Car('Ferrari', 'Red', 500, 'v16') //Memanggil fungsi Car untuk membuat Objek
const car2 = new Car('Lamborghini', 'White', 500, 'w16')
const car3 = new Car('Bugatti', 'Black', 400, 'z16')

console.log(car1)
console.log(car2)
console.log(car3)


car1.drive()
car2.reverse()
car3.turn()