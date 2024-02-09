//Arrow Function FItur pada ES6 untuk mempersingkat Expression Function

//Fungsi Regular
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}


//Fungsi Arrow
const sayMyName = (name) => {
    console.log(`Nama saya ${name}`)
}

//Ketika body fungsi hanya satu baris tidak perlu menggunakan kurung kurawal {}, //Tanpa perlu menuliskan return
const sayMyNameAgain = () => console.log(`Nama saya Dimas`)
const pengurangan = (a, b) => a - b 


sayName('Alfian')
sayMyName('Aryo')
sayMyNameAgain()
console.log(pengurangan(20, 10))
