//Perulangan untuk menghindari kode yang sama berulang kali untuk melakukan hal yang sama
/**
 * Contoh : 
 * 
 * console.log(1)
 * console.log(2)
 * console.log(3)
 * console.log(4)
 * console.log(5)
 * console.log(6)
 */


//For Lopp
for (let i = 1; i < 7; i++){
    console.log(i)
}

//For of Loop
let myArray = [1, 2, 3, 4, 6, 7, 8, 9, 10]

for (const arrayItem of myArray) {
    console.log(arrayItem)
}


//While : Tidak memiliki  ketergantungan dengan variabel iterasi (i/j), While lebih cocok digunakan kita tidak tau pasti berapa banyak perulangan yang akan dilakukan misal saat mengambil data dari API
let j = 1

while (j <= 15) {
    console.log(j)
    j++
}

// Do While : Beda dengan While yang nilai akan Dievaluasi dahulu baru menjalankan kode didalamnya, Do While ini menjalankan blok kdeonya dulu baru melakukan Evaluasi
let k = 1

do {
    console.log(k)
    k++
} while ( k <= 10)