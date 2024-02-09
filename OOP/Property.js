//Proprty merupakan atribut atau karakteristik yang dimiliki sebuah objek
class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`; // Tanda underscore "_" menandakan private, artinya property tersebut tidak boleh diubah/akses dari luar class, wajib menggunakan getter/setter 
    }
   
    //Getter untuk mengakses accesor property
    get chassisNumber() {
      return this._chassisNumber;
    }
   
    //Set dibuat agar property tidak sembarangan diubah
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
  }
   
  const car = new Car('BMW', 'red', 200);
  console.log(car.chassisNumber);
  car.chassisNumber = 'BMW-1';
  console.log(car.chassisNumber);