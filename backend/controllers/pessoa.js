var Pessoa = require('../models/pessoa');

exports.create = (req, res, next) => {

    var pessoa = new Pessoa({

		nome: req.body.nome,
		email: req.body.email

	});

    pessoa.save((err) => {

        if(err) {

			return next(err);

		}

		res.send('Pessoa cadastrada com sucesso.')

	});

};

exports.getInfo = (req, res, next) => {

    Pessoa.findById(req.params.id, (err, pessoa) => {

        if(err) {

			return next(err);

		}

		res.send(pessoa);

	});

};

exports.getAll = (req, res, next) => {

    Pessoa.find({}, (err, pessoas) => {

        if(err) {

			return next(err);

		}

		res.send(pessoas);

	});

};

exports.update = (req, res, next) => {

    Pessoa.findOneAndUpdate(req.params.id, {$set: req.body}, (err, pessoa) => {

        if(err) {

			return next(err);

		}

		res.send('Cadastro atualizado com sucesso.');

	});

};

exports.delete = (req, res, next) => {

    Pessoa.findOneAndDelete(req.params.id, (err) => {

        if(err) {

			return next(err);

		}

		res.send('Pessoa excluida com sucesso.');

	});

};
