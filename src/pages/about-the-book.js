import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/Book_Cover.png'
import Book2 from '../../static/books/Book_Cover_02.png'


const ATB = (props)=>{

    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'perry-defiore',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`The Black Tide`,
                                    spanFirst:``,
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                        <p>
                                           Ralph Mullen is a famous toxicologist who has done many
                                           investigations for the United States government and has recently
                                           retired; however, good men, especially with Ralph’s talents in
                                           science and skill as a Force Recon Marine, are not allowed
                                           to retire so easily. They become part-time retirees.
                                        </p> 

                                        <p>
                                           Ralph gets a call to investigate a strange “black tide”
                                           in the Northern Pacific Ocean. He thinks it is a waste
                                           of his time, but a longtime friend of his is asking, so
                                           he accepts the project. What he encounters is more than he bargained for.
                                        </p>
                                    `,

                                    ebooks:{
                                        stratton:'https://www.amazon.com/Black-Tide-Perry-DeFiore-ebook/dp/B085KM3MSC/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=',
                                        barnes:'https://www.barnesandnoble.com/w/the-black-tide-perry-defiore/1136605834?ean=9781643459257',
                                        amazon:'https://www.amazon.com/Transcend-3-Elements-Ed-Vergara-ebook/dp/B084Q2FC47/ref=sr_1_1?dchild=1&keywords=9781643458984&qid=1596814551&s=books&sr=1-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/dp/1643459252/',
                                        barnes:'https://www.barnesandnoble.com/w/the-black-tide-perry-defiore/1136605834?ean=9781643459257',
                                        booksamillion:'https://www.booksamillion.com/p/Black-Tide/Perry-Defiore/9781643459257?id=7714171848832',
                                    }
                                }} 
                            />

                            <BookInfo
                                data={{
                                    title:`Menance from the Deep`,
                                    spanFirst:``,
                                    imgSrc: Book2,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                        <p>
                                          Ralph is retired. He tells himself he doesn’t want
                                          to work because his family insists he doesn’t work,
                                          but his wife’s passing leaves him empty inside,
                                          so why not investigate what this strange species is?
                                        </p> 

                                        <p>
                                           Ralph gets a call to investigate a strange “black tide”
                                           in the Northern Pacific Ocean. He thinks it is a waste
                                           of his time, but a longtime friend of his is asking, so
                                           he accepts the project. What he encounters is more than he bargained for.
                                        </p>
                                    
                                    `,

                                    ebooks:{
                                        stratton:'https://www.stratton-press.com/books/menace-from-the-deep/',
                                        barnes:'https://www.barnesandnoble.com/w/menace-from-the-deep-perry-defiore/1136605835?ean=9781643459288',
                                        amazon:'https://www.amazon.com/Menace-Deep-Perry-DeFiore-ebook/dp/B085KMMH4R/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1598033772&sr=1-2',
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Menace-Deep-Perry-DeFiore/dp/1643459279/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1598033772&sr=1-2',
                                        barnes:'https://www.barnesandnoble.com/w/menace-from-the-deep-perry-defiore/1136605835?ean=9781643459271',
                                        booksamillion:'https://www.booksamillion.com/p/Menace-from-Deep/Perry-Defiore/9781643459271?id=7714171848832',
                                    }
                                }} 
                            />

                            <div className="commentSection" >
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;