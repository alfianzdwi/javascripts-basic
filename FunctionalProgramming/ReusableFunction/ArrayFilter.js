// Fungsi arrayDilter juga bawaan dari array berguna untuk penyaringan nilai didalam array berdasarkan spek tertentu
const myArray = [1, 2, 4, 6, 8, 10, 11, 15, 16, 18, 19, 20, 21]

const newMyArray = myArray.filter(number => number % 2 == 0) //Menyaring hanya nilai genap

console.log(newMyArray)