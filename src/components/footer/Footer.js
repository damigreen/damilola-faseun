import React from 'react';
import useForm from 'hooks/formHook';
import {
    FooterWrap,
    InfoWrap,
    SiteMapWrap,
    SubscriptionWrap,

} from './FooterStyled';


const Footer = () => {
    const email = useForm('email');

    return (
        <FooterWrap>
            <div className="footer-wrap">
                <div className="footer-row">
                    <InfoWrap>
                        <div className="info-wrap">
                            <img src={`../../../icons/footer-logo-icon.png`} alt="company logo`" />
                            <h2>Damigreentech</h2>
                        </div>
                        <div className="social-icons">
                            <div>Github</div>
                            <div>LinkedIn</div>
                            <div>Twitter</div>
                            <div>Behance</div>
                        </div>
                    </InfoWrap>
                    <SiteMapWrap>
                        <h3>Site Map</h3>
                        <ul className="sitemap-wrap">
                            <li>About Me</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </SiteMapWrap>
                    <SubscriptionWrap>
                        <h3>Subscribe</h3>
                        <p>Enter your mail to get notified about new solutions and offers</p>
                        <div>
                            <form>
                                <label htmlFor="subscription">
                                    <input {...email.form } placeholder="Email" />
                                </label>
                            </form>
                        </div>
                    </SubscriptionWrap>
                </div>

                <div className="copyrights">
                    (c) 2021 Greenmtech Inc. All rights reserved
                </div>
            </div>
        </FooterWrap>
    )
}

export default Footer;
