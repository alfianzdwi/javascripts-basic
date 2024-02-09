//Promise Race digunakan untuk mengeksekusi beberapa Promise secara paralel sama seperti All
//Namun bedanya Race ini hanya akan mengembalikan nilai Promise yang eksekusinya paling cepat

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 2000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups Error')), 1000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 800));


Promise.race([promise1, promise2, promise3])
    .then((value) => {
        return console.log(value)
    })
    .catch((error) => console.log(error.message)) //Jika ada Promise error tetap mengembalikan Promise dengan waktu yang tercepat, jadi intinya tetap bergantung waktu eksekusinya

