import React from 'react';

//ES6 syntax for defining functions
export default () => {
  return (
    <div class="footer">
        <div class="footer-content">
            <div class="container">
                <div class="row">
                    <div class="footer-col col-md-3 col-sm-4 links-col">
                        <div class="footer-col-inner">
                            <h3 class="sub-title">Quick Links</h3>
                            <ul class="list-unstyled">
                                <li><a ui-sref="public-about" analytics-on analytics-category="Footer" analytics-label="About">About us</a></li>
                                <li><a ui-sref="public-contact" analytics-on analytics-category="Footer">Contact</a></li>
                                <li><a href="" analytics-on analytics-category="Footer">Privacy policy</a></li>
                                <li><a href="" analytics-on analytics-category="Footer">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                        {/*<!--//footer-col-inner-->*/}
                    </div>
                    {/*<!--//foooter-col-->*/}
                    <div class="footer-col col-md-6 col-sm-8 blog-col">
                        <div class="footer-col-inner">
                            <h3 class="sub-title">About us</h3>
                            <div class="item">
                                <div class="content">
                                    <p class="intro">We are a fast-paced education startup in the heart of Harlem. Frip's mission is to cultivate communities of educators, parents, and local educational destinations to rethink the future of field trips.</p>
                                </div>
                                {/*<!--//content-->*/}
                            </div>
                        </div>
                        {/*<!--//footer-col-inner-->*/}
                    </div>
                    {/*<!--//foooter-col -->*/}
                    <div class="footer-col col-md-3 col-sm-12 contact-col">
                        <div class="footer-col-inner">
                            <h3 class="sub-title">Get In Touch</h3>
                            <p class="intro"></p>
                            <div class="row">
                                <p class="adr clearfix col-md-12 col-sm-4">
                                    <span class="fs1" aria-hidden="true" data-icon="&#xe01d;"></span>
                                    <span class="adr-group">
                                        <span class="street-address">160 Convent Avenue</span><br />
                                        <span class="city">New York</span><br />
                                        <span class="postal-code">10031</span><br />
                                        <span class="country-name">USA</span>
                                    </span>
                                </p>

                                <p class="email col-md-12 col-sm-4"><span class="fs1" aria-hidden="true" data-icon="&#xe010;"></span><a href="mailto:fripapp@gmail.com" analytics-on analytics-category="Footer">info@fripapp.com</a></p>
                            </div>
                        </div>
                        {/*<!--//footer-col-inner-->*/}
                    </div>
                    {/*<!--//foooter-col-->*/}
                </div>
            </div>
        </div>
        {/*<!--//footer-content-->*/}

        <div class="bottom-bar">
            <div class="container center">
                <ul class="social-icons list-inline">
                    <li><a href="https://twitter.com/fripapp" analytics-on analytics-category="Fripapp" analytics-label="Twitter"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.facebook.com/fripapp" analytics-on analytics-category="Fripapp" analytics-label="Facebook"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/fripapp/" analytics-on analytics-category="Fripapp" analytics-label="Instagram"><i class="fa fa-instagram"></i></a></li>                     <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    <li class="last"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                </ul>
                <small class="copyright text-center">Copyright @ 2016 <a href="#" target="_blank" analytics-on analytics-category="Footer">Frip App, LLC</a></small>
            </div>
            {/*<!--//container-->*/}
        </div>
        {/*<!--//bottom-bar-->*/}
    </div>
  );
}
