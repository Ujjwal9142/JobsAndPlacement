import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import standingGirl from './assets/standingGirl.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner_navbar">
                <h5 className="logo">Comapny Logo</h5>
                <div className="options">
                    <div className="other_options">
                        <h5>Jobs</h5>
                        <h5>Companies</h5>
                        <h5>Post a job</h5>
                        <h5>Resume Search</h5>
                    </div>
                    <div className="sign_in"> 
                        <h5>Sign in | <strong>Sign up</strong></h5>                     
                    </div>
                </div>
            </div>
            <div className="banner_bodyP1">
                <div className="job_search">
                    <h2>Get Your Desired Job!</h2>
                </div>
                <div className="searchBar">
                    <div className="job_posting">
                        <SearchIcon color="primary"/>
                        <h6>Search For Job Posting</h6>
                    </div>
                    <div className="searchBar_divider"></div>
                    <div className="location_search">
                        <LocationOnIcon color="primary"/>
                        <h6>Set Location</h6>
                        <button className="search_btn">Search</button>
                    </div>
                </div>
            </div>
            <div className="banner_bodyP2">
                <div className="largetext_P2">
                    <h1>Join the world's largest <br/> startup community</h1>
                </div>
                <div className="smalltext_P2">
                    <h4>Experience the startup ecosystem — invest in startups, research the fastest-<br />
                        growing companies, and find a job you love.
                    </h4>
                </div>
            </div>
            <div className="banner_bodyP3">
                <div className="bodyP3_text">
                    <div className="bodyP3_textFirst">
                        <h1>Grow your career</h1>
                    </div>
                    <div className="bodyP3_textSecond">
                        <h6>
                            Twitch, Stripe, and over 100,000 startups of all sizes have used 
                            AngelList to hire people like you. Already know where you want to 
                            be? You can apply directly—and privately—to early stage startups 
                            and industry leaders alike.
                        </h6>
                    </div>
                    <div className="bodyP3_textThird">
                        <div className="bodyP3_textThird_P1">
                            <h5>Talk directly to founders</h5>
                            <p>Speak directly to founders and hiring managers. No third party recruiters allowed.</p>
                        </div>
                        <div className="bodyP3_textThird_P2">
                            <h5>See salary & equity upfront</h5>
                            <p>View salary and stock option details before you apply to a job.</p>
                        </div>
                    </div>
                </div>
                <div className="bodyP3_image">
                    <img src={standingGirl} alt="Standing Girl"></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;