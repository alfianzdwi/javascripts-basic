//Object Composition: Konsep yanng lebih fleksibel daripada pewarisan, dimana jika pewarisan sesama Subclass tidak bisa saling menggunakan fungsi dari masinsg-masing antar Subclass
//Disinilah Object Composition, dimana tidak terdapt peran Super atau Sub, kode dibentuk/pecah berdasarkan kemampuan yang dapat dilakukan



/**
 * class Developer {
  constructor(name) {
    this.name = name;
  }
 
  commitChanges() {
    console.log(`${this.name} is committing changes...`);
  }
}
 
class FrontEndDeveloper extends Developer {
  buildUI() {
    console.log(`${this.name} is building UI...`);
  }
}
 
class BackEndDeveloper extends Developer {
  buildAPI() {
    console.log(`${this.name} is building API...`);
  }
}
 
class DevOps extends Developer {
  deployApp() {
    console.log(`${this.name} is deploying app...`);
  }
}


//Fullstack bisa melakukan semuannya, namun tidak bisa menggunakan fungsi di Subclass lain, masa harus tulis lagi?
class FullStackDeveloper extends Developer {
 // ???
}

 */


// Object Composition : Kode dibuat/bentuk berdasarkan Kemampuannya
class Developer {
    constructor(name) {
      this.name = name;
    }
   
    commitChanges() {
      console.log(`${this.name} is committing changes...`);
    }
  }
   
  function canBuildUI(developer) {
    return {
      buildUI: () => {
       console.log(`${developer.name} is building UI...`);
      }
    }
  }
   
  function canBuildAPI(developer) {
    return {
      buildAPI: () => {
        console.log(`${developer.name} is building API...`);
      }
    }
  }
   
  function canDeployApp(developer) {
    return {
      deployApp: () => {
        console.log(`${developer.name} is deploying app...`);
      }
    }
}
  

//Membuat sebuah fungsi sebagai object creator dengan mengomposisikan kemampuan-kemampuan yang dibutuhkan
//Membuat Objek yang mewakili seorang developer FrontEnd, objek ini harus memiliki kemampuan canBuildUI
function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer)); //Mengabungkan Property2 dari objek2 yang dibuat oleh fungsi canBuildUI  ke dalam objek developer.
} 
    
function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}
   
function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}
   
function createFullStackDeveloper(name) {
    const developer = new Developer(name);

    //Menggabungkan properti-properti dari objek-objek yang dibuat oleh fungsi canBuildUI, canBuildAPI, dan canDeployApp ke dalam objek developer. Ini menciptakan objek "full stack developer" dengan kemampuan dari ketiga aspek: UI, API, dan deployment.
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}




const frontEndDeveloper = createFrontEndDeveloper('Fulan'); //Menciptakan Objek FrontEndDeveloper dengan nama Fulan
frontEndDeveloper.commitChanges();//Memanggil method yang ada di class developer
frontEndDeveloper.buildUI(); //Memanggil method buildUi yang ada didalam fungsi canBuildUI
console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer); //Memeriksa apakah frontEndDeveloper merupakan objek hasil instace dari Developer, hasilnya = True
 
const backEndDeveloper = createBackEndDeveloper('Fulana');
backEndDeveloper.commitChanges();
backEndDeveloper.buildAPI();
console.log(`is ${backEndDeveloper.name} developer? `, backEndDeveloper instanceof Developer);
 
const devOpsDeveloper = createDevOps('Fulani');
devOpsDeveloper.commitChanges();
devOpsDeveloper.deployApp();
console.log(`is ${devOpsDeveloper.name} developer? `, devOpsDeveloper instanceof Developer);
 
const fullStackDeveloper = createFullStackDeveloper('Fulanah');
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployApp();
console.log(`is ${fullStackDeveloper.name} developer? `, fullStackDeveloper instanceof Developer);
 