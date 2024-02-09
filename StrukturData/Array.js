// Array memrupakan tipe data yang dapat menampung beberapa nilai,  cara mengaksesnya berdasarkan indeks

let myArray = ["Alfian", 22, false, "Freshgraduate", "Male"]


console.log(myArray)

console.log(myArray[3]) //Mengakses Array Menggunakan Indeks


for (item of myArray) {
    console.log(item)
}

for (let i = 0; i <= myArray.length - 1; i++){
    console.log(myArray[i])
}


myArray.push('Play Game') //Operasi Untuk Menambahkan Elemen Ke Array Pada Posisi Terakhir
console.log(myArray)
myArray.pop() //Operasi Untuk Menghapus Elemen Terakhir Array
console.log(myArray) 
myArray.shift() //Operasi Untuk Menghapus Elemen Awal Pada Array
console.log(myArray)
myArray.unshift("Aryo") //Operasi Untuk Menambahkan Elemen Pada Awal Array
console.log(myArray)

delete myArray[2] //Menghapus Nilai/Datanya Berdasarkan Indeks, namun Elemennya masih ada
console.log(myArray)

myArray.splice(2, 1) //Digunakan untuk menghapus Elemen, Indeks 2 dan 1 Elemen
myArray.splice(1, 0, "Bojonggede") //Digunakan untuk menambahkan Elemen,
console.log(myArray)