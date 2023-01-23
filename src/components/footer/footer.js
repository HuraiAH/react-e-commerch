import React from 'react';
import './footer.css'

const footer= ()=> {
    return (
        <div className='footer_warp'>
            <div className="container text-white">
                <div className="row">
                    <div className="col-md-3 mt-4">
                        <h2>Customer Care</h2>
                        <div className="footer_details">
                            <p>                       
                                Help Center
                            </p>
                            <p>
                                How to Buy
                            </p>
                            <p>
                                Returns & Refunds
                            </p>
                            <p>
                            Contact Us
                            </p>
                            <p>
                                Terms & Conditions
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                        <h2>Earn With Baraz</h2>
                        <div className="footer_details">
                            <p>                       
                                Baraz University
                            </p>
                            <p>                            
                                 Sell on Baraz            
                            </p>
                            <p>
                                Code of Conduct
                            </p>
                            <p>
                               join the Baraz affiliate program
                            </p>
                           
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                        <h2>Baraz</h2>
                        <div className="footer_details">
                            <p>                                                  
                                About Baraz
                            </p>
                            <p>
                                Digital Payments
                            </p>
                            <p>
                                Careers
                            </p>
                            <p>
                                Baraz Blog
                            </p>
                            <p>
                                Baraz Exclusives
                            </p>
                        </div>
                    </div>
                    <div className=' justfy col-3 mt-4'>
                          <h3>Have a Questions?</h3>
                          <span  class="span1">
                              <i class= " fa fa-paperclip"></i>
                              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                          </span>
                          <span  class="span2">
                              <i class="fa fa-phone"></i>
                             <p>+8801319447840</p>
                          </span>
                          <span class="span3">
                              <i class=" fa fa-paper-plane"></i>
                              <p>info@yourdomain.com</p>
                          </span>
                          
          
                      </div>
                </div>
            </div>
            
            
        </div>
        
    );
}

export default footer;