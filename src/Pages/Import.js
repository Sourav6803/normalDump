import React from 'react'
import { Link } from 'react-router-dom'

const Import = () => {
    return (
        <>

            <div className="row container-fluid results-section">
                <div className="left-ad">

                    <br />
                </div>
                <div className="results-table">

                    <div className="result-section">
                        <div className="selected-filter"></div>
                        <div className="selected-filter">
                            <h1> IMPORT DATA</h1>
                        </div>
                        <br />
                        <br />
                        <table className="result-table">
                            <tbody>
                                <tr>
                                    <th scope="col"> Bill OF Entry Date</th>
                                    <th scope="col">Importer Name</th>
                                    <th scope="col">HSN Code</th>
                                    <th scope="col"> Product Description</th>
                                    <th scope="col"> Supplier Name</th>
                                    <th scope="col"> Supplier Country</th>

                                    <th scope="col">Quantity</th>
                                    <th scope="col">Unit</th>
                                    <th scope="col">Unit Rate of FC</th>
                                    <th scope="col">Total Rate of FC</th>
                                    <th scope="col">Currency</th>
                                    <th scope="col">Location</th>
                                </tr>


                                <tr className="odd">
                                    <td scope="row">
                                        <span className="month">dec</span>
                                        <span className="day">31</span>
                                        <span className="year">2022</span>
                                    </td>
                                    <td scope="row">*********</td>
                                    <td scope="row">75052200</td>

                                    <td className="desc" scope="row">AMS5666 14021307620GE/00 NICKEL ALLOY ROUND BAR</td>
                                    <td scope="row">SSS SUPER ALLOYS LTD</td>
                                    <td scope="row">UNITED KINGDOM</td>
                                    <td scope="row">1</td>
                                    <td scope="row">NOS</td>
                                    <td scope="row">2326.85</td>
                                    <td scope="row">2326.85</td>
                                    <td scope="row">USD</td>
                                    <td scope="row">bangalore ICD</td>
                                </tr>


                                <tr className="even">
                                    <td scope="row">
                                        <span className="month">Mar</span>
                                        <span className="day">01</span>
                                        <span className="year">2023</span>
                                    </td>
                                    <td scope="row">*********</td>
                                    <td scope="row">74198090</td>

                                    <td className="desc" scope="row">CURRENT BAR 538-280 (51147179) (PARTS FOR MANUFACTURING OF
                                        TERMINAL BLOCK)</td>
                                    <td scope="row">SSS SUPER ALLOYS LTD</td>
                                    <td scope="row">GERMANY</td>
                                    <td scope="row">24000</td>
                                    <td scope="row">NOS</td>
                                    <td scope="row">0.04</td>
                                    <td scope="row">960</td>
                                    <td scope="row">EUR</td>
                                    <td scope="row">Nhava Sheva</td>
                                </tr>


                                <tr className="odd">
                                    <td scope="row">
                                        <span className="month">jul</span>
                                        <span className="day">23</span>
                                        <span className="year">2022</span>
                                    </td>
                                    <td scope="row">********</td>
                                    <td scope="row">
                                        90041000</td>


                                    <td className="desc" scope="row">SUNGLASSES-CARRERA 1032/S CARRERA </td>
                                    <td scope="row">M/S. SAFILO S.P.A </td>
                                    <td scope="row">N/A</td>
                                    <td scope="row">9</td>
                                    <td scope="row">PCS </td>
                                    <td scope="row">1874.11</td>
                                    <td scope="row">16866.99</td>
                                    <td scope="row">INR</td>
                                    <td scope="row">Sahar Air</td>
                                </tr>


                                <tr className="even">
                                    <td scope="row">
                                        <span className="month">Dec</span>
                                        <span className="day">02</span>
                                        <span className="year">2022</span>
                                    </td>
                                    <td scope="row">**********</td>

                                    <td scope="row">
                                        71171100</td>

                                    <td className="desc" scope="row">6454/363 MAN IMIT JEWELLER 95% POLYESTER 5% IRON SEVERAL
                                        (15PCS)</td>
                                    <td scope="row">INDUSTRIA DE DISENO TEXTIL,S.A.</td>
                                    <td scope="row">SPAIN</td>
                                    <td scope="row">0.255</td>
                                    <td scope="row">KGS</td>

                                    <td scope="row">40.00</td>
                                    <td scope="row">10.20</td>
                                    <td scope="row">EUR</td>
                                    <td scope="row">Bangalore Sea</td>
                                </tr>

                                <tr className="odd">
                                    <td scope="row">
                                        <span className="month">Feb</span>
                                        <span className="day">28</span>
                                        <span className="year">2019</span>
                                    </td>
                                    <td scope="row">************</td>
                                    <td scope="row">29152100</td>


                                    <td className="desc" scope="row">ACETIC ACID </td>
                                    <td scope="row">MITSUBISHI CORPORATION</td>
                                    <td scope="row">CHINA</td>
                                    <td scope="row">21000</td>
                                    <td scope="row">KGS </td>
                                    <td scope="row">0.70</td>
                                    <td scope="row">14700.00</td>
                                    <td scope="row">USD </td>
                                    <td scope="row">Vizag Sea</td>

                                </tr>

                                <tr className="even">
                                    <td scope="row">
                                        <span className="month">Feb</span>
                                        <span className="day">17</span>
                                        <span className="year">2018</span>
                                    </td>
                                    <td scope="row">*********</td>
                                    <td scope="row">96151100</td>

                                    <td className="desc" scope="row">TIC TAC CLIPS (QTY: 600 PCS)</td>
                                    <td scope="row">YIWU CITY JISHAO ARTS & CRAFTS CO.</td>
                                    <td scope="row">CHINA</td>
                                    <td scope="row">88</td>
                                    <td scope="row">KGS</td>
                                    <td scope="row">0.681</td>
                                    <td scope="row">59.928</td>
                                    <td scope="row">USD</td>
                                    <td scope="row">Calcutta Sea</td>
                                </tr>


                                <tr className="odd">
                                    <td scope="row">
                                        <span className="month">May</span>
                                        <span className="day">01</span>
                                        <span className="year">2023</span>
                                    </td>
                                    <td scope="row">*********</td>
                                    <td scope="row">73041910</td>

                                    <td className="desc" scope="row">CARBON STEEL SEAMLESS MOTHER PIPES HOT FINISH</td>
                                    <td scope="row">SHANDONG EVER SHINE SUPPLY CHAIN</td>
                                    <td scope="row">CHINA</td>
                                    <td scope="row">54.818</td>
                                    <td scope="row">MTS</td>
                                    <td scope="row">67351.505</td>
                                    <td scope="row">3692074.53</td>
                                    <td scope="row">USD</td>
                                    <td scope="row">Calcutta Sea</td>
                                </tr>

                                <tr className="even">
                                    <td scope="row">
                                        <span className="month">May</span>
                                        <span className="day">01</span>
                                        <span className="year">2023</span>
                                    </td>
                                    <td scope="row">*********</td>
                                    <td scope="row">73066900</td>

                                    <td className="desc" scope="row">NON CIRCULAR WELDED STEEL TUBE 102X102X6MM FR 19 436 FOR MFR OF
                                        VEHICLE CABIN SIMS STL725078 24 04 23</td>
                                    <td scope="row">VOESTALPINE KREMS GMBH</td>
                                    <td scope="row">AUSTRALIA</td>
                                    <td scope="row">48</td>
                                    <td scope="row">PCS</td>
                                    <td scope="row">58.75</td>
                                    <td scope="row">2820</td>
                                    <td scope="row">EUR</td>
                                    <td scope="row">Madras Sea</td>
                                </tr>


                                <tr className="odd">
                                    <td scope="row">
                                        <span className="month">Feb</span>
                                        <span className="day">03</span>
                                        <span className="year">2023</span>
                                    </td>
                                    <td scope="row">*********</td>
                                    <td scope="row">84144090</td>

                                    <td className="desc" scope="row">USED SCREW AIR COMPRESSOR M150 25 WITH RERIGERATION DRYER
                                        THERMOSTAR TS900 (DETAIL AS PER IMPORT DOCUMENTS)</td>
                                    <td scope="row">MAYNARD EUROPE GMBH</td>
                                    <td scope="row">GERMANY</td>
                                    <td scope="row">1</td>
                                    <td scope="row">UNT</td>
                                    <td scope="row">5413.00</td>
                                    <td scope="row">5413.00</td>
                                    <td scope="row">EUR</td>
                                    <td scope="row">ICD Concor Dhandari Kalan Ludhiana</td>
                                </tr >

                                <tr className="even">
                                    <td scope="row">
                                        <span className="month">feb</span>
                                        <span className="day">01</span>
                                        <span className="year">2023</span>
                                    </td>
                                    <td scope="row">*********</td>
                                    <td scope="row">84819090</td>

                                    <td className="desc" scope="row">SA-V115-5DOS PILOT VALVE ASSEMBLY 250 PS </td>
                                    <td scope="row">SMC CORPORATION </td>
                                    <td scope="row">JAPAN</td>
                                    <td scope="row">250</td>
                                    <td scope="row">PCS</td>
                                    <td scope="row">274.90</td>
                                    <td scope="row">68725.00</td>
                                    <td scope="row">INR </td>
                                    <td scope="row">Ahmedabad Air</td>
                                </tr >
                            </tbody >
                        </table >
                        <br/>
                    </div>
                    <div className="download-sample">
                        <Link to="downlode/import-data.xlsx" download="sample_data.csv">Download Import Data Sample</Link>
                    </div>
                </div >
                <div className="right-ad"></div>

            </div >
        </>
    )
}

export default Import