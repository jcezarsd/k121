var Pessoa = require('../models/pessoa');
var PessoaController = require('../controllers/pessoa');
var _ = require('lodash');
var Mailer = require('../models/mailer')

exports.sortear = (req, res, next) => {

    Pessoa.find({}, (err, pessoas) => {

        if(err) {

			return next(err);

		}

		let resultadoSorteio = realizarSorteio(pessoas);

		Promise.all(resultadoSorteio.promises)
			.then(result => {

				var mailer = new Mailer();

				pessoas.forEach(pessoa => {

					mailer.sendEmail(pessoa);

				});

				res.send(resultadoSorteio.pessoas);

			})
			.catch(err => next(err))

	});

};

function realizarSorteio(pessoas) {

	if(!pessoas || !pessoas.length) {

		return null;

	}

	let pessoasShuffled = _.shuffle(pessoas);
	let promiseArray = [];

	for(let i = 0; i < pessoasShuffled.length; i++) {

		let pessoa = pessoasShuffled[i];

		if(i !== pessoasShuffled.length - 1) {

			pessoa.amigo = pessoasShuffled[i+1].nome;

		} else {

			pessoa.amigo = pessoasShuffled[0].nome;

		}

		promiseArray.push(PessoaController.doUpdate(pessoa));

	}

	return {pessoas: pessoas, promises: promiseArray};

}
