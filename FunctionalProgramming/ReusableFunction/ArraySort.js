//Seperti namanya ArraySort berguna untuk mengurutkan nilai di dalam array
const myArray = ['A', 'B', 'D', 'L', 'C', 'I', 'M']
const myMonths = [12, 4, 5, 1, 11, 2, 24]


myArray.sort();
myMonths.sort();


console.log(myArray)
console.log(myMonths) //Hasilnya diurutkan berdasarkan 1 digit pertama



//Contoh mengurutkan sesuai kriteria yang kita mau
const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};

const sorting = array1.sort(compareNumber);

console.log(sorting);


/**
 * Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).

Jika, negative maka `a` akan diletakkan sebelum `b`
Jika, positive maka `b` akan diletakkan sebelum `a`
Jika, 0 maka tidak ada perubahan posisi.
 */
