import React from 'react'
import Card from './Card'
import MobilePortfolio from './MobilePortfolio'

const Portfolio = () => {
    return (
        <>
            <div id='portfolio' className='text-white mt-15 flex flex-col container mx-auto max-md:hidden'>
                <h1 className='text-center text-6xl font-bold'>My Projects</h1>
                <div className='grid grid-cols-3 justify-between gap-10 mt-20 ml-15'>
                   <a href="https://github.com/zarifjon2007" target="_blank" rel="noopener noreferrer"><Card/></a> 
                   <a href="https://github.com/zarifjon2007" target="_blank" rel="noopener noreferrer"><Card/></a>
                   <a href="https://github.com/zarifjon2007" target="_blank" rel="noopener noreferrer"><Card/></a>
                   <a href="https://github.com/zarifjon2007" target="_blank" rel="noopener noreferrer"><Card/></a>
                   <a href="https://github.com/zarifjon2007" target="_blank" rel="noopener noreferrer"><Card/></a>
                   <a href="https://github.com/zarifjon2007" target="_blank" rel="noopener noreferrer"><Card/></a>
                   
                </div>
                
            </div>
            <div className='container mx-auto hidden max-md:block'>
                 <MobilePortfolio/>
            </div>
        </>
    )
}

export default Portfolio