//Dalam kenyataan langsung biasanya kita tidak bisa me reactor langsung kode yg berbasis Callback menjadi Promise
//Entah karena menggunakan banyak library, kode dll.

//Promisify merupakan sebuah fungsi yang berguna untuk me refactor kode berbasis Callback menjadi Promise dengan mudah
const { promisify } = require('util')

function getUsers(isOffline, callback) {
     //Simulasi delay karena jaringan
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
    
      if (isOffline) {
        callback(new Error('Tidak bisa mendapatkan data users karena sedang Offline'), null);
        return;
      }
   
      callback(null, users);
    }, 3000);
}
  

//Menggunakan versi Promise dari Fungsi yang berbasis Callback, promisfy akan menganggap jika Callback di posisi akhir dari Argument/Params, akan bekerja baik jika fungsi Callback memiliki struktur callback(error, data)
const getUsersPromise = promisify(getUsers)


getUsersPromise(false)
    .then(dataUser => console.log(dataUser))
    .catch(err => console.log(err.message))


getUsersPromise(true)
    .then(dataUser => console.log(dataUser))
    .catch(err => console.log(err.message))