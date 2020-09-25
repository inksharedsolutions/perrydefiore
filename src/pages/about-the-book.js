import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"

/*Images Imports*/
import Book1 from '../../static/books/Book_Cover.png'
import Book2 from '../../static/books/Book_Cover_02.png'
import Book3 from '../../static/books/Book_Cover_03.png'
import Book4 from '../../static/books/Book_Cover_04.png'
import Book5 from '../../static/books/Book_Cover_05.png'


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
                                  stratton:'https://www.stratton-press.com/books/the-black-tide/',
                                  barnes:'https://www.barnesandnoble.com/w/the-black-tide-perry-defiore/1136605834?ean=9781643459264',
                                  amazon:'https://www.amazon.com/Black-Tide-Perry-DeFiore-ebook/dp/B085KM3MSC/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=', 
                              },
                              paperback:{
                                  amazon:'https://www.amazon.com/Black-Tide-Perry-DeFiore/dp/1643459252/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600277345&sr=1-4',
                                  barnes:'https://www.barnesandnoble.com/w/the-black-tide-perry-defiore/1136605834?ean=9781643459257',
                                  booksamillion:'https://www.booksamillion.com/p/Black-Tide/Perry-Defiore/9781643459257?id=7714171848832',
                              },
                              isComingSoon:false,
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
                                  As usual, Ralph’s investigations become dangerous
                                  and are filled with adventures. His grandson,
                                  who he has been grooming to take his place against
                                  his daughter’s wishes, secretly helps him on this new adventure.
                                  A creature that is rarely seen and that usually stays in the black depths of the sea,
                                  a creature made from chemosynthesis, decides to wreak havoc at the ocean’s surface.
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
                              },
                              isComingSoon:false,
                          }} 
                      />

                      <BookInfo
                          data={{
                              title:`Alien Propagation`,
                              spanFirst:``,
                              imgSrc: Book3,
                              id:'',
                              content:
                              `
                                <p>
                                  Many decades have been filled with stories about UFOs,
                                  the possibility of aliens, but all explanations are
                                  dubious…until now. Jack is a leading architect in a
                                  firm in Houston. He has a wife that every man desires,
                                  and he must continually worry about losing her. Going through
                                  one of his “rough” spots, he takes his beautiful lady on a short vacation
                                  to smooth things out between them. He’s in for the experience of a lifetime
                                  that teaches him, firsthand, how aliens can propagate the Earth.
                                </p> 
                              `,

                              ebooks:{
                                  stratton:'https://www.stratton-press.com/books/alien-propagation/',
                                  barnes:'https://www.barnesandnoble.com/w/alien-propagation-perry-defiore/1137192155?ean=9781648950872',
                                  amazon:'https://www.amazon.com/Alien-Propagation-Perry-DeFiore-ebook/dp/B08BF3XJQ7/ref=sr_1_3?dchild=1&keywords=Perry+DeFiore&qid=1600278089&s=books&sr=1-3',
                              },
                              paperback:{
                                  amazon:'https://www.amazon.com/Alien-Propagation-Perry-Defiore/dp/1648950868/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600278089&sr=1-3',
                                  barnes:'https://www.barnesandnoble.com/w/alien-propagation-perry-defiore/1137192155?ean=9781648950865',
                                  booksamillion:'https://www.booksamillion.com/p/Alien-Propagation/Perry-Defiore/9781648950865?id=7714171848832',
                              },
                              isComingSoon:false,
                          }} 
                      />

                       <BookInfo
                          data={{
                              title:`The Fiddler`,
                              spanFirst:`Another Ralph Muller Adventure`,
                              imgSrc: Book4,
                              id:'',
                              content:
                              `
                                <p>
                                  Ralph Mullen takes his grandson on a fishing trip
                                  to enjoy a weekend with quality time with his namesake.
                                  He is asked to help seek and destroy what he believes is
                                  a nest of the venomous brown recluse spider and his grandson
                                  volunteers for the both of them. Unfortunately, a simple location
                                  and elimination of a nest of spiders turns into a multiple murder
                                  that endangers Ralph and his grandson’s life.
                                </p> 
                              `,
                              isComingSoon:true,
                              ebooks:{},
                              paperback:{}
                          }} 
                      />

                      <BookInfo
                          data={{
                              title:`I DIE TO LIVE`,
                              spanFirst:`Another Ralph Muller Adventure`,
                              imgSrc: Book5,
                              id:'',
                              content:
                              `
                                <p>
                                  Once again, Ralph Mullen faces danger, but
                                  this time, he’s on his grandson’s mission who
                                  seems to have inherited his grandfather’s nose for
                                  adventure, intrigue, and murder.
                                </p>
                              `,
                              isComingSoon:true,
                              ebooks:{},
                              paperback:{}
                          }} 
                      />

                      <div className="commentSection">
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