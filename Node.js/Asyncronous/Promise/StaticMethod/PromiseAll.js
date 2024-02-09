// Promise All digunakan untuk mngeksekusi banyak Promise secara paralel, method ini menerima sebuah array yang berisi beberapa Promise sebagai Argument/Parameter

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 2000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups')), 1000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 5000));


//Tetap dijalankan sesuai urutan pada Array walaupun setTimeout lebih cepat ynag di indeks 2 misal
Promise.all([promise1, promise2, promise3])
    .then((values) => console.log(values))
    .catch((err) => console.log(err.message)) //Jika terdapat Rejection pada salah satu Promise maka akan langsung menghasilkan Rejection meskipun Promise yang lain statusnya Fulfilled