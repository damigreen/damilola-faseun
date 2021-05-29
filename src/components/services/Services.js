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
                            <img className="service-img" src />
                            <h4>Responsive Web Design</h4>
                            <span className="horizontal-line"></span>
                            <p className="services-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. and typesetting industry and typesetting industry
                            </p>
                        </div>

                        <div className="services-data">
                            <img className="service-img" src />
                            <h4>SEO and Online Marketing</h4>
                            <span className="horizontal-line"></span>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  and typesetting industry and typesetting industry
                            </p>
                        </div>

                        <div className="services-data">
                            <img className="service-img" src />
                            <h4>Mobile App Development</h4>
                            <span className="horizontal-line"></span>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. and typesetting industry and typesetting industry 
                            </p>
                        </div>


                        <div className="services-data">
                            <img className="service-img" src />
                            <h4>Portfolio and E-commerce Websites</h4>
                            <span className="horizontal-line"></span>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  and typesetting industry and typesetting industry
                            </p>
                        </div>

                        <div className="services-data">
                            <img className="service-img" src />
                            <h4>Wordpress Theme</h4>
                            <span className="horizontal-line"></span>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  and typesetting industry and typesetting industry
                            </p>
                        </div>
                        
                        <div className="services-data">
                            <img className="service-img" src />
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

