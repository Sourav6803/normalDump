import React from 'react'
import images26 from "../images/26.png"
import image1 from "../images/image1.jpeg"
import { Link } from 'react-router-dom'
import "../css/img1.css"

const Image1 = () => {
    return (
        <div className="container">

            <h1 className="heading">Our daily posts</h1>

            <div className="box-container">

                <div className="box">
                    <div className="image">
                        <img src={images26} alt=""/>
                    </div>
                    <div className="content">
                        <h3>80% of India&#39;s honey exports is to United States</h3>
                        <p>To harness the export potential of honey in line with Prime Minister Narendra Modi&#39;s vision of a &#39;sweet revolution&#39; through promotion of beekeeping and allied activities, Government has planned to organize a series of events across the country in collaboration with state governments and farmers.</p>
                        <p>One such event is scheduled to be organized by APEDA, Ministry of Commerce and Industry, for export promotion of honey involving exporters, stakeholders and government officials in Chandigarh, where focus would be to encourage farmers towards honey farming by ensuring quality production.</p>
                        <p>Given the manifold rise in honey consumption across the globe especially after Covid-19 pandemic due to its natural immunity booster characteristics and a healthier alternative to sugar, APEDA is aiming is to boost honey exports through ensuring quality production and market expansion to new countries as at present, India&#39;s natural honey exports are majorly dependent on one market &#8210; &#8210; &#8210; the United States &#8210; that account for more than 80 percent of the exports.</p>
                        <p>As a part of the government&#39;s AtmaNirbhar Bharat initiative to boost honey production, the government has approved an allocation of Rs 500 crore for the National Beekeeping and Honey Mission (NBHM) for three years (2020-21 to 2022-23).</p>
                        <p>Prime Minister Modi in the &#8219;Mann ki Baat&#8217; programme had stressed that honey has been given a lot of importance in Ayurveda. Honey has been described as an elixir. He said there are so many possibilities in honey production today that even the youth pursuing professional studies are making it a source of self-employment.</p>
                        <p>“We are working in close collaboration with the state government, farmers and other stakeholders in the value chain to boost quality honey exports,” said Dr M Angamuthu, Chairman, APEDA. India is also renegotiating the duty structure imposed by various countries for boosting honey exports, he added.</p>
                        <p>APEDA has been facilitating honey producers in accessing export markets besides availing government assistance under different schemes, quality certification and lab testing.</p>
                        <p>APEDA is working with the exporters to deal with the challenges such as higher freight cost, limited availability of containers in peak honey export season, higher Nuclear Magnetic Resonance test costs and inadequate export incentives.</p>
                        <p>India, which started its first organized exports in 1996-97, has exported 74,413 metric tonnes (MT) of natural honey worth USD 163.73 million in 2021-22, with the United States taking a major share at 59,262 MT. United Arab Emirates, Saudi Arabia, Nepal, Morocco, Bangladesh and Qatar were the other top destinations for Indian honey.</p>

                        <img src={image1} alt="image" id="img1"/>

                            <p>In 2020, the global honey export was recorded at 7.36 lakh MT and India ranked 8th and 9thin the world in honey producing and exporting countries, respectively. In 2020, the total honey production was pegged at 1.62 million metric tonnes, which included honey extracted from all nectar sources, agricultural plants, wild flowers and forest trees.</p>
                            <p>In India, North East Region and Maharashtra are the major natural honey producing areas in the country and around 50 percent of the honey produced in India is consumed domestically, while the rest is exported across the globe.</p>
                            <p>As per the DGCIS, APEDA has achieved overall exports of USD 7.41 billion during April-June 2022 by registering a growth of 30.8 percent in terms of USD in comparison to the same period previous year.</p>

                            <strong><h3>Thank you for reading !</h3></strong>
                            <p></p>

                            <Link to="/" className="btn">Home Page</Link>
                            <div className="icons">
                                <span> <i className="fas fa-calendar"></i> July 23, 2023 </span>
                                <span> <i className="fas fa-user"></i> by admin </span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image1