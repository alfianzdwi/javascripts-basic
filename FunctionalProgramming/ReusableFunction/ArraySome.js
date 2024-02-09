//ArraySome beguna untuk mencari kriteria tertentu terdapat pada array, ini akan menghasilkan Boolean, mirip operator OR jika dibandingkan dengan ArrayEvery

const myArray = [1, 2, 4, 6, 8, 10]

const isReal = myArray.some(num => num % 3 === 0)

console.log(isReal)