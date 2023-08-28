import React from 'react'
import { Link } from 'react-router-dom'
import img9 from "../images/image9.avif"

import "../css/img7.css"

const Image7 = () => {
    return (
        <div className="container">

            <h1 className="heading">our daily posts</h1>
            <div className="box-container">
                <div className="box">
                    <div className="image">
                        <img src={img9} alt="" />
                    </div>
                    <div className="content">
                        <h3>Export Import Data Bank, Total Trade : 2023-2024(Apr-May)</h3>
                        <p></p>
                        <h6>(Sources by Government of of India - Ministry of Commerce and Industry)</h6>
                        <p></p>
                        <h4>Export Import Data Bank - Total Trade : Top countries</h4>
                        <p></p>
                        <h5>Year: 2023-2024(Apr-May)</h5>
                        <p></p>
                        <Link to="../excel/table.xlsx" download="Table_Data" className="excel"> <strong>Click here to download Excel File</strong> </Link>
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

    )
}

export default Image7