// Berbeda dengan kotlin, java, c++ yg bahasa berbasis class. OOP pada Javascripts agak sedikit berbeda
// Sehingga cara membuat atau alurnya berbeda, di Javascripts tidak menggunakan class, melainkan prototype



//Contoh membuat blueprint atau class (jika di java/kotlin) pada Javascripts.
function Car(brand, color, maxSpeed, chasis) {
    this.brand = brand; //This merupakan  nilai dari dirinya sendiri (Car)
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chasis = chasis;
}

Car.prototype.drive = function () {
    console.log(`${this.brand} ${this.color} is driving`)
}

Car.prototype.reverse = function () {
    console.log(`${this.brand} ${this.color} is reversing`)
}

Car.prototype.turn = function () {
    console.log(`${this.brand} ${this.color} is turning`)
}


//Membuat objek dengan constructor function Car (harus kapital depannya). Mirip seperti bahasa lainnya, meng instance
const car1 = new Car('Ferrari', 'Red', 500, 'v16') //Memanggil fungsi Car untuk membuat Objek
const car2 = new Car('Lamborghini', 'White', 500, 'w16')
const car3 = new Car('Bugatti', 'Black', 400, 'z16')

console.log(car1)
console.log(car2)
console.log(car3)


car1.drive()
car2.reverse()
car3.turn()