// Pure Function adalah fungsi yang tidak bergantung terhadap nilai yang berada diluar fungsi atau parameternya, dan tidak memberikan efek samping nilai diluar fungsi

//Impure Function: Karena bergnatung nilai PI yang diluar fungsi
let PI =  3.14

function lingkaran(jari){
 return PI * (jari * jari)
}


//Pure Function : Tidak bergantung nilai diluar fungsi kecuali Argumen
function lingkaran1(jari) {
    return 3.14 * (jari*jari)
}

console.log(lingkaran(4))

PI = 5

console.log(lingkaran(4))
console.log(lingkaran1(4))



//Impure Function
const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person, // Person berubah karena efek samping ditambah age
    newPerson
  });
  

//Pure Function
const createPersonWithAges = (age, persons) => {
    return { ...person, age };
  };
  
  const persons = {
    name: 'Bobo'
  };
  
  const newPersons = createPersonWithAges(18, persons);
  
  console.log({
    persons,
    newPersons
  });







