//Variabel Scope merupakan jangkauan dari variabel bisa diakses
let varGlobal = "Ini Variabel Global" //Ini variabel global bisa diakses dari dalam/luar fungsi
 

function selfSum(a) {
  let result = 0 //Ini variabel lokal, karena hanya bisa di akses dari dalam fungsi bawaanya ataupun childnya

    for (let i = 0; i <= a; i++){
        result += i
    }

    return result
}

console.log(varGlobal)
//console.log(result) //Akan error defined, karena variabel lokal tidak sembarangan bisa diakses


function multiply(num) {
    total = num * num; ////Akan menjadi variabel global karena tidak deklarasi let, const, var
    return total;
  }
  
  let total = 9; //Akan tertimpa dengan variabel total diatas
  let number  = multiply(20);
  
  console.log(total)

function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
    const b = 'b'; 
      
    function child() {
      // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
        b * c
    }
  }