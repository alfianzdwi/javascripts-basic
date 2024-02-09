// Spread Operator : Merupakan Fitur pada ES6 yang berguna untuk  meleburkan atau mengeluarkan nilai dari dalam array ataupun menggabungkan 2 objek, mirip seperti foreach
const family = ["Agus", "Narti", "Dimas", "Alfi", "Aryo"]
const family1 = ["Malik", "Diana", "Nadira", "Nizam"]

console.log(family)
console.log(...family)


const allFamily = [family, family1] //Tanpa Spread Operator jika menggabungkan dengan cara ini malah akan jadi Array 2 Dimensi
const alFamilys = [...family, ...family1] //Mengabungkan Dua Array agar tetap jadi array 1 Dimensi menggunakan Spread Operator


console.log(allFamily)
console.log(alFamilys)

const user = {
    name: "Alfian",
    age: 22
}

const user1 = {
    status: "Freshgraduate",
    isMarried: false
}


const newUser = { ...user, ...user1 } //Mengabungkan 2 Objek menggunakan Spread Operator

console.log(newUser)
