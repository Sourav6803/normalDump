import React from 'react'
import shipImage from "../img/AdobeStock_374091439.jpeg.jpg"
import logoPic1 from "../logopic/Enhance your business-final.png";
import logoPic2 from "../logopic/internation trade stats of 80 countries-finall.png"
import logoPic3 from "../logopic/data accuracy icon-2.png";
import logoPic4 from "../logopic/Data used by Gov. agency-2.png";
import logoPic5 from "../logopic/Grow your profits-final.png";
import logoPic6 from "../logopic/Shield against�competition-final - Copy.png";
import logoPic7 from "../logopic/Fastest response time-3.png";

import img1 from "../img/icons8-toolbox-80.png";
import img2 from "../img/icons8-value-96.png";
import img3 from "../img/icons8-data-protection-100.png";
import img4 from "../img/icons8-clock-160.png"

import img5 from "../img/p1.jpeg"
import { Link } from 'react-router-dom';
import ExportSearchpage from './ExportSearchPages';

const Home = () => {
  return (
    <div>
      <div className="heading-after-navbar">
        <h2>One stop solution for all your Export Import Reports</h2>
        <ExportSearchpage />
      </div>
      <div className="pic"><img src={shipImage} alt="Ship" className="img" /></div>

      <div className="business">
        <div className="up">

          <div className="boxup">
            <div className="info">
              <img id="logopic" src={logoPic1} alt="" />
              <p>Enhance Your Business</p>
            </div>
          </div>
          <div className="boxup">
            <div className="info">
              <img id="logopic" src={logoPic2} alt="" />
              <p>International trade stats of 80 countries</p>
            </div>
          </div>

          <div className="boxup">
            <div className="info">
              <img id="logopic" src={logoPic3} alt="" />
              <p>Data accuracy</p>
            </div>
          </div>

          <div className="boxup">
            <div className="info">
              <img id="logopic" src={logoPic4} alt="" />
              <p>Data used by govt agencies</p>
            </div>
          </div>

        </div>
        <div className="down">
          <div className="boxdown">
            <div className="info">
              <img id="logopic" src={logoPic5} alt="" />
              <p>Grow your profits</p>
            </div>
          </div>


          <div className="boxdown">
            <div className="info">
              <img id="logopic" src={logoPic6} alt="" />
              <p>Shield Against competion</p>
            </div>
          </div>
          <div className="boxdown">
            <div className="info">
              <img id="logopic" src={logoPic7} alt="" />
              <p>Fastest response time</p>
            </div>
          </div>

        </div>


      </div>

      <div className="intro">
        <input id="hc" type="checkbox" />
        <h1>Welcome to Dumpingdata.com!</h1>
        <p>In this fastest growing world, it is important to be run with the changes.
          The global export import market is worth trillions of dollars, and it is constantly growing.
          In order to succeed in this market, businesses need to have access to accurate and up-to-date data.
          In today's globalized economy, international trade is essential for
          businesses of all sizes. However, making informed decisions about export and import can be challenging, as
          there is a lot of data to consider.</p>
        <p>That's where “Dumping Data” comes in. We are a leading provider of export import data, offering a wide range
          of services to
          help businesses make the most of their international trade opportunities. We collect and aggregate data on
          export and import trends, prices, and
          regulations. The world is becoming increasingly
          interconnected, which is creating new opportunities for businesses to export and import goods and services.
        </p>
        <p> We have a strong presence in both the domestic and international markets , and we are committed to providing
          our customers with the best possible information and services.
          Our data is comprehensive , covering everything from product prices to shipping costs.
          We also offer a variety of data analysis and reporting tools, so you can easily see how your business is
          performing in the global market.
        </p>
        <p2>Whether you're a small business just starting out or a large multinational corporation, Dumping Data can
          help you succeed in international trade.
          We are confident that we can provide our customers with the information and services they need to succeed.
          We invite you to contact us today to learn more about what we can do for you.
        </p2>
        <div className="intro2">
          <h2>Why Use Dumping Data for Export Import?</h2>
          <p2>There are many reasons why you might want to use dumpingdata.com for export import. For example, you
            might want to:</p2>
          <ul>
            <li><strong></strong> Analyze the data to identify trends and patterns in the global markets.</li>
            <li>  Identify new opportunities for your business: Identify new markets.</li>
            <li>  Make better pricing decisions.</li>
            <li>  Track inventory levels.</li>
            <li>  Comply with regulations.</li>
          </ul>
          <div className="btn">
            <label for="hc">Read Less</label>
            <Link to='/readmore'><button>Next Page</button></Link>
          </div>
        </div>
        <label for="hc">Read More</label>
      </div>

      <div className="block4">
        <div className="block">
          <div className="conte">
            <img src={img1} alt="Logo 1" />
            <div className="text5">
              <h2>Reliable Data Information</h2>
              <p>We provide data solely after the testing process. Our Company assures to offer reliable fact and
                figure for the business. </p>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="conte">
            <img src={img2} alt="Logo 2" />
            <div className="text5">
              <h2>Value For Money</h2>
              <p>We provide Data Report at highly competitive price.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="conte">
            <img src={img3} alt="Logo 3" />
            <div className="text5">
              <h2>Data Trusted By Govt.Agencies</h2>
              <p>Our Data is also used by various Goverment Agencies to identify potential investors, recover
                tarrif evasions & spot illegal activites. </p>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="conte">
            <img src={img4} alt="Logo 4" />
            <div className="text5">
              <h2>24/7 Support</h2>
              <p>We are alwayes there to serve you ! We are Coustomer centric company. Hence, We Provide 24/7
                customer service and resolve their quaries in no time.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <h1>SAMPLE DATA</h1>
        <div className="content-box">
          <div className="card1">
            <h2>Import Data</h2>
            <Link to="/viewimport"><button>View Data</button></Link>
          </div>
          <div className="card2">
            <h2>Export Data</h2>
            <Link to="/viewexport"><button>View Data</button></Link>
          </div>
        </div>
      </div>


      <div className="co">
        <div className="outer-div">
          <div className="element-widget-container">
            <div className="country-h">
              <h1>Authentic Imports-Export Trade Data of Global Countries With Importer-Exporter List at Your
                Fingertips</h1>
            </div>

            <div className="countries-box">
              <div className="box1">
                <div className="country">
                  <i className="flag-icon flag-icon-in"></i>
                  <span>India</span>
                </div>
                <br />

                <div className="country">
                  <i className="flag-icon flag-icon-us"></i>
                  <span>United States</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-jp"></i>
                  <span>Japan</span>
                </div>
                <br />


                <div className="country">
                  <i className="flag-icon flag-icon-bz"></i>
                  <span>Brazil</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-rs"></i>
                  <span>Russia</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-kw"></i>
                  <span>Kuwait</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-si"></i>
                  <span>Singapore</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-ml"></i>
                  <span>Malaysia</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-ua"></i>
                  <span>UAE</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-ge"></i>
                  <span>Germany</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-it"></i>
                  <span>Italy</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-cn"></i>
                  <span>Chaina</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-mc"></i>
                  <span>Morocco</span>
                </div>
              </div>


              <div className="box2">
                <div className="country">
                  <i className="flag-icon flag-icon-ua"></i>
                  <span>Uk</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-sa"></i>
                  <span>Soudi Arabia</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-af"></i>
                  <span>Afganistan</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-bd"></i>
                  <span>BanglaDesh</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-ca"></i>
                  <span>Canada</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-ir"></i>
                  <span>Iran</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-th"></i>
                  <span>Thailand</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-sk"></i>
                  <span>South Korea</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-tr"></i>
                  <span>Turkey</span>
                </div>

                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-cr"></i>
                  <span>Costa Rica</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-kz"></i>
                  <span>Kazakhstan</span>
                </div>
                <br />

                <div className="country">
                  <i className="flag-icon flag-icon-ph"></i>
                  <span>Philippines</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-eg"></i>
                  <span>Egypt</span>
                </div>
                <br />




              </div>




              <div className="box3">
                <div className="country">
                  <i className="flag-icon flag-icon-co"></i>
                  <span>Colombia</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-es"></i>
                  <span>Spain</span>
                </div>

                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-no"></i>
                  <span>Norway</span>
                </div>

                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-cl"></i>
                  <span>Chile</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-tt"></i>
                  <span>Tobago</span>
                </div>

                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-gr"></i>
                  <span>Greece</span>
                </div>

                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-cz"></i>
                  <span>Czechia</span>
                </div>

                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-be"></i>
                  <span>Belgium</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-hk"></i>
                  <span>Hong Kong</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-nl"></i>
                  <span>Netherlands</span>
                </div>
                <br />



                <div className="country">
                  <i className="flag-icon flag-icon-pl"></i>
                  <span>Poland</span>
                </div>

                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-ro"></i>
                  <span>Romania</span>
                </div>

                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-cy"></i>
                  <span>Cyprus</span>
                </div>


              </div>




              <div className="box4">
                <div className="country">
                  <i className="flag-icon flag-icon-vn"></i>
                  <span>Vietnam</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-om"></i>
                  <span>Oman</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-au"></i>
                  <span>Australia</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-qa"></i>
                  <span>Qatar</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-pt"></i>
                  <span>Portugal</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-mx"></i>
                  <span>Mexico</span>
                </div>

                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-br"></i>
                  <span>Brazil</span>
                </div>
                <br />

                <div className="country">
                  <i className="flag-icon flag-icon-fr"></i>
                  <span>France</span>
                </div>

                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-za"></i>
                  <span>South Africa</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-jo"></i>
                  <span>Jordan</span>
                </div>
                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-ao"></i>
                  <span>Angola</span>
                </div>

                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-lk"></i>
                  <span>Sri Lanka</span>
                </div>

                <br />
                <div className="country">
                  <i className="flag-icon flag-icon-mm"></i>
                  <span>Myanmar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className="contactus">
        <header>
            <h1 className="h">Please share your requirement with us to serve your better.</h1>
        </header>
        <div className="container">
            <div className="row">
                <div className="right">
                    <img src={img5} className="image"/>
                </div>
                <div className="right-side">
                    <form form onsubmit="sendEmail(); reset(); return false">
                        
                        <div className="form-group">
                            <h2>Enquiry Form</h2>
                        </div>
                        <div className="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required/>
                        </div>

                        <div className="form-group">
                            <label for="name">Email:</label>
                            <input type="email" id="email" name="email" required/>
                        </div>

                        <div className="form-group">
                            <label for="name">Phone:</label>
                            <input type="tel" id="tel" name="tel" required/>
                        </div>

                        <div className="form-group">
                            <label for="data-type">Data Type:</label>
                            <select id="data-type" name="data-type" required>
                                <option value="">Select Data Type</option>
                                <option value="Export">Export Data</option>
                                <option value="Import">Import Data</option>
                                <option value="Export and Import">Both</option>
                                <option value="Other data">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    </div>


  )
}

export default Home
