const { Schema, model } = require('mongoose');

const TranslationSchema = Schema({
    wordEsp: {
        type: String,
        required: true
    },
    wordIta: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

// Modificamos la información como es devuelta
TranslationSchema.method('toJSON', function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model( 'Translation', TranslationSchema );
