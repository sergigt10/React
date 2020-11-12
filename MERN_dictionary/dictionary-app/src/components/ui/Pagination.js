import React from 'react'

export const Pagination = ({ translationsPerPage, totalTranslations, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTranslations / translationsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <nav>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <button onClick={() => paginate(number)} className='page-link'>
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
};