import React from 'react'
import img29 from '../images/29.png'
import img4 from '../images/image4.jpeg'
import { Link } from 'react-router-dom'
import "../css/img4.css"

const Image4 = () => {
    return (
        <div className="container">

            <h1 className="heading">our daily posts</h1>

            <div className="box-container">

                <div className="box">
                    <div className="image">
                        <img src={img29} alt=""/>
                    </div>
                    <div className="content">
                        <h3>Government has Prohibited export of Non-Basmati White Rice</h3>
                        <p>The Indian government has prohibited export of non-basmati white rice, a Directorate General of Foreign Trade notification said on Thursday.
                        </p>
                        <p>'Export policy of non-basmati white rice (semi-milled or wholly milled rice, whether or not polished or glazed)...is amended from free to prohibited,' the DGFT said in a notification.
                        </p>
                        <p>However, it will allow the consignments of this rice to be exported under certain conditions like in cases where loading of this rice on the ship has commenced before this notification.
                        </p>
                        <p>Earlier, news agency Bloomberg reported the Indian government is considering banning exports of most rice varieties. The ban may affect around 80 per cent of India's rice exports, can reduce rice prices within India but may impact global prices negatively.
                        </p>
                        <p>Uneven distribution of rainfall in the key rice-growing areas of the country has pushed up prices of the grain by up to 20% in the last 10 days, ET reported earlier.
                        </p>
                        <p>Prices of rice exported from Vietnam soared to their highest in more than a decade this week, on growing supply concerns due to the El Nino weather pattern and India taking this step, Reuters reported. Traders said information about India's possible move to curb exports also pushed prices higher. Traders expected prices to rise further if India were to limit exports.
                        </p>
                        <p>Meanwhile, rice planting in India has gained momentum with the revival in monsoon rainfall over the past fortnight.</p>
                        <p>India - the world's biggest rice exporter - banned overseas shipments of broken rice and imposed a 20% duty on exports of various other grades in September 2022 amid concerns over production.
                        </p>
                        <p>B.V. Krishna Rao, president of the Rice Exporters Association (REA) said a government move to increase paddy procurement price had been pushing up rates. 'But, the government is holding more stocks than needed for welfare schemes. There is no need to restrict exports,' he told Reuters.
                        </p>
                        <p>It is expected to reduce India&#39;ss rice exports by 4-5 billion tonne this fiscal, or more than a fifth of what was exported last fiscal, according to rating agency Crisil.

                        </p>
                        <p>Pushan Sharma, director-research, Crisil Market Intelligence and Analytics said "Despite two curtailing moves last fiscal -- a ban on broken rice exports, and 20% duty on non-basmati exports &#8210; India&#39;s overall rice exports rose 5-6% even as overall production fell. To boot, as of July 1, 2023, rice stock with the Food Corporation of India is down a fifth on-year.The consequent tight supplies meant domestic prices rose 14-15% last fiscal.
                        </p>
                        <p>He added "The government clearly viewed these as red lines from a domestic food security and inflation point of view. We expect Thursday&#39;s blanket ban to reduce India&#39;s rice exports by 4-5 billion tonne this fiscal, or more than a fifth of what was exported last fiscal. That should improve domestic supplies and have a moderating effect on retail prices.
                        </p>
                        <p>India has been the biggest exporter of rice in the past couple of years, accounting for a third of global exports.
                        </p>
                        <p>India's move may trigger fears of further inflation in global food markets. India accounts for more than 40% of world rice exports, and low inventories with other exporters mean any cut in shipments could inflate food prices already driven up by Russia's invasion of Ukraine last year and erratic weather
                        </p>

                        <img src={img4} alt="image"/>

                            <p></p>
                            <strong><h3>Thank you for reading !</h3></strong>
                            <p></p>

                            <Link to="/" className="btn">Home Page</Link>
                            <p></p>
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

export default Image4