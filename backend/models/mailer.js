var nodemailer = require('nodemailer');

module.exports = class Mailer {

	constructor() {

		this.transporter = nodemailer.createTransport({

			host: "smtp.ethereal.email",
			port: 587,
			secure: false, // caso a porta for 465, setar pra true;
			auth: {

			  user:'yfior36tzlestyjq@ethereal.email',
			  pass: 'emxBrkPEyyPk2PXDAt'

			}

		});

		this.mailOptions = {
			from: '"Sorteador K121" <foo@example.com>',
			subject: "Seu amigo oculto"
		};

	}

	sendEmail(pessoa) {

		this.mailOptions.to = pessoa.email;
		this.mailOptions.html = "<h4> Olá " + pessoa.nome + "!</h4><p>O sorteio do amigo oculto foi realizado e você saiu com: <b> " + pessoa.amigo + "</b>.</p>";

		this.transporter.sendMail(this.mailOptions)
			.then(resp => console.log("Para visualizar o email acesse: %s", nodemailer.getTestMessageUrl(resp)));

	};

}
