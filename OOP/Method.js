//Method meurpakan sebuah fungsi yang ada di class/blueprint dapat diakses melalaui intance class ataupun objek
class Carr {
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;                           // Pada ES2022 tanda pagar "#" lah yang benar2 private, karena bersifat memproteksi, kalau komunitas hanya perjanjian walaupun sebenarnya masih bisa diakses
        this._chassisNumber = this._generateChasisNumber(); // Tanda underscore "_" menandakan private sudah disepakati komunitas, artinya property tersebut tidak boleh diubah/akses dari luar class, wajib menggunakan getter/setter 
    }


     //Getter untuk mengakses accesor property
     get chassisNumber() {
        return this._chassisNumber;
      }
     
      //Set dibuat agar property tidak sembarangan diubah
      set chassisNumber(chassisNumber) {
        console.log('you are not allowed to change the chassis number');
    }
    


    //Methods
    drive () {
        console.log(`${this.brand} ${this.color} is driving`)
    }

    reverse () {
        console.log(`${this.brand} ${this.color} is reversing`)
    }

    turn () {
        console.log(`${this.brand} ${this.color} is turning`)
    }

    acceleration(a) {
        console.log(`${this.brand} have ${a} acceleration`)
    }

    //Method tidak hanya digunakan untuk diluar class, namun bisa digunakan untuk internal class, agar mudah dibaca
    _generateChasisNumber() {
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
    
}

const car1 = new Carr(`Toyota`, `Blue`, 200)

car1.drive() // Memanggil methods
car1.acceleration(80)
console.log(car1.chassisNumber)





class Mail {
    constructor(sender, receiver, subject, body) {
      this.sender = sender;
      this.receiver = receiver;
      this.subject = subject;
      this.body = body;
    }
   
    // Methods
    send() {
      console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
    }
   
    sendLater(delay) {
      console.log(`Sending after ${delay} ms`);
   
      setTimeout(() => {
        this.send();
      }, delay);
    }
   
    saveAsDraft() {
      console.log('Saving mail as draft');
    }
}
  

const mail1 = new Mail('Alfian', 'Aryo', 'Testing', 'Testing Unit 1')

mail1.send()
mail1.sendLater(5000)