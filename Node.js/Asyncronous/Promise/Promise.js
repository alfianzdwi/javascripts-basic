//Promise seperti namanya yaitu janji, Asyncronous juga mirip seperti janji didunia nyata membutuhkan waktu untuk terpenuhi
//Janji bisa aja terpenuhi(Fulfilled), gagal(Rejected), sedang berjalan(Pending)

//Promise di JS merupakan sebuah objek yang merepresntasikan operasi asynchronous
function getUsers(isOffline) {
    //Tidak menerima Callback sebagai Argument/Parameter, Tetapi mengembalikan objek Promise
    return new Promise((resolve, reject) => { //Objek promise dibuat dengan cara memanggil Constructor Promise yaitu new Promise(), terdapar parameter resolve : jika proses berhasil, dan reject: jika proses gagal
        setTimeout(() => {
            const users = ['Aldo', 'Ardhi', 'Hilal', 'Swan']

            if (isOffline) {
                reject(new Error('Tidak bisa mendapatkan data users karena sedang Offline'));
                return;
            }

            resolve(users)
        }, 3000)
    })
}


//Memanggil fungsi yang menggunakan Promise
getUsers(true)
    .then(users => console.log(users)) //Nilai yang dibawa resolve akan diambil melalui Then dan status Promise akan berubah menjadi Filfilled dari Pending
    .catch(err => console.log(err.message)) //Nilai yang dibawa reject akan diambil oleh Catch dan status Promise akan berubah ke Rejected


