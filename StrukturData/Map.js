//Map mirip seperti Object memiliki key-value, bedanya key pada Map bisa bertipe data apapun dan pemisahnya pakai [] bukan ,

const myMap = new Map([
    ['1', 'A String Key'],
    [1, 'A Number Key'],
    [false, 'IsMarried']
])

console.log(myMap)
console.log(myMap.size)
console.log(myMap.get('1')) // Untuk mendapatkan Value menggunakan Key nya
myMap.set('Status', "Freshgraduate") // Untuk menambahkan pasangan key-value ke Map
console.log(myMap)

//Bisa juga cara seperti dibawah namun tidak dianjurkan, karena nanti tidak bisa menggunakan beberapa fitur bawaan Map
console.log(myMap[1])
myMap["Job"] = "No Job"

console.log(myMap)

console.log(myMap['No Job'])