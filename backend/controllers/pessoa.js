var Pessoa = require('../models/pessoa');

exports.create = (req, res, next) => {

	var pessoa = new Pessoa({

		nome: req.body.nome,
		email: req.body.email

	});

	pessoa.save((err) => {

		if (err) {

			return next(err);

		}

		res.send('Pessoa cadastrada com sucesso.')

	});

};

exports.getInfo = (req, res, next) => {

	Pessoa.findById(req.params.id, (err, pessoa) => {

		if (err) {

			return next(err);

		}

		res.send(pessoa);

	});

};

exports.getAll = (req, res, next) => {

	Pessoa.find({}, (err, pessoas) => {

		if (err) {

			return next(err);

		}

		res.send(pessoas);

	});

};

exports.update = (req, res, next) => {

	delete req.body._id;

	Pessoa.findOneAndUpdate({ "_id": req.params.id }, { $set: req.body }, (err, pessoa) => {

		if (err) {

			return next(err);

		}

		res.send('Cadastro atualizado com sucesso.');

	});

};

exports.delete = (req, res, next) => {

	Pessoa.findOneAndDelete({ "_id": req.params.id }, (err) => {

		if (err) {

			return next(err);

		}

		res.send('Pessoa excluida com sucesso.');

	});

};

exports.doUpdate = (obj) => {

	return new Promise((resolve, reject) => {

		let pessoaId = obj.id || obj._id

		let objToSave = {nome: obj.nome, email: obj.email, amigo: obj.amigo};

		Pessoa.findOneAndUpdate({ "_id": pessoaId }, { $set: objToSave })
			.then(result => resolve())
			.catch(err => reject(err))

	});

};
