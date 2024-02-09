// Set merupakan tipe data yang dapat menyimpan beberapa nilai namun bersifat unik tidak ada duplikat, dan juga tidak ada aturan Indeks
const grade = new Set([80, 96, 67, 50, 86, 80, 80])

console.log(grade)

grade.add(75) //Untuk menambahkan nilai ke Set
grade.delete(80) //Untuk menghapus nilai di Set, berdasarkan nilainya karena tidak ada Indeks

console.log(grade)