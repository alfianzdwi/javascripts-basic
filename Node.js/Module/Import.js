//Module Berguna untuk memecah sebuah proyek menjadi berkas-berkas kecil yang nantinya bisa digunakan menjadi satu-kesatuan
//Untuk mempurmudah maintenance kode, menemukan error, dll.

//Menggunakan teknik Destructing untuk melakukan import lebih dari 1 nilai
const { coffeeStock: coffees, isCoffeeMachineReady: machineCoffeee } = require('./Export') //Import digunakan untuk menggunakan kode yang sudah di Exports dari berkas lain

//import { coffeeStock as coffees,isCoffeeMachineReady  } from './Export' //Import menggunakan fitur ES6


const makeCoffee = (type, miligrams) => {
    if (coffees[type] >= miligrams) {
        console.log("Kopi Berhasil Dibuat!")
    } else {
        console.log("Biji Kopi Kurang!!")
    }
}

makeCoffee("liberica", 200)
console.log(machineCoffeee)