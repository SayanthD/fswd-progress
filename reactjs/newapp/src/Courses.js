import React from 'react'

function Courses() {
  return (
    <div><div>
  <div id="wrapper">
    {/* start header */}
    <header>
      <div className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="index.html"><img src="img/logo.png" alt="logo" /></a>
          </div>
          <div className="navbar-collapse collapse ">
            <ul className="nav navbar-nav">
              <li><a href="index.html">Home</a></li> 
              <li><a href="about.html">About Us</a></li>
              <li className="active"><a href="courses.html">Courses</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>{/* end header */}
    <section id="inner-headline">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="pageTitle">Courses</h2>
          </div>
        </div>
      </div>
    </section>
    <section id="content">
      <div className="container">		 
        <section className="course"> 
          <div className="row">
            <div className="col-lg-12">
              <div className><h3>Courses We Offer</h3><span className="clear spacer_responsive_hide_mobile " style={{height: 13, display: 'block'}} />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus, vero mollitia velit ad consectetur. Alias, laborum excepturi nihil autem nemo numquam, ipsa architecto non, magni consequuntur quam.</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="textbox">
                <h3>Heading Course</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
              </div> </div>
            <div className="col-md-4">
              <div className="textbox">
                <h3>Heading Course</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
              </div> </div>
            <div className="col-md-4">
              <div className="textbox">
                <h3>Heading Course</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
              </div> </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="textbox">
                <h3>Heading Course</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
              </div> </div>
            <div className="col-md-4">
              <div className="textbox">
                <h3>Heading Course</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
              </div> </div>
            <div className="col-md-4">
              <div className="textbox">
                <h3>Heading Course</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
              </div> </div>
          </div> 
        </section>	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p> <br />
        <div className="row service-v1 margin-bottom-40">
          <div className="col-md-4 md-margin-bottom-40">
            <img className="img-responsive" src="img/service1.jpg" alt />   
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>        
          </div>
          <div className="col-md-4">
            <img className="img-responsive" src="img/service2.jpg" alt />            
            <h3>Mobile Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>        
          </div>
          <div className="col-md-4 md-margin-bottom-40">
            <img className="img-responsive" src="img/service3.jpg" alt />  
            <h3>Responsive Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>        
          </div>
        </div> 
      </div>
    </section>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="widget">
              <h5 className="widgetheading">Our Contact</h5>
              <address>
                <strong>Abovecompany Inc</strong><br />
                JC Main Road, Near Silnile tower<br />
                Pin-21542 NewYork US.</address>
              <p>
                <i className="icon-phone" /> (123) 456-789 - 1255-12584 <br />
                <i className="icon-envelope-alt" /> email@domainname.com
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="widget">
              <h5 className="widgetheading">Quick Links</h5>
              <ul className="link-list">
                <li><a href="#">Latest Events</a></li>
                <li><a href="#">Terms and conditions</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="widget">
              <h5 className="widgetheading">Latest posts</h5>
              <ul className="link-list">
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
                <li><a href="#">Pellentesque et pulvinar enim. Quisque at tempor ligula</a></li>
                <li><a href="#">Natus error sit voluptatem accusantium doloremque</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="widget">
              <h5 className="widgetheading">Recent News</h5>
              <ul className="link-list">
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
                <li><a href="#">Pellentesque et pulvinar enim. Quisque at tempor ligula</a></li>
                <li><a href="#">Natus error sit voluptatem accusantium doloremque</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright">
                <p>
                  <span>© Above Site All right reserved. Template By </span><a href="http://webthemez.com" target="_blank">WebThemez</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="social-network">
                <li><a href="#" data-placement="top" title="Facebook"><i className="fa fa-facebook" /></a></li>
                <li><a href="#" data-placement="top" title="Twitter"><i className="fa fa-twitter" /></a></li>
                <li><a href="#" data-placement="top" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#" data-placement="top" title="Pinterest"><i className="fa fa-pinterest" /></a></li>
                <li><a href="#" data-placement="top" title="Google plus"><i className="fa fa-google-plus" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <a href="#" className="scrollup"><i className="fa fa-angle-up active" /></a>
</div>
</div>
  )
}

export default Courses;