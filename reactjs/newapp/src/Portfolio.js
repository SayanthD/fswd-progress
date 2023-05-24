import React from 'react'

function Portfolio() {
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
              <li><a href="courses.html">Courses</a></li>
              <li className="active"><a href="portfolio.html">Portfolio</a></li>
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
            <h2 className="pageTitle">Portfolio</h2>
          </div>
        </div>
      </div>
    </section>
    <section id="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="portfolio-categ filter">
              <li className="all active"><a href="#">All</a></li>
              <li className="web"><a href="#" title>Web design</a></li>
              <li className="icon"><a href="#" title>Mobile App</a></li>
              <li className="graphic"><a href="#" title>UI design</a></li>
            </ul>
            <div className="clearfix">
            </div>
            <div className="row">
              <section id="projects">
                <ul id="thumbs" className="portfolio">
                  {/* Item Project and Filter Name */}
                  <li className="item-thumbs col-lg-3 design" data-id="id-0" data-type="web">
                    {/* Fancybox - Gallery Enabled - Title - Full Image */}
                    <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href="img/works/1.jpg">
                      <span className="overlay-img" />
                      <span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code" /></span>
                    </a>
                    {/* Thumb Image and Description */}
                    <img src="img/works/1.jpg" alt />
                  </li>
                  {/* End Item Project */}
                  {/* Item Project and Filter Name */}
                  <li className="item-thumbs col-lg-3 design" data-id="id-1" data-type="icon">
                    {/* Fancybox - Gallery Enabled - Title - Full Image */}
                    <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href="img/works/2.jpg">
                      <span className="overlay-img" />
                      <span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code" /></span>
                    </a>
                    {/* Thumb Image and Description */}
                    <img src="img/works/2.jpg" alt />
                  </li>
                  {/* End Item Project */}
                  {/* Item Project and Filter Name */}
                  <li className="item-thumbs col-lg-3 photography" data-id="id-2" data-type="graphic">
                    {/* Fancybox - Gallery Enabled - Title - Full Image */}
                    <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href="img/works/3.jpg">
                      <span className="overlay-img" />
                      <span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code" /></span>
                    </a>
                    {/* Thumb Image and Description */}
                    <img src="img/works/3.jpg" alt />
                  </li>
                  {/* End Item Project */}
                  {/* Item Project and Filter Name */}
                  <li className="item-thumbs col-lg-3 design" data-id="id-0" data-type="web">
                    {/* Fancybox - Gallery Enabled - Title - Full Image */}
                    <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href="img/works/4.jpg">
                      <span className="overlay-img" />
                      <span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code" /></span>
                    </a>
                    {/* Thumb Image and Description */}
                    <img src="img/works/4.jpg" alt />
                  </li>
                  {/* End Item Project */}
                  {/* Item Project and Filter Name */}
                  <li className="item-thumbs col-lg-3 photography" data-id="id-4" data-type="web">
                    {/* Fancybox - Gallery Enabled - Title - Full Image */}
                    <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href="img/works/5.jpg">
                      <span className="overlay-img" />
                      <span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code" /></span>
                    </a>
                    {/* Thumb Image and Description */}
                    <img src="img/works/5.jpg" alt />
                  </li>
                  {/* End Item Project */}
                  {/* Item Project and Filter Name */}
                  <li className="item-thumbs col-lg-3 photography" data-id="id-5" data-type="icon">
                    {/* Fancybox - Gallery Enabled - Title - Full Image */}
                    <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href="img/works/6.jpg">
                      <span className="overlay-img" />
                      <span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code" /></span>
                    </a>
                    {/* Thumb Image and Description */}
                    <img src="img/works/6.jpg" alt />
                  </li>
                  {/* End Item Project */}
                  <li className="item-thumbs col-lg-3 design" data-id="id-0" data-type="web">
                    {/* Fancybox - Gallery Enabled - Title - Full Image */}
                    <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href="img/works/7.jpg">
                      <span className="overlay-img" />
                      <span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code" /></span>
                    </a>
                    {/* Thumb Image and Description */}
                    <img src="img/works/7.jpg" alt />
                  </li>
                  {/* End Item Project */}
                  {/* Item Project and Filter Name */}
                  <li className="item-thumbs col-lg-3 design" data-id="id-0" data-type="graphic">
                    {/* Fancybox - Gallery Enabled - Title - Full Image */}
                    <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href="img/works/8.jpg">
                      <span className="overlay-img" />
                      <span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code" /></span>
                    </a>
                    {/* Thumb Image and Description */}
                    <img src="img/works/8.jpg" alt />
                  </li>
                  {/* End Item Project */}
                </ul>
              </section>
            </div>
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

export default Portfolio