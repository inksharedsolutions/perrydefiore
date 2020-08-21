import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.png'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
		 		<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={`About The`} 
                    contextHeading={`Author`}/>
                
		 		<div className="container">
				    <section className="body-author-contents columns">
                         
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">

                                <h4>
                                    The secret is inside of you; you can 
                                    create your world with your words.
                                    You are framing your reality every day.
                                    You are literally what you think of yourself.
                                    Your beliefs are not made of realities. Rather,
                                    your reality is being formed every day by your
                                    beliefs, thoughts and words. Manifest intentions
                                    in your words and become the author of reality.
                                </h4>
                                
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                               Ed Vergara has always distinguished himself for his dedication
                               to science, art, universal history. His excellent professional
                               training has led him to be a specialist in urban planning, 
                               architecture, construction, and he is also an expert in health
                               and safety in construction (OSHA) and lectures in Latin America
                               and to all US states.  Ed believes that history is the foundation
                               for knowledge of all sciences and that history is the best tool for
                               knowledge of the present and even the future.  
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Ed Vergara</span>
                                </span>
                            </p>
                            
                        </article>

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;