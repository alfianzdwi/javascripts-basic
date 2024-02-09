//Module Berguna untuk memecah sebuah proyek menjadi berkas-berkas kecil yang nantinya bisa digunakan menjadi satu-kesatuan
//Untuk mempurmudah maintenance kode, menemukan error, dll.


const coffeeStock = {
    arabica: 100,
    robusta: 200,
    liberica: 250,

}

const isCoffeeMachineReady = true;


module.exports = { coffeeStock, isCoffeeMachineReady}; //Untuk Mengekspor suatu kode, agar dapat digunakan/import di berkas/file lain

//export {coffeeStock, isCoffeeMachineReady}; //Export menggunakan fitur ES6