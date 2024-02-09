//Closure merupakan fungsi yang dapat mengakses variabel induk di dalam fungsinya, seperti child function
//Closure ada karena pada JavaScripts tidak ata fitur untuk membuat private method seperti di Java/Kotlin
function init() {
    const name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
      
    function greet() {      // Inner function, merupakan contoh closure
      console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }
  
    greet(); //Hanya bisa diakses dari dalam fungsi init()
}
  
init()


//Conntoh Fungsi Biasa
let counter = 0;

const add = () => {
  return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());


//Dengan Closure, agar counter tidak bisa diubah sembarangan
const addd = () => {
    let counter = 0;
      return () => {
        return ++counter;
    };
  }
  
  const addCounter = addd();
  
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());