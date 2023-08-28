import React from 'react'
import img27 from "../images/image27.jpg"
import img3 from "../images/image3.jpg"
import img2 from "../images/image2.jpg"
import { Link } from 'react-router-dom'
import "../css/img2.css"

const Image2 = () => {
    return (
        <div className="container">

            <h1 className="heading">our daily posts</h1>

            <div className="box-container">

                <div className="box">
                    <div className="image">
                        <img src={img27} alt="" />
                    </div>
                    <div className="content">
                        <h3>SERVICES SECTOR GREW AT 8.4 % (YoY) IN FY 22</h3>
                        <p>US$ 7.1 BILLION FDI EQUITY INFLOWS IN SERVICES SECTOR

                            BANK CREDIT TO SECTOR GREW AT 21.3%

                            IT-BPM REVENUES REGISTERED GROWTH OF 15.5 %

                            ₹1 LAKH CRORE WORTH ANNUAL PROCUREMENT THROUGH GeM

                            INDIA RANKED 10th OUT OF THE TOP 46 COUNTRIES IN THE WORLD IN THE MEDICAL TOURISM INDEX FY21

                            INDIA&#39;S FINTECH ADOPTION RATE AT 87% AS AGAINST WORLD AVERAGE OF 64%</p>
                        <p>
                            The services sector witnessed a swift rebound in FY22, growing Year-on-Year (YoY) at 8.4% compared to
                            a contraction of 7.8% in the previous financial year, highlighted the Economic Survey 2022-23, tabled
                            by the Union Minister for finance & Corporate Affairs, Smt Nirmala Sitharaman in Parliament today.
                            This swift rebound was driven by growth in the contact intensive services sub-sector which registered
                            sequential growth of 16% driven by the release of pent-up demand, ease of mobility restriction, and
                            near-universal vaccination coverage. “India&#39;s services sector is a source of strength and is
                            poised to gain more. From low to high value-added activities with export potential, the sector has
                            enough scope to generate employment and foreign exchange and contribute to India&#39;s external
                            stability”, noted the Survey.
                        </p>
                        <p>As per the First Advance Estimates, Gross Value Added (GVA) in the services sector is estimated to
                            grow at 9.1% in FY23, driven by 13.7% growth in contact-intensive services sector. The Survey
                            highlighted that PMI services witnessed an uptick and expanded to 58.5 in December 2022, following an
                            overall easing of retail inflation leading to retreating price pressures of inputs and raw materials.
                        </p>

                        <img src={img2} alt="image" />

                        <h4>Bank Credit</h4>
                        <p>The Economic Survey observed that the bank credit to Services Sector saw a YoY growth of 21.3% in
                            November 2022, the second highest in 46 months, with the improvement in vaccination coverage and
                            recovery in the services sector. Within the sector, credit to wholesale and retail trade increased by
                            10.2% and 21.9% in November 2022, respectively, reflecting the strength of the underlying economic
                            activity. “Credit to NBFCs grew by 32.9% as NBFCs shifted to bank borrowings because of high bond
                            yields”, stated the Survey.</p>
                        <h4>Services Trade</h4>
                        <p>The Survey observed that India&#39;s services exports may improve as runaway inflation in advanced
                            economies drives up wages and makes local sourcing expensive, opening up avenues for outsourcing to
                            low-wage countries, including India. “India is a significant player in services trade, being among the
                            top ten services exporter countries in 2021”, noted the Survey. Services exports registered growth of
                            27.7% during April-December 2022 as compared to 20.4% in the corresponding period last year. Among
                            services exports, software exports have remained relatively resilient during the Covid-19 pandemic as
                            well as amid current geopolitical uncertainties, driven by higher demand for digital support, cloud
                            services, and infrastructure modernisation catering to new challenges.</p>
                        <h4>Foreign Direct Investment (FDI) in Services</h4>
                        <p>The World Investment Report 2022 of UNCTAD places India as the seventh largest recipient of FDI in the
                            top 20 host countries in 2021. India received the highest-ever FDI inflows of US$ 84.8 billion
                            including US$ 7.1 billion FDI equity inflows in the services sector in FY22. “To facilitate
                            investment, various measures have been undertaken by the Government, such as the launch of the
                            National Single-Window system, a one-stop solution for approvals and clearances needed by investors,
                            entrepreneurs, and businesses”, mentioned the Survey.</p>
                        <h4>Sub-Sector-Wise Performance</h4>
                        <h4>IT-BPM Industry</h4>
                        <p>The Survey noted that the IT-BPM revenues registered YoY growth of 15.5% during FY22 compared to 2.1%
                            growth in FY21, with all sub-sectors showing double-digit revenue growth. Within the ITBPM sector, IT
                            services constitute the majority share (greater than 51%). Exports (including hardware) witnessed a
                            growth of 17.2% in FY22 compared to 1.9% growth in FY21, owing to the increased reliance of businesses
                            on technology, the roll-out of cost-reducing deals and the use of core operations. The industry
                            recorded nearly 10% estimated growth in direct employee pool in FY22 with a highest-ever net addition
                            to its employee base. “India&#39;s massive digital infrastructure played a crucial role in driving
                            technology adoption, with public digital platforms becoming the bedrock of India&#39;s digital
                            advantage”, stated the Survey.</p>
                        <h4>E-Commerce</h4>
                        <p>According to the Global Payments Report by Worldpay FIS, India&#39;s e-commerce market is projected to
                            post impressive gains and grow at 18% annually through 2025. The Government E-Marketplace (GeM)
                            attained an annual procurement of ₹1 lakh crore within FY22, representing a 160% growth compared to
                            last FY. Initiatives taken by the Government for the promotion of e-Commerce, including the Digital
                            India program, UPI, One District - One Product (ODOP) initiative, Open Network for Digital Commerce
                            (ONDC) etc., have been major contributory factors to the growth of E-commerce in recent years.</p>
                        <h4>Tourism and Hotel Industry</h4>
                        <p>The Survey noted that with travel restrictions and health concerns subsiding, tourism has become a
                            vital driver of a strong upswing in contact-intensive activity. The entire aircraft movement in the
                            country increased by 52.9% YoY between April and November 2022 as India resumed all regular
                            international flights at full capacity towards the end of 2021-22. With the waning of the pandemic,
                            India&#39;s tourism sector is also showing signs of revival. India is ranked 10th out of the top 46
                            countries in the World in the Medical Tourism Index FY21 released by by Medical Tourism Association.
                            “Recent initiatives like the Ayush visa for tourists who desire to visit India for medical treatment,
                            the launch of the National Strategy for Sustainable Tourism & Responsible Traveller Campaign, the
                            introduction of the Swadesh Darshan 2.0 scheme, and Heal in India can assist in capturing a larger
                            share of the global medical tourism market”, observed the Survey.</p>
                        <h4>Real Estate</h4>
                        <p>The Economic Survey stated that notwithstanding the current impediments, such as rising interest rates
                            on home loans and an increase in property prices, the sector witnessed resilient growth in the current
                            year, with housing sales and the launch of new houses in Q2 of FY23 surpassing the pre-pandemic level
                            of Q2 of FY20. “The recent government measures, such as the reduction in import duties on steel
                            products, iron ore, and steel intermediaries, will cool off the construction cost and help to check
                            the rise in housing prices”, mentioned the Survey. According to JLL&#39;s 2022 Global Real Estate
                            Transparency Index, India’s real estate market transparency is among the top ten most improved markets
                            globally. The Survey stated that regulatory initiatives such as the Model Tenancy Act and digitisation
                            of land registries & market data through the Dharani and Maha RERA platforms have helped to broaden
                            the market and bring more formalisation to the sector.</p>
                        <h4>Digital Financial Services</h4>
                        <p>The Economic Survey stated that digital financial services enabled by emerging technologies and
                            innovative solutions were accelerating financial inclusion, democratising access, and spurring the
                            personalisation of products. India took the lead with the fintech adoption rate of 87%, substantially
                            higher than the world average of 64% as per the latest Global FinTech Adoption Index. The Survey
                            stated that Neobanks have eased availability and provided access to financial services to MSMEs and
                            underbanked customers and areas. The introduction of Central Bank Digital Currency (CBDC) will also
                            significantly boost digital financial services. “Digitalising documents has also played a pivotal role
                            in giving further impetus to digital financial services”, stated the Survey.</p>
                        <h4>Outlook</h4>
                        <p>The Survey noted that India&#39;s services sector growth which was highly volatile and fragile during
                            the last 2 fiscal years, has shown resilience in FY23. The prospects look bright with improved
                            performance of various sub-sectors like Tourism, Hotel, Real estate, IT-BPM, E-commerce etc. “The
                            downside risk, however, lies in the external exogenous factors and bleak economic outlook in Advanced
                            Economies impacting growth prospects of the services sector through trade and other linkages”,
                            mentioned the Survey.
                        </p>
                        <p></p>
                        <img src={img3} alt="image" height="400px" />
                        <p></p>
                        <strong>
                            <h3>Thank you for reading !</h3>
                        </strong>
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

export default Image2