import React from 'react'
import { Link } from 'react-router-dom'
import img28 from "../images/28.png"
import "../css/img3.css"

const Image3 = () => {
    return (
        <div className="container">

            <h1 className="heading">our daily posts</h1>

            <div className="box-container">

                <div className="box">
                    <div className="image">
                        
                        <img src={img28} alt=""/>
                    </div>
                    <div className="content">
                        <h3>Andhra Pradesh Secured Eighth Place In The Overall Category</h3>
                        <p>Andhra Pradesh secured eighth place in the overall category in the country-level analysis of Export Preparedness Index 2022 released by NITI Aayog. The State stood ninth in the previous year.
                        </p>
                        <p>The report categorised the States and Union Territories as Coastal and Landlocked. In the overall rankings, AP scored 59.27 points while Tamil Nadu topped the list with 80.89 points. Telangana, falling under the Landlocked Category, scored 61.36 points and stood sixth.
                        </p>
                        <p>Among the Coastal Category States, AP scored 59.27 points and stood fifth among the eight States in the category. Visakhapatnam is the only district from the State, which found a place in the top 10 export districts of India with 1.80 per cent of exports. In all, eight districts from the State found a place in the top 100 export districts. According to the report, Visakhapatnam and East Godavari stood 15th and 24th in terms of export value.
                        </p>
                        <p>'Developed as a part of Kakinada Development Project, top exports from both districts are engineering goods. Specifically, Visakhapatnam also exports organic and inorganic chemicals, drugs and pharmaceuticals, and marine products. East Godavari district has a large number of rice mills and falls under the Kakinada SEZ, and therefore exports rice and electronic goods as other principal commodities,&#8221; the report said.
                        </p>
                        <p>The two districts are connected with Kolkata via land and have access to international waterways owing to their coastal proximity, resulting in ease of transportation which in turn facilitates trade.The report further said in tune with the vision of Districts as Export Hubs, the district export action plans have identified coconut-based products, alloys, cashew, coir, and sugar as potential exports.
                        </p>
                        <p>'Towards that direction, the districts require information to disseminate knowledge in terms of value addition, global trade and management of products. Expanding its export basket, and creating a conducive environment to multiply its export value can prove beneficial for the State, which is gifted in terms of natural resources,&#8221; the NITI Aayog report stated.
                        </p>
                        <p>The report observed that AP in the financial year 2022 recorded an export value of over USD 19 billion by exporting products such as floats, seafood, and iron products.
                        </p>
                        <p>'The State has achieved this by creating a solid policy framework which enables export at the district level. In terms of export ecosystem, the State has the highest area under Export Promotion Zones, and Agri Export Zones, which provide a huge boost to its exports. Along with that, to facilitate exporters, the Andhra Pradesh government pro-actively organises capacity-building workshops and trade fairs. The presence of testing labs and research institutes in the State enables quality measures for its products which help it compete in the global markets. This enabling environment has led to a decent increase in its exports and consequently, export growth,' the NITI Aayog report added.
                        </p>

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
    )
}

export default Image3