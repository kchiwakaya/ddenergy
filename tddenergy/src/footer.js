import React from 'react'; // {{ edit_1 }}

const Footer = () => { // {{ edit_2 }}
  return ( // {{ edit_3 }}
    <>
    <br/>
    <hr/>
    <footer id="footer" className="footer bg-dark text-white" > 

    <div className="container footer-top">
              <div className="row gy-4">
             
        <div className="col-lg-4 col-md-6 footer-about">
          <a href="index.html" className="d-flex align-items-center">
            <span className="sitename">RDD Energy</span>
          </a>
          <div className="footer-contact pt-3">
            <p className="mt-3"><strong>Phone:</strong> <span>+263717912652</span></p>
            <p><strong>Email:</strong> <span>info@tddenergy.co.zw</span></p>
          </div>
        </div>

        <div className  ="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bi bi-chevron-right"></i> <a href="/contact">Contact Us</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="/about">About us</a></li>
            
          </ul>
        </div>

        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Solar Installation</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Solar Maintenance</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Tubing</a></li>
           
          </ul>
        </div>

        <div className="col-lg-4 col-md-12">
          <h4>Follow Us</h4>
          <div className="social-links d-flex">
  
            <a href="https://www.facebook.com/profile.php?id=100069970280249"><i className="bi bi-facebook">Facebook</i></a>
            
          </div>
        </div>  

      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">RDD Energy</strong> <span>All Rights Reserved</span></p>
      <div className="credits">
        
          Designed by <a href="https://bootstrapmade.com/">kchiwakaya@gmail.com</a>
      </div>
    </div>

  </footer>
  </>
  ); 
}; 

export default Footer; // {{ edit_7 }}