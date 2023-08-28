import React from 'react'
import img25 from "../images/image25.avif"
import { Link } from 'react-router-dom'
import "../css/img9.css"

const Image9 = () => {
    return (
        <div className="container">

            <h1 className="heading">our daily posts</h1>

            <div className="box-container">

                <div className="box">
                    <div className="image">
                        <img src={img25} alt="image"/>
                    </div>
                    <div className="content">
                        <h3>INDEX OF EIGHT CORE INDUSTRIES (BASE: 2011-12=100) FOR APRIL, 2023</h3>
                        <p></p>
                        <h6>(Sources by <Link to="https://pib.gov.in/indexd.aspx">pib.gov.in</Link> )</h6>
                        <p></p>
                        <p>
                            The combined Index of Eight Core Industries (ICI) increased by 3.5 per cent (provisional) in April 2023 as compared to the Index of April 2022. The production of Fertilizers, Steel, Cement and Coal increased in April 2023 over the corresponding month of last year. ICI measures combined and individual performance of production of eight core industries viz. Coal, Crude Oil, Natural Gas, Refinery Products, Fertilizers, Steel, Cement and Electricity.
                        </p>
                        <p></p>
                        <ol>
                            <li>
                                <p> The Eight Core Industries comprise 40.27 percent of the weight of items included in the Index of Industrial Production (IIP). Details of annual and monthly indices and growth rates are provided at Annex I & II respectively.</p>
                            </li>
                            <li>
                                <p></p>
                                <p> Final growth rate of Index of Eight Core Industries for January 2023 is recorded 9.7 per cent. The cumulative growth rate of ICI during 2022-23 reported 7.7 per cent (provisional) as compared to the corresponding period of last year.</p>
                            </li>
                            <li>
                                <p></p>
                                <p>The summary of the Index of Eight Core Industries is given below:</p>
                                <p><strong>Coal</strong> - Coal production (weight: 10.33 per cent) increased by 9.0 per cent in April, 2023 over April, 2022. Its cumulative index increased by 14.9 per cent during 2022-23 over corresponding period of the previous year.</p>
                                <p><strong>Crude Oil</strong> - Crude Oil production (weight: 8.98 per cent) declined by 3.5 per cent in April, 2023 over April, 2022. Its cumulative index declined by 1.7 per cent during 2022-23 over the corresponding period of previous year.</p>
                                <p><strong>Natural Gas</strong> - Natural Gas production (weight: 6.88 per cent) declined by 2.8 per cent in April, 2023 over April, 2022. Its cumulative index increased by 1.6 per cent during 2022-23 over the corresponding period of previous year.</p>
                                <p><strong>Petroleum Refinery Products</strong> - Petroleum Refinery production (weight: 28.04 per cent) declined by 1.5 per cent in April, 2023 over April, 2022. Its cumulative index increased by 4.8 per cent during 2022-23 over the corresponding period of previous year.</p>
                                <p><strong>Fertilizers</strong> - Fertilizers production (weight: 2.63 per cent) increased by 23.5 per cent in April, 2023 over April, 2022. Its cumulative index increased by 11.3 per cent during 2022-23 over the corresponding period of previous year.</p>
                                <p><strong>Steel</strong> - Steel production (weight: 17.92 per cent) increased by 12.1 per cent in April, 2023 over April, 2022. Its cumulative index increased by 8.9 per cent during 2022-23 over the corresponding period of previous year.</p>
                                <p><strong>Cement</strong> - Cement production (weight: 5.37 per cent) increased by 11.6 per cent in April, 2023 over April, 2022. Its cumulative index increased by 8.7 per cent during 2022-23 over the corresponding period of previous year.</p>
                                <p><strong>Electricity</strong> - Electricity generation (weight: 19.85 per cent) declined by 1.4 per cent in April, 2023 over April, 2022. Its cumulative index increased by 8.9 per cent during 2022-23 over the corresponding period of previous year.</p>
                            </li>
                        </ol>
                        <p></p>
                        <p>Note 1: Data for February, 2023, March, 2023 and April, 2023 are provisional. Index numbers of Core Industries are revised /finalized as per updated data from source agencies.</p>
                        <p>Note 2: Since April, 2014, Electricity generation data from Renewable sources are also included.</p>
                        <p>Note 3: The industry-wise weights indicated above are individual industry weight derived from IIP and blown up on pro rata basis to a combined weight of ICI equal to 100.</p>
                        <p>Note 4: Since March 2019, a new steel product called Hot Rolled Pickled and Oiled (HRPO) under the item &#8216;Cold Rolled (CR) coils&#8217; within the production of finished steel has also been included. </p>
                        <p>Note 5: Release of the index for May, 2023 will be on Friday 30th June, 2023.</p>
                        <p></p>
                        <strong><h3>Thank you for reading !</h3></strong>
                        <p></p>

                        <Link to="/" className="btn">Home Page</Link>
                        <div className="icons">
                            <span> <i className="fas fa-calendar"></i> July 22, 2023 </span>
                            <span> <i className="fas fa-user"></i> by admin </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image9