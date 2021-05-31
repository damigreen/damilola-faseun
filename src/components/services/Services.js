import React from 'react';
import {
    ServicesWrapper,
    ServicesRow,
} from './ServicesStyled';



const Services = () => {

    return (
        <ServicesWrapper>
            <ServicesRow>
                <div className="services-box">
                    <h4 className="my-services-header">My Services</h4>

                    <div className="services-items">
                        <div className="services-data">
                            <img className="service-img" src={`../../../icons/responsive.png`} />
                            <h4>Responsive Web Design</h4>
                            <span className="horizontal-line"></span>
                            <p className="services-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. and typesetting industry and typesetting industry
                            </p>
                        </div>

                        <div className="services-data">
                            <img className="service-img" src={`../../../icons/seo.png`} />
                            <h4>SEO and Online Marketing</h4>
                            <span className="horizontal-line"></span>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  and typesetting industry and typesetting industry
                            </p>
                        </div>

                        <div className="services-data">
                            <img className="service-img" src={`../../../icons/mobile.png`} />
                            <h4>Web and Mobile Development</h4>
                            <span className="horizontal-line"></span>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. and typesetting industry and typesetting industry 
                            </p>
                        </div>


                        <div className="services-data">
                            <img className="service-img" src={`../../../icons/ecommerce.png`} />
                            <h4>E-commerce</h4>
                            <span className="horizontal-line"></span>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  and typesetting industry and typesetting industry
                            </p>
                        </div>

                        <div className="services-data">
                            <img className="service-img" src={`../../../icons/business.png`} />
                            <h4>Portfolio Website</h4>
                            <span className="horizontal-line"></span>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  and typesetting industry and typesetting industry
                            </p>
                        </div>
                        
                        <div className="services-data">
                            <img className="service-img" src={`../../../icons/strategy.png`} />
                            <h4>Consulting and Strategy</h4>
                            <span className="horizontal-line"></span>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  and typesetting industry and typesetting industry
                            </p>
                        </div>
                    </div>
                </div>

            </ServicesRow>
        </ServicesWrapper>
    )
}

export default Services;

