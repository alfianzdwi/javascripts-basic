//Try Catch  digunakan untuk error handling agar saat inputan user menyebabkan error program tidak langsung berhenti tetapi ditangani

//Try di isi dengan kode yang ada kemungkinan menyebabkan Error
try {
    const myArray = [1, 2, 3, 4, 5]
 
    myArray = [2] //Mencoba menginisialisasi kembali Array dengan var Constan
    errorCode;
    console.log(myArray)
    
} catch (error) { //Blok kode Catch akan dieksekusi jika terjadi error
    console.log(error.name)
    console.log(error.message)
} finally { //Blok kode Finally akan dieksekusi apapun yang terjadi
    console.log('Akan tetap dieksekusi apappun yang terjadi')
}