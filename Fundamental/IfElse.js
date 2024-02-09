// If Else, Digunakan untuk menentukab sebuah kondisi, dimana jika bernilai True maka blok kode tertentu akan dijalankan

const grade = 90

if (grade >= 90) {
    console.log("Selamat Anda Lulus Dengan Nilai A")
}else if (grade >= 80) {
    console.log("Selamat Anda Lulus Dengan Nilai B")
}else {
    console.log("Maaf Kamu Belum Lulus")
}


//Tenary Operator : Digunakan untuk menuliskan kondisi IfElse hanya dengan 1 Baris
const fit = false;
const kondisi = fit ? "Lakukan Kegiatan" : "Diam Dirumah Saja"

console.log(kondisi)

