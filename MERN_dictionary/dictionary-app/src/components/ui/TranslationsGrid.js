import React, { useState } from 'react'
import { TranslationsGridItem } from './TranslationsGridItem';
import { useSelector } from 'react-redux';
import { Pagination } from './Pagination';

export const TranslationsGrid = () => {
    const { translations } = useSelector(state => state.dictionary);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ translationsPerPage ] = useState(5);

    // Get current translations
    const indexOfLastTranslation = currentPage * translationsPerPage;
    const indexOfFirstTranslation = indexOfLastTranslation - translationsPerPage;
    const currentTranslations = translations.slice(indexOfFirstTranslation, indexOfLastTranslation);

    // Change page
    const paginate = (pageNumber) => {setCurrentPage(pageNumber);};

    return (
        <>  
            <div className="container">
                <div className="row">
                    <div className="table-responsive text-center">
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">ESP - ITA</th>
                                    <th scope="col">X</th>
                                </tr>
                            </thead>
                                {
                                    currentTranslations.map( translation => (
                                        <TranslationsGridItem 
                                            key={ translation.id }
                                            { ...translation }
                                        />
                                    ))
                                }
                        </table>
                    </div>
                    <Pagination 
                        translationsPerPage={translationsPerPage} 
                        totalTranslations={translations.length} 
                        paginate={paginate}
                    />
                </div>
            </div>
        </>
    )
}
