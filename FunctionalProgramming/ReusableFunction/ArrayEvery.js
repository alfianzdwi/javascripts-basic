//Array every mirip seperti ArraySome mencari semua nilai didalam array apakah memenuhi kriteria yang diinginkan, bedanya ini semuanya mirip operator AND
const myArray = [1, 2, 4, 6, 8, 10]

const isSuccess = myArray.every(num => num % 3 === 0)

console.log(isSuccess) //Akan False karena tidak semua nilai memenuhi kondisi