//CustomError berguna untuk membuat tipe error khusus secara detail yang kita inginkan sesuai dengan perkiraan error yang muncul pada program kita
//Intinya membuat error yang lebih spesifik

const ValidationError = require ('./Error')

let json = '{ "age": 30 }'; //Misal secara penulisan Syntax sudah benar, /Namun untuk memeriksa data didalamnya kita masih menggunakan SyntaxError, walaupun sebenrnya format penulisan sudah benar
 
try {
    let user = JSON.parse(json);
    

        
    //Menggunakan Custom Error
    if (!user.name) {
        throw new ValidationError("'name' is required.")
    }

    if (!user.age) {
        throw new ValidationError("'age' is required.")
    }    

    
    console.log(user.name);
    console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ValidationError) {
      console.log(`Invalid data: ${error.message}`);
  }else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}