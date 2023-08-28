import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <>
      <div className="breadcrumb-area blog-breadcrumb-bg border border-primary">
        <div className="containers border border-danger">
          <div className="rows border border-warning">
            <div className="col-lg-12 border border-secondary">
              <div className="breadcrumb-txt border border-dark">
                <h1>Contact Dumping Data</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="breadcrumb-overlay"></div>
      </div>

      <div className="contact-section">
        <div className="containers">
          
          <div className="contact-infos">
            <div className="row no-gutters">
              <div className="col-lg-4 single-info-col">
                <div className="single-info wow fadeInRight" data-wow-duration="1s">
                  <div className="icon-wrapper"><i className="fas fa-home"></i></div>
                  <div className="info-txt">
                    <p>163, Dr.M. G. Mahimtura Marg, 3rd Kumbharwada,
                    </p>
                    <p>Mumbai-400 004 (India)</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 single-info-col">
                <div className="single-info wow fadeInRight" data-wow-duration="1s" data-wow-delay=".2s">
                  <div className="icon-wrapper"><i className="fas fa-phone"></i></div>
                  <div className="info-txt">
                    <p>+91-22-6659 5285 </p>
                    <p>+91-22-6639 4214</p>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 single-info-col">
                <div className="single-info wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                  <div className="icon-wrapper"><i className="far fa-envelope"></i></div>
                  <div className="info-txt">
                    <p><a href="mailto:inquiry@nickelalloysonline.co.in">inquiry@nickelalloysonline.co.in</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-4 single-info-col">
                <div className="single-info wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                  <div className="icon-wrapper"><i className="far fa-user"></i></div>
                  <div className="info-txt">
                    <p> <strong>Contact:</strong> Mr. Milap Mehta</p>
                    <p> <strong>Mob: </strong>+91-9869 532 584</p>
                    <p><a href="mailto:inquiry@raajsagarsteels.com">inquiry@raajsagarsteels.com</a> </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 single-info-col">
                <div className="single-info wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                  <div className="icon-wrapper"><i className="far fa-user"></i></div>
                  <div className="info-txt">
                    <p> <strong>Contact:</strong> Mr. Ashish Jain</p>

                    <p><a href="mailto:info@raajsagarsteels.com">info@raajsagarsteels.com</a> </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 single-info-col">
                <div className="single-info wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                  <div className="icon-wrapper"><i className="far fa-user"></i></div>
                  <div className="info-txt">
                    <p> <strong>Contact:</strong> Mr. Ayush Jain</p>
                    <p> <strong>Mob: </strong>+91-9820889426</p>
                    <p><a href="mailto:ayush@raajsagarsteels.com">ayush@raajsagarsteels.com</a> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-section">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="subtitle animate">Keep In Touch</h2>
                <div className="container">
                  <div className="row">
                    <div className="right-side">
                      <form form onSubmit="sendEmail(); reset(); return false">
                        
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
              
              <div className="col-lg-6">
                <h2 className="subtitle animate ">Our Location</h2>
                <div className="map-wrapper">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15093.74056334786!2d72.80682014574994!3d18.95638061557657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1690022849658!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>

    </>
  )
}

export default Contact


// {/* <script src='https://smtpjs.com/v3/smtp.js'></script> */}
{/* <script>
                function sendEmail(){
                  Email.send({
                    SecureToken: "5d224578-40b1-4af7-a351-a4415bced795",
                    To: 'dumping.data123@gmail.com',
                    From: "dumping.data123@gmail.com",
                    Subject: "This is the subject",
                    Body: "Name: " + document.getElementById("name").value
                      + "<br> Email: " + document.getElementById("email").value
                      + "<br> Phone no: " + document.getElementById("tel").value
                      + "<br> Data Type: " + document.getElementById("data-type").value
                      + "<br> Massage: " + document.getElementById("message").value
                  }).then(
                    message => alert("Massage send succesfully")
                  );
                        }

              </script> */}
