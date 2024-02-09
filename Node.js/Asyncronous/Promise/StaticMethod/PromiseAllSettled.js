//Sama seperti Promise All tapi mengembalikan nilainya bukan Array melainkan Array of Object

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 2000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups Error')), 1000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 5000));


Promise.allSettled([promise1, promise2, promise3])
    .then((values) => console.log(values))
    .catch((error) => console.log(error.message)) //Jika terdapat salah satu Rejection semua Promise akan tetap di eksekusi dan mengembalikan semua nilai Promise