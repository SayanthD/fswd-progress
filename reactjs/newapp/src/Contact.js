import React from 'react'

function Contact() {
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
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li className="active"><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>{/* end header */}
    <section id="inner-headline">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="pageTitle">Contact Us</h2>
          </div>
        </div>
      </div>
    </section>
    <section id="content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div style={{overflow: 'hidden', height: 300, width: '100%'}}><div id="gmap_canvas" style={{height: 300, width: '100%'}} /><style dangerouslySetInnerHTML={{__html: "#gmap_canvas img{max-width:none!important;background:none!important}" }} /><a className="google-map-code" href="http://www.trivoo.net" id="get-map-data">trivoo</a></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <br />
            <div className="alert alert-success hidden" id="contactSuccess">
              <strong>Success!</strong> Your message has been sent to us.
            </div>
            <div className="alert alert-error hidden" id="contactError">
              <strong>Error!</strong> There was an error sending your message.
            </div>
            <div className="contact-form">
              <form id="contact-form" role="form" noValidate="novalidate">
                <div className="form-group has-feedback">
                  <label htmlFor="name">Name*</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder />
                  <i className="fa fa-user form-control-feedback" />
                </div>
                <div className="form-group has-feedback">
                  <label htmlFor="email">Email*</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder />
                  <i className="fa fa-envelope form-control-feedback" />
                </div>
                <div className="form-group has-feedback">
                  <label htmlFor="subject">Subject*</label>
                  <input type="text" className="form-control" id="subject" name="subject" placeholder />
                  <i className="fa fa-navicon form-control-feedback" />
                </div>
                <div className="form-group has-feedback">
                  <label htmlFor="message">Message*</label>
                  <textarea className="form-control" rows={6} id="message" name="message" placeholder defaultValue={""} />
                  <i className="fa fa-pencil form-control-feedback" />
                </div>
                <input type="submit" defaultValue="Submit" className="btn btn-default" />
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="span4"><div className="title-box clearfix "><h3 className="title-box_primary">Contact info</h3></div> 
              <h5>Lorem ipsum dolor sit amet, cadipisicing sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium.</h5>
              <p>Lorem ipsum dolor sit amet, cadipisicing sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, cadipisicing sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium Atque sed, quidem quis praesentium, ut unde fuga error commodi architecto, laudantium culpa tenetur at id, beatae pet.<br />
              </p><address>
                <strong>The Company Name.<br />
                  12345 St John Point,<br />
                  Brisbean, ABC 12 St 11.</strong><br />
                Telephone: +1 234 567 890<br />
                FAX: +1 234 567 890<br />
                E-mail: <a href="mailto:info@sitename.org">mail@sitename.org</a><br />
              </address> </div> 
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

export default Contact;