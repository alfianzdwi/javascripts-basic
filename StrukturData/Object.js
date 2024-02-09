// Object : Merupakan struktur data yang berbentuk pasangan, ada key dan value bisa di isi dengan berbagai jenis tipe data. Dalam javascript object ini akan sering digunakan.

const employe = {
    fullname: "Alfian Dwi Prayoga",
    age: 22,
    status: "Freshgraduate",
    isMarried: false,
}

console.log(`Halo nama  saya ${employe.fullname}\ndan umur saya ${employe.age}, Saya merupakan seorang ${employe.status}`)

employe.fullname = "Dimas Bagas Prayoga" //Bisa mengubah nilai didalam Object employe karena ini bukan mengisialisasi seperti (employee = {}) tapi mengubah
employe["age"] = 25
employe.status = "Staff"
employe.gender = "Laki-Laki" //Ketika mengunakan operator assignment namun sebenanya properti  itu tidak ada, object akan otomatis menambahkan.

console.log(`Halo nama  saya ${employe.fullname}\ndan umur saya ${employe.age}, Saya merupakan seorang ${employe.status} dan ${employe.gender}`)

delete employe.age // Menghapus Propery

console.log(employe.age)