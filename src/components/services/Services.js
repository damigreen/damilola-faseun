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
                    <h5 className="service-intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
                    <div>
                        <h4 className="my-services-header">Services</h4>
                    </div>

                    <div className="services-items">
                        <div className="services-data">
                            <img className="service-img" src />
                            <h4>Responsive Web Design</h4>
                            <span className="horizontal-line"></span>
                            <p className="services-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>

                        <div className="services-data">
                            <img className="service-img" src />
                            <h4>Search Engine Optimization</h4>
                            <span className="horizontal-line"></span>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>

                        <div className="services-data">
                            <img className="service-img" src />
                            <h4>Mobile App Development</h4>
                            <span className="horizontal-line"></span>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>

                        <div className="services-data">
                            <img className="service-img" src />
                            <h4>Database Management</h4>
                            <span className="horizontal-line"></span>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>

                        <div className="services-data">
                            <img className="service-img" src />
                            <h4>Wordpress Theme Development</h4>
                            <span className="horizontal-line"></span>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>

                        <div className="services-data">
                            <img className="service-img" src />
                            <h4>Wordpress Theme Development</h4>
                            <span className="horizontal-line"></span>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                </div>

            </ServicesRow>
        </ServicesWrapper>
    )
}

export default Services;

