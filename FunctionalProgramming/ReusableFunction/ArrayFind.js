//Seperti namanya ArrayFind berguna untuk mencari apakah di dalam array ada kriteria tertentu, mirip seperti some
//Bedanya ini akan menghasilkan nilai yang ditemukan bukan Boolean, jika tidak ditemukan akan mengembalikan undefined

const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
];
  

const bestStudent = students.find((student) => student.name === 'James')
const otherStudent = students.find((student) => student.name === 'Riyadi')

console.log(bestStudent)
console.log(otherStudent)
