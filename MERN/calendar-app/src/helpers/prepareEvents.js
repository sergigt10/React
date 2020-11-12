import moment from 'moment';

// Convertir las fechas para que se puedan leer. Convertir a tipo DATE.
export const prepareEvents = ( events = [] ) => {

    return events.map(
        (e) => ({
            ...e,
            end: moment( e.end ).toDate(),
            start: moment( e.start ).toDate()
        })
    )

}