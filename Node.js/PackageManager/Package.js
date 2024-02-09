//Package manager merupakan tools yang dapat membantu pengelolaan package pada proyek agar lebih mudah. Kita dapat dengan mudah memasang dan menghapus package yang dibuat oleh orang lain pada proyek kita. Selain itu, kita juga dapat menulis module/package untuk dikonsumsi secara publik.
//Package di sini merupakan sebuah kode yang dibuat untuk menyelesaikan suatu masalah, yang dibuat oleh Developer lain


import _ from 'lodash' //Cara menggunakan Package

//Tanpa Package untuk menjumlahkan nilai di dalam Array
const myArray = [1, 2, 3, 4];
let sum = 0;
 
for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
 
console.log(sum);


//Menggunakan Lodash
const myArrays = [1, 2, 3, 4];
const sums = _.sum(myArrays);
 
console.log(sums);