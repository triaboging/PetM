const nodemailer = require('nodemailer')

class MailService {
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            // auth: {
            //     user: 'zaytsev_1988@internet.ru',
            //     pass: 'q0999278535q'
            // }
            auth: {
                user: 'izajcev997@gmail.com',
                pass: 'q12345678qq12345678q'
               
            }
        })
    }



    async sendActivationMail(to, link){
        await this.transporter.sendMail({
                    to,
                    from: 'izajcev997@gmail.com',
                    subject: 'Активация аккаунта',
                    html: `
                    <h1>ДОбро пожаловать</h1>
                    
                    <p>Для активации аккаунта перейдите по ссылке: </p>
                    <hr/>
                    <a href="${link}">${link}</a> 
                    `

        })
    }
}
module.exports = new MailService()

// const transport = nodemailer.createTransport(
//     {
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         // auth: {
//         //     user: 'zaytsev_1988@internet.ru',
//         //     pass: 'q0999278535q'
//         // }
//         auth: {
//             user: 'izajcev997@gmail.com',
//             pass: 'q12345678qq12345678q'
//         }
   
  