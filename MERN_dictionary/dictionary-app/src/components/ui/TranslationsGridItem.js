import React from 'react'
import { DeleteEventFab } from './DeleteEventFab'

export const TranslationsGridItem = ({id ,wordEsp, wordIta}) => {
    return (
        <>
            <tbody>
                <tr>
                    <td>{ wordEsp } - {wordIta}</td>
                    <td><DeleteEventFab idTranslation={id} /></td>
                </tr>
            </tbody>
        </>
    )
}
