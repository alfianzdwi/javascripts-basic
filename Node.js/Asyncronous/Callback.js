//Callback merupakan salah satu cara untuk menangani proses Asyncronous, merupakan salah satu konsep Functional Programming yaitu High-Order Function
//Merupakan fungsi yang disisipkan pada argument / parameter fungsi dan akan dipanggil ketika proses dinyatakan selesai

//Fungsi untuk mengambil data dari Internet/API, proses Asyncronous memiliki potensi yang tinggi untuk error.
function getUsers(isOffline, callback) { //Rules dari Node.js Argument Callback ditempatkan posisi terakhir.
    //Simulasi delay karena jaringan
    setTimeout(() => {
        const users = ['Harry', 'Jundi', 'Alfian'];
        
        //Untuk menangani kemungkinan error saat melakukan proses Asyncronous
        if (isOffline) {
            callback(new Error('Tidak bisa mengambil data users karena sedang offline'), null) //Jika error data akan bernilai null
            return;
        }

        callback(null, users) //Argument/Parameter ke 1 merupakan Error, itu akan bernilai jika proses Async gagal, Sedangkan Argument ke 2 merupakan data yang dibawa ketikan proses Async berhasil
    }, 3000)
}


//Ketika menggunakan fungsi dengan parameter Callback, kita perlu memanggil dengan menambahkan argument/parameter dengan fungsi yang akan dipanggil ketika proses asyncronous selesai
/*getUsers((users) => {
    console.log(users)
})*/


//Membuat fungsi Callback terpisah tidak didalam argument/parameter
function usersCallback(error, user) {
    if (error) {
        console.log('process failed: ', error.message);
        return;
    }

    console.log('process success: ', user)
}


//Menggunakan fungsi Callback yang sudah dibuat
getUsers(false, usersCallback)
getUsers(true, usersCallback)

console.log('Proses Lain..........')
