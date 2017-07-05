var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    passwpord: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);