// Fungsi arrayMap merupakan fungsi bawaan array yang akan menghasilkan array baru berdasarkan array lama
const myArray = [1, 2, 4, 6, 8, 10]

const newArray = ['Harry', 'Aldo', 'Alfian', 'Ardhi'].map((name) => { return `${name}!!` });

const newMyArray = myArray.map((number) => {return number * 10})

console.log(newArray)
console.log(myArray)
console.log(newMyArray)
