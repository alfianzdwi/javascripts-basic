//Pewarisan merupakan konsep dimana induk class akan mewarisi  property ataupun method-nya ke child classnya, ini berguna untu menghindari duplikasi kode
// Nantinya pada child class kita bisa mencustom warisan yang didapatkan sesuai kebutuhan masing-masing

//Superclass
class MailService{
    constructor(sender) {
        this.sender = sender
    }


    sendMessage(message, receiver) {
        console.log(`${this.sender} send ${message} to ${receiver}`)
    }
}


//Subclass
class WhatsAppService extends MailService{
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver) //Menggunakan method yang diwarisi dari Superclass
        }
    }
}


class EmailService extends MailService{
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver); //Menggunakan method yang diwarisi dari Superclass
        }, delay)
    }   
}


const whatsapp = new WhatsAppService('085893713278');
const email = new EmailService('alfianzzdwip@gmail.com')


whatsapp.sendBroadcastMessage('Hello', ['081318466648', '089565103212'])

email.sendDelayedMessage('Hello', 'aryotp98@gmail.com')
email.sendMessage('Hello Guys', 'johndoe@gmail.com')



//Intance Of : untuk mengetes sebuah objek berdasarkan prototype dari constructor function atau class tertentu
console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false
console.log(whatsapp instanceof MailService); // true
 
console.log(email instanceof EmailService); // true
console.log(email instanceof WhatsAppService); // false
console.log(email instanceof MailService); // true


//Inheritance tanpa ES6 atau Class
/**
 * function MailService(sender) {
  this.sender = sender;
}
 
MailService.prototype.sendMessage = function (message, receiver) {
  console.log(`${this.sender} sent ${message} to ${receiver}`);
}
 
function WhatsAppService(sender) {
  MailService.call(this, sender);
}
 
// Prototype inheritance
WhatsAppService.prototype = Object.create(MailService.prototype);
WhatsAppService.prototype.constructor = WhatsAppService;
 
WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
  for (const receiver of receivers) {
    this.sendMessage(message, receiver);
  }
}
 
function EmailService(sender) {
  MailService.call(this, sender);
}
 
// Prototype inheritance
EmailService.prototype = Object.create(MailService.prototype);
EmailService.prototype.constructor = EmailService;
 
EmailService.prototype.sendDelayedMessage = function (message, receiver, delay) {
  setTimeout(() => {
    this.sendMessage(message, receiver);
  }, delay);
}
 
const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');
whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
 */