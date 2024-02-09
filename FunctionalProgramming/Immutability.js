// FP juga ada konsep Immutability yaitu sebuah objek tidak boleh diubah setelah objek tersebut dibuat
const names = ['Harry', 'Adoy', 'Swan', 'Ardhi', 'Alfian']


const newNameWithExcMarks = names.map((name) => `${name}!`) // Array Map akan menciptakan array baru, tidak mengubah nilai array yang lama (names)

console.log(newNameWithExcMarks)


//Contoh 2 : Jika benar2 perlu merubah nilai sebuah objek maka akan seperti ini, tujuan tercapai namun ini bukan konsep FP
const user = {
    firstname: 'Harry',
    lastName: 'Nrugoho',
    age: 20
}

const renameLastnameAge = (age, newLastname, user) => {
    user.lastName = newLastname
    user.age = age
}

renameLastnameAge(22, 'Nugroho', user)

console.log(user)


//Contoh 3 : Cara ingin dengan konsep FP, yaitu dengan membuat objek baru berdasarkan objek lama
const createUserWithNewLastname = (newAge, newLastname, user) => {
    return {...user, lastName: newLastname, age: newAge}
}


const newUser = createUserWithNewLastname(25, 'Potter', user)
console.log(newUser)