

export const getTranslationsByName = ( name = '', translations ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return translations.filter( translations => translations.wordIta.toLocaleLowerCase().includes( name )  );

}