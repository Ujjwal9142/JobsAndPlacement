import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_allContents">
                <div className="footerP1">
                    <div className="footer_title">
                        <h4>Our Blog</h4>
                    </div>
                    <div className="footer_content">
                        <p>Startup Tips</p>
                        <p>Interview Preparation Guide</p>
                        <p>30 Tips To Secure Your Job</p>
                    </div>
                </div>
                <div className="footerP2">
                    <div className="footer_title">
                        <h4>Jobs By Location</h4>
                    </div>
                    <div className="footer_content">
                        <p>Delhi</p>
                        <p>Mumbai</p>
                        <p>Banglore</p>
                        <p>Kolkata</p>
                        <p>Chennai</p>
                    </div>
                </div>           
                <div className="footerP3">
                    <div className="footer_title">
                        <h4>Jobs By Role</h4>
                    </div>
                    <div className="footer_content">
                        <p>Software Engineer Job</p>
                        <p>Data Analysts Job</p>
                        <p>UI/UX Designer Job</p>
                        <p>Front End Developer Job</p>
                        <p>Full Stack Developer Job</p>
                    </div>
                </div>
                <div className="footerP4">
                    <div className="footer_title">
                        <h4>Job Collection</h4>
                    </div>
                    <div className="footer_content">
                        <p>Remote Jobs</p>
                        <p>Startup Internships</p>
                        <p>Jr. Software Engineer Jobs</p>
                        <p>Front End Developer Job</p>
                        <p>Full Stack Developer Job</p>
                    </div>
                </div>
            </div>
            <div className="social_icons">
                <FacebookIcon className="facebook" fontSize="large"/>
                <TwitterIcon className="twitter" fontSize="large"/>
                <LinkedInIcon className="linkedin" fontSize="large"/>
                <InstagramIcon className="insta" fontSize="large"/>
            </div>
        </div>
    );
};

export default Footer;