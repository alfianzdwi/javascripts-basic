// Destructing : Untuk mengekstraksi/mengeluarkan suatu nilai/property dari dalam objek ke sbuah variabel
//let isMarried = true
//let status = "Student"

const profile = {
    firstName: "Alfian",
    lastName: "Dwi P",
    age: 22,
    status: "Freshgraduate",
    isMarried: false
}


const { age, firstName, isAlive = true } = profile // Melakukan Destructing Ke Variabel yang belum ada
const {firstName: localFirstName} = profile //Melakukan Destructing dengan nama Variabel Lokal yang beda dengan Property pada Object


console.log(firstName)
console.log(age)
console.log(isAlive)
console.log(localFirstName)




//({isMarried, status} = profile) //Melakukan Destructing ke Variabel yang sebelumnya sudah ada atau melakukan assignment menggunakan nilai hasil Destucring
//console.log(isMarried)