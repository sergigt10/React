const { response } = require('express');
const Translation = require('../models/Translation');

const getTranslations = async ( req, res = response ) => {

    const translations = await Translation.find().populate('user','name');

    res.json({
        ok: true, 
        translations
    })
}

const crearTranslations = async ( req, res = response ) => {

    const translation = new Translation( req.body );

    try {

        translation.user = req.uid;

        const translationGuardado = await translation.save();

        res.json({
            ok: true, 
            translation: translationGuardado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false, 
            msg: 'Hable con el administrador'
        })
    }
}

const eliminarTranslations = async ( req, res = response ) => {

    const translationId = req.params.id;
    const uid = req.uid;

    try {

        const translation = await Translation.findById( translationId );

        if ( !translation ) {
            return res.status(404).json({
                ok: false, 
                msg: 'Translation no existe por ese id'
            })
        }

        if ( translation.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio para eliminar este translation.'
            })
        }


        await Translation.findByIdAndDelete( translationId );

        res.json({
            ok: true
        });
        
    } catch (error) {
        res.status(500).json({
            ok: false, 
            msg: 'Hable con el administrador'
        })
    }

    res.json({
        ok: true, 
        translationId
    })
}

module.exports = {
    getTranslations,
    crearTranslations,
    eliminarTranslations
}