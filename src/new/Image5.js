import React from 'react'
import { Link } from 'react-router-dom'
import img5 from "../images/image5.jpg"
import img6 from "../images/image6.jpg"
import img7 from "../images/image7.jpg"

import img30 from "../images/30.png"

import "../css/img5.css"

const Image5 = () => {
    return (
        <div className="container">

            <h1 className="heading">our daily posts</h1>

            <div className="box-container">

                <div className="box">
                    <div className="image">
                        <img src={img30} alt="" />
                    </div>
                    <div className="content">
                        <h3>India exploring in Khadi and More .....</h3>
                        <h3>The spectacular 'Khadi Fashion Show' mesmerizes audience on the White Rann of Kutch</h3>
                        <p>Taking a step forward towards realizing Prime Minister Shri Narendra Modi's vision of 'Khadi for Nation' and 'Khadi for Fashion', an exciting Mega &#8216;Khadi fashion show&#8217;, first ever on salt-pan covered white fields at 'Rann of Kutch' was organized by Khadi and Village Industries Commission on 29th January. This mega event was the first such event of KVIC was first  of its kind in the Rann of Kutch with the aim of popularizing Khadi among the youth in the country and abroad market, promoting cultural heritage and art, which was organised by the efforts with KVIC's 'Centre of Excellence for Khadi', to establish new dimensions of Khadi, to further promote the excellent design of Khadi garments-apparels, accessories for Khadi fashion promotion, and to promote Khadi as a brand all over the world. Students of NIFT, Gandhinagar, Gujarat made the event more exciting by their way of performing the fashion catwalk in this Khadi fashion event.
                        </p>

                        <img src={img5} alt="image" />

                        <p>On this occasion, Shri Manoj Kumar, Chairman, KVIC informed that for the first time such an exciting Khadi mega fashion show has been organized by KVIC in 'Rann of Kutch', which will become a medium for Brand promotion of &#8216;Khadi&#8217; and disseminate new designs among Khadi lovers, as well as it would be a source of inspiration in the efforts of  Prime Minister Shri Narendra Modi to fulfill the promises of a developed India, and take forward the vision of &#8216;AtmaNirbhar Bharat&#8217;. Large number of tourists   were present to watch this Rann show. On this occasion, folk singer Shri Borelal mesmerized people by presenting  folklore famous among the locals.
                        </p>
                        <img src={img6} alt="image" />
                        <img src={img7} alt="image" />
                        <h4>Read More and Learn More about Khadi Industry</h4>
                        <h1>Khadi sales soar 43%, hit record high of Rs 5,000 crore
                        </h1>
                        <p><Link to="https://timesofindia.indiatimes.com/topic/khadi-sales">Khadi sales</Link> rose 43% to a record high of Rs 5,052 crore during the last financial year, making it bigger than several <a href="https://timesofindia.indiatimes.com/topic/textiles-companies">textiles companies</a> in the country.</p>
                        <p>
                            Nearly a third of this was accounted for by the sale of cotton fabric with another 22% made up of garments.</p>
                        <p>
                            Ina statement, <Link to="https://timesofindia.indiatimes.com/topic/khadi">Khadi</Link> & Village Industries Commission said during 2021-22 its cumulative sales topped Rs 1 lakh crore, including village industry produce such as food items.</p>
                        <p>
                            During last financial year, its turnover is estimated to have increased over 20% to 1. 15 lakh crore, with productionbeing ramped up. Overall production rose16. 7% to over Rs 84,000 crore.
                        </p>
                        <h6>(source by Times of India Article)
                        </h6>
                        <p></p>
                        <strong><h3>Thank you for reading !</h3></strong>
                        <p></p>

                        <Link to='/' className="btn">Home Page</Link>
                        <div className="icons">
                            <span> <i className="fas fa-calendar"></i> July 23, 2023 </span>
                            <span> <i className="fas fa-user"></i> by admin </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}

export default Image5