var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PessoaSchema = new Schema({
    nome: {type: String, required: true, max: 100},
	email: {type: String, required: true},
	amigo: {type: String, required: false}
});

module.exports = mongoose.model('Pessoa', PessoaSchema);
