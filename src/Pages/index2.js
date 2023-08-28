import React from 'react'
import r1 from "../img/r1.jpg"
import r2 from "../img/r2.jpg"
import "./index2.css"

const Index2 = () => {

  document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("check");
    const menuList = document.querySelector(".list");

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        menuList.classList.add("show");
      } else {
        menuList.classList.remove("show");
      }
    });
  });
  return (
    <div>
      <section className="sec-02">
        <div className="containers">
          <h3 className="section-title">Our Mission & values</h3>
          <div className="content">
            <div className="image">
              <img src={r1} alt="" />
            </div>
            <div className="info">
              <h4 className="info-title">Our Mission :</h4>
              <p>Our mission is to make data more accessible and affordable for businesses of all sizes. We believe that
                data can help businesses to make better decisions, improve their operations, and increase their profits.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-03">
        <div className="containers">
          <h3 className="section-title">Our Values</h3>
          <div className="content">
            <div className="info">
              <h4 className="info-title">We are committed to the following values:</h4>
              <ul>
                <li><strong className="highlighted">Accuracy:</strong> We ensure that our data is accurate and up-to-date.</li>
                <li><strong className="highlighted">Transparency:</strong> We are transparent about our pricing and our data
                  collection practices.</li>
                <li><strong className="highlighted">Privacy:</strong> We protect your privacy by never sharing your data with
                  third parties.</li>
                <li><strong className="highlighted">Security:</strong> We use the latest security measures to protect your data.
                </li>
                <li><strong className="highlighted">Customer service:</strong> We offer excellent customer service to help you
                  get the most out of our platform.</li>
              </ul>
              <p>We are committed to helping businesses succeed. If you are looking for data to help you make better
                decisions, we encourage you to check out our platform.</p>
            </div>
            <div className="image">
              <img src={r2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index2