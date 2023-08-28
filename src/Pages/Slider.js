import React from 'react'
import img26 from "../image/26.png"
import img27 from "../image/27.png"
import img28 from "../image/28.png"
import img29 from "../image/29.png"
import img30 from "../image/30.png"
import img31 from "../image/31.png"
import img9 from "../image/image9.avif"
import img25 from "../image/image25.avif"

// import "../css/owl.carousel.min.css"
import { Link } from 'react-router-dom'

const Slider = () => {
    document.addEventListener("DOMContentLoaded", function () {
        const checkbox = document.getElementById("check");
        const menuList = document.querySelector(".list");
        const sliderSection = document.getElementById("slider");

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                menuList.classList.add("show");
                sliderSection.style.marginTop = "300px"; // Move the slider down when the menu is open
            } else {
                menuList.classList.remove("show");
                sliderSection.style.marginTop = "30px"; // Reset the slider's margin when the menu is closed
            }
        });

        document.addEventListener("DOMContentLoaded", function () {
            const checkbox = document.getElementById("check");
            const menuList = document.querySelector(".list");
            const sliderSection = document.getElementById("slider");

            checkbox.addEventListener("change", function () {
                if (checkbox.checked) {
                    menuList.classList.add("show");
                    sliderSection.style.marginTop = "300px"; // Move the slider down when the menu is open
                } else {
                    menuList.classList.remove("show");
                    sliderSection.style.marginTop = "30px"; // Reset the slider's margin when the menu is closed
                }
            });
        });
    });
    return (
        <div>
            <section id="slider" className="pt-5">
                <div className="container">
                    <h1 className="heading">Our recently published blogs about import-export</h1>
                    <div className="box-container owl-carousel">

                        <div className="box">
                            <div className="image">
                                <img src={img26} alt="" name="img1"/>
                            </div>
                            <div className="content">
                                <h3>80% of India&#39;s honey exports is to United States</h3>
                                <p>To harness the export potential of honey in line with Prime Minister Narendra... </p>
                                <Link to="/img1" className="btn">Read more</Link>
                                <div className="icons">
                                    <span> <i className="fas fa-calendar"></i> July 23, 2023 </span>
                                    <span> <i className="fas fa-user"></i> by admin </span>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={img27} alt="" name="img2"/>
                            </div>
                            <div className="content">
                                <h3>SERVICES SECTOR GREW AT 8.4 % (YoY) IN FY 22</h3>
                                <p>US$ 7.1 BILLION FDI EQUITY INFLOWS IN SERVICES SECTOR
                                    BANK CREDIT TO...
                                </p>
                                <Link to="/img2" className="btn">Read more</Link>
                                <div className="icons">
                                    <span> <i className="fas fa-calendar"></i> 21st may, 2022 </span>
                                    <span> <i className="fas fa-user"></i> by admin </span>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={img28} alt="" name="img3"/>
                            </div>
                            <div className="content">
                                <h3>Andhra Pradesh Secured Eighth Place In The Overall Category</h3>
                                <p>Andhra Pradesh secured eighth place in the overall category in the ...</p>
                                <Link to='/img3' className="btn">read more</Link>
                                <div className="icons">
                                    <span> <i className="fas fa-calendar"></i> 21st may, 2022 </span>
                                    <span> <i className="fas fa-user"></i> by admin </span>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={img29} alt="" name="img4"/>
                            </div>
                            <div className="content">
                                <h3>Government has Prohibited export of Non-Basmati White Rice</h3>
                                <p>The Indian government has prohibited...</p>
                                <Link to="/img4" className="btn">read more</Link>
                                <div className="icons">
                                    <span> <i className="fas fa-calendar"></i> 21st may, 2022 </span>
                                    <span> <i className="fas fa-user"></i> by admin </span>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={img30} alt="" name="img5"/>
                            </div>
                            <div className="content">
                                <h3>India exploring in Khadi and More .....</h3>
                                <p>Taking a step forward towards realizing Prime Minister Shri Narendra Modi's vision...</p>
                                <Link to='/img5'  className="btn">read more</Link>
                                <div className="icons">
                                    <span> <i className="fas fa-calendar"></i> 21st may, 2022 </span>
                                    <span> <i className="fas fa-user"></i> by admin </span>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={img31} alt="" name="img6"/>
                            </div>
                            <div className="content">
                                <h3>Exports Decline by 22% ...? What's Happening in India ??</h3>
                                <p>Exports decline by 22% to $32.97 billion in June,steepest monthly fall...</p>
                                <Link to='/img6' className="btn">read more</Link>
                                <div className="icons">
                                    <span> <i className="fas fa-calendar"></i> 21st may, 2022 </span>
                                    <span> <i className="fas fa-user"></i> by admin </span>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={img9} alt="" name="img7"/>
                            </div>
                            <div className="content">
                                <h3>Export Import Data Bank, Total Trade : 2023-2024(Apr-May)</h3>
                                <p>Export Import Data Bank - Total Trade : Top Countries...</p>
                                <Link to="/img7" className="btn">read more</Link>
                                <div className="icons">
                                    <span> <i className="fas fa-calendar"></i> July 23, 2023 </span>
                                    <span> <i className="fas fa-user"></i> by admin </span>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={img9} alt="" name="img8"/>
                            </div>
                            <div className="content">
                                <h3>INDUSTRIAL SECTOR GROSS VALUE ADDED (GVA) ROSE BY 3.7 PER CENT IN FIRST HALF OF FY23</h3>
                                <p>...</p>
                                <Link to="/blog2" className="btn">read more</Link>
                                <div className="icons">
                                    <span> <i className="fas fa-calendar"></i> July 23, 2023 </span>
                                    <span> <i className="fas fa-user"></i> by admin </span>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={img25} alt="" name="img9" />
                            </div>
                            <div className="content">
                                <h3>INDEX OF EIGHT CORE INDUSTRIES (BASE: 2011-12=100) FOR APRIL, 2023</h3>
                                <p>...</p>
                                <Link to='/img9' className="btn">Read more</Link>
                                <div className="icons">
                                    <span> <i className="fas fa-calendar"></i> July 22, 2023 </span>
                                    <span> <i className="fas fa-user"></i> by admin </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/blog1" className="btn" id="load-more">View More</Link>

                </div>
            </section>
        </div>
    )
}

export default Slider
