import React from 'react'

const BookLink = (props)=>{

    console.log(props.data);

    return(
        <>

            { !props.data.isComingSoon && (
                <section className="fullSection">

                    {!Object.entries(props.data.ebooks).length == 0 && (
                        <nav className={`${props.data.isNonfront ? 'booklinkBlocks' : 'frontLinks'}`} >
                            <span>{`${props.data.isNonfront?'Ebooks': ''}`}</span>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.amazon}>Amazon</a></li>
                            {/* <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.stratton}>Stratton Press</a></li> */}
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.barnes}>Barnes & Noble</a></li>
                        </nav>
                    )} 

                    {!Object.entries(props.data.paperback).length == 0 && (

                        <nav className={`${props.data.isNonfront ? 'booklinkBlocks' : 'frontLinks'}`} >
                            <span>{`${props.data.isNonfront?'Purchase Paperback': ''}`}</span>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.amazon}>Amazon</a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.barnes}>Barnes & Noble </a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.booksamillion}>Books A Million</a></li>
                        </nav> 
                    )}

                    {!Object.entries(props.data.reviews).length == 0 && (
                        
                        <nav className={`${props.data.isNonfront ? 'booklinkBlocks' : 'frontLinks'}`}>
                            <span>Reviews</span>
                            <li><a target="_blank" href={props.data.reviews.review}>Reviews</a></li>
                        </nav>

                 )}

                </section>
             )}

            { props.data.isComingSoon && (
                <nav className={`${props.data.isNonfront ? 'booklinkBlocks' : 'frontLinks'}`} >
                    <h1 className="comingsoon-tf">Coming Soon</h1>
                </nav>
            )}


        </>
    )
}

export default BookLink;