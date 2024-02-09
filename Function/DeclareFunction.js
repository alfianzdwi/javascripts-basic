// Function Non Parameter
function perkalian(){
    return 10 * 5;
}

// Function With Parameter
function penjumlahan(a, b){
    return a + b;
}

function salam(nama, bahasa) {
    if (bahasa === "English") {
        console.log("Good Morning")
    } else if (bahasa === "Indonesia") {
        console.log("Selamat Pagi")
    } else {
        console.log(`Woy ${nama}`)
    }
}

console.log(perkalian())
console.log(penjumlahan(5, 9))
salam("Alfian", "English")
salam("Alfian")


//Expression Function : Menampung Fungsi dengan sebuah Variabel

const total = function (x, y) {
    return x += y
}

console.log(total(20, 40))