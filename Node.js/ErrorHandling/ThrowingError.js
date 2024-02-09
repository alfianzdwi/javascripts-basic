//Throwing Error : Konsep melempar atau menghasilkan error secara manual dalam kode. Ini dapat dilakukan dengan menggunakan pernyataan throw. Saat Anda melempar error, 
//program akan berhenti dan mencari blok catch yang sesuai untuk menangani error tersebut.Dengan menggunakan throw, Anda dapat membuat objek Error khusus dengan detail yang lebih kaya seperti pesan kustom, kode error, dan properti tambahan lainnya

const json = '{"name": "Alfian", "age": 20 }';

try {
    //console.log(json.name)
    //console.log(json.age)


    const user = JSON.parse(json) //Konversi dari JSON ke Javascript Object, akan sering dilakukan saat melakukan request ke API


    //Pada throwing error : Di dalamnya kita bisa menentukan pesan yang dapat membantu menjelaskan apa eror yang terjadi.
    if (!user.name) {
        throw new SyntaxError ("Name is required!")
    }

    console.log(user.name)
    console.log(user.age)
} catch (error) {
    //Untuk menyesuaikan tampilan pesan error apa yang akan muncul, intanceOf untuk mencari error apa yang terjadi
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
      } else if (error instanceof ReferenceError) {
        console.log(error.message);
      } else {
        console.log(error.stack);
      }
}