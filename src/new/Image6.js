import React from 'react'
import { Link } from 'react-router-dom'
import img31 from "../images/31.png"
import img8 from "../images/image8.jpeg"

import "../css/img6.css"

const Image6 = () => {
    return (
        <div className="container">

            <h1 className="heading">our daily posts</h1>

            <div className="box-container">

                <div className="box">
                    <div className="image">
                        <img src={img31} alt="" />
                    </div>
                    <div className="content">
                        <h3>Exports Decline by 22% ...........................? What's Happening in India ??</h3>
                        <p></p>
                        <h3>Exports decline by 22% to $32.97 billion in June,</h3>
                        <p></p>
                        <h3>steepest monthly fall in 3 years</h3>
                        <p></p>
                        <p>India's exports contracted by 22%, the steepest decline in the last three years, to $32.97 billion in June on account of global demand slowdown, especially in the Western markets like the US and Europe.</p>
                        <p>According to the data of the commerce ministry, the trade deficit in June stood at $20.3 billion against $22.07 billion in the same month last year due to a fall in exports and imports.</p>
                        <p>The inbound shipments during the month under review declined by a steep 17.48% to $53.10 billion.</p>
                        <p>Exports in May 2020 contracted by 36.47% when the world was reeling under the impact of the Covid-19 pandemic.Commenting on the numbers, Commerce Secretary Sunil Barthwal said trade sector growth is in the hands of global factors.</p>
                        <p>As the World Trade Organisation (WTO) has projected a slowdown in world trade, "that fear is coming true", he added.</p>
                        <p>Citing reasons for the dip in trade growth, he said there is a slowdown in major economies, including the US and Europe; and inflationary pressure.</p>
                        <p>He also attributed the slowdown to the tightening of monetary policies by the rich nations as it is affecting manufacturing and businesses.
                        </p>
                        <p>Export promotion councils are expecting the demand to pick up in the coming months. "From July, there should be pick up," the secretary said.</p>
                        <p>Cumulatively, exports dipped by 15.13 per cent to $ 102.68 billion during April-June this fiscal. Imports too declined by 12.67 per cent to $ 160.28 billion.</p>
                        <p>The trade deficit during April-June 2023 improved by 7.9 pc to $ 57.6 billion from $ 62.6 billion in the same period last year.</p>
                        <p>Oil imports in June contracted by 33.8 per cent to $ 12.54 billion, while during the April-June quarter, the shipments slipped 18.52 per cent to $ 43.4 billion.</p>
                        <p>However, gold imports in June rose 82.38 per cent to about $ 5 billion, while it dipped by 7.54 per cent to $ 9.7 billion in the April-June quarter.</p>
                        <p>The ministry said that India's trade performance, after witnessing "very high" growth in 2022-23, has shown declining trends compared to the high base of last year in the backdrop of a global slowdown.
                        </p>
                        <img src={img8} alt="image" />
                        <p>As per the World Bank Global Economic Prospects report (June 2023), the global economy is set to slow substantially in 2023 to 2.1 per cent after growing at 3.1 per cent last year.</p>
                        <p>On the exports front, 21 of the 30 key sectors exhibited negative growth in June. These include petroleum products, plastic, ready-made garments of all textiles, engineering, chemicals, gems and jewellery, leather and marine.</p>
                        <p>However, exports of electronic goods increased by 45.36 per cent in June to $ 2.43 billion. During April-June 2023, these exports rose by 47 per cent to $ 6.96 billion.</p>
                        <p>Silver imports slumped by 94.36 per cent from $ 0.79 billion in the month under review.</p>
                        <p>According to the data, imports from Russia jumped to $ 16 billion during April-June this fiscal from $ 6.91 billion in the same period last year.</p>
                        <p>Imports from Switzerland rose to $ 5 billion during April-June this fiscal from $ 4.11 billion in the same period last year.</p>
                        <p>However, the imports from China dipped to $ 23.6 billion in the first quarter of this fiscal as compared to $ 24.31 billion in April-June 2022.</p>
                        <p>The inbound shipments from the UAE too declined to $ 10.31 billion in the first quarter of this fiscal as compared to $ 13.55 billion in April-June 2022.</p>
                        <p>On the export front, the country's shipments have recorded positive growth in the Netherlands, the UK, and Saudi Arabia.</p>
                        <p>It declined to China, UAE, USA, Germany, Italy and Bangladesh.</p>
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

export default Image6