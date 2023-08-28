import React from 'react'

const Readmore = () => {

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
    <div className="wrapper">
      <h1>Using our data service for your export-import business can provide numerous benefits and advantages. Here are
        some compelling reasons to choose our data service:</h1>
      <div className="content-box">
        <div className="card">
          <h2>1. Accurate and Reliable Data </h2>
          <p>
            We pride ourselves on providing accurate and reliable export-import data. Our data is meticulously collected,
            verified,
            and updated, ensuring you get the most current and trustworthy information for making critical business
            decisions.
          </p>
        </div>
        <div className="card">
          <h2>2. Comprehensive Coverage</h2>
          <p>
            Our data service offers comprehensive coverage of international trade, encompassing a wide range of products,
            countries, and trading partners.
            This extensive coverage enables you to explore various markets and industries, identifying new opportunities
            for growth.
          </p>
        </div>
        <div className="card">
          <h2>3. Timely Updates </h2>
          <p>
            In the fast-paced world of international trade, timing is crucial.
            Our data service delivers timely updates, allowing you to stay ahead of market trends, emerging opportunities,
            and potential risks.
          </p>
        </div>
        <div className="card">
          <h2>4. Data Visualization and Insights</h2>
          <p>
            We go beyond providing raw data; our data service offers interactive visualizations and actionable insights.
            These user-friendly reports help you interpret the data effectively, making it easier to identify trends and
            make informed decisions.
          </p>
        </div>
        <div className="card">
          <h2>5. Customized Solutions </h2>
          <p>
            We understand that every business is unique, so we offer customized data solutions tailored to your specific
            needs and preferences.
            Whether you need specific product categories, regions, or data formats, our service is flexible to accommodate
            your requirements.
          </p>
        </div>
        <div className="card">
          <h2>6. Competitive Edge </h2>
          <p>
            By using our data service, you gain a competitive edge in the global marketplace.
            Access to accurate trade data empowers you to understand your competitors, track their movements, and
            differentiate your offerings effectively.
          </p>
        </div>
        <div className="card">
          <h2>7. Market Research and Analysis</h2>
          <p>
            Our data service can be a valuable resource for conducting market research and analysis.
            You can assess market demand, evaluate consumer preferences, and identify potential gaps in the market.
          </p>
        </div>
        <div className="card">
          <h2>8. Strategic Decision-Making</h2>
          <p>
            Informed decisions are the foundation of successful business strategies.
            With our export-import data service, you can confidently strategize your market entry, product positioning,
            and supply chain management.</p>

        </div>
        <div className="card">
          <h2>9. Risk Mitigation</h2>
          <p>International trade involves inherent risks, such as geopolitical uncertainties, regulatory
            changes, and fluctuating demand. Our data service equips you with the knowledge to mitigate these risks and
            navigate challenges effectively.</p>
        </div>
        <div className="last-cards-wrapper">
          <div className="card">
            <h2>10. Expert Support</h2>
            <p>
              Our team of data experts is dedicated to assisting you throughout your journey.
              Whether you have data-related queries, need guidance on data interpretation, or seek insights into specific
              markets, we are here to help.
            </p>
          </div>

          <div className="card">
            <h2>11. Data Security and Confidentiality</h2>
            <p>We prioritize data security and confidentiality. Rest assured that your sensitive information
              remains protected, and we adhere to industry best practices to safeguard your data.</p>

          </div>
        </div>
        <h3>
          In summary, using our data service can be a game-changer for your export-import business. With accurate,
          comprehensive, and timely data at your fingertips,
          you can make well-informed decisions, identify growth opportunities, and gain a competitive advantage in the
          global trade landscape. Let us be your
          trusted partner in navigating the complexities
          of international trade, and together, we'll unlock the true potential of your business.
        </h3>

      </div>
    </div>
  )
}

export default Readmore