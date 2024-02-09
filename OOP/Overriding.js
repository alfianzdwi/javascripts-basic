//Overriding adalah konsep dimana Subclass membuat custom terkait method,property dirinya sendiri untuk kebutuhan khsusus dari si subclass tersebut


class MailService{
    constructor(sender) {
        this.sender = sender
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} send ${message} to ${receiver}`)
    }
}

class WhatsAppsService extends MailService{

    //Constructor Overriding
    constructor(sender, isBussiness) {
        super(sender); //Super disini artinya memanggil constructor Superclass/Induk Class, Wajib dipanggil jika tidak maka akan error

        this.isBussiness = isBussiness
    }


    //Method Overriding, Mengubah method bawaan dari Superclass
    sendMessage(message, receiver) {
        super.sendMessage(message, receiver) //Memanggil method bawaan dari Superclass

        console.log(`${this.sender} send ${message} to ${receiver} via Whatsapp`)
    }
}

const mailService = new MailService('Me')
const whatsAppService = new WhatsAppsService('081318466648', false)

mailService.sendMessage('Hai lagi apa?', 'My Love')
whatsAppService.sendMessage('Hai gimana kabarnya?', '08593713278')


