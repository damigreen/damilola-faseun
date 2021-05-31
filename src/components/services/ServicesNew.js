import { ButtonSecondary } from 'AppStyled';
import React from 'react';
import {
  ServicesWrap,
  ServicesRow,
  ServiceCard,
  ServiceInfo,

} from './ServicesNewStyled';

const ServicesNew = () => {

  return (
    <ServicesWrap>
      <div className="services-wrap">
        <ServicesRow>
          <div className="services-row">
            <ServiceInfo>
              <div className="service-info">
                <h4 className="col-title">I Help you with</h4>
                {/*
                  Intelligent solutions to give you a competitive advantage
                  I help global brand develop digital product
                */}
                <h1 className="col-header">Building better product</h1>
                <ButtonSecondary className="services-button">Services</ButtonSecondary>

              </div>
            </ServiceInfo>

            <div className="service-col-two">
              <ServiceCard>
                <div className="service-card">
                  <div className="card-data">
                    <img className="card-img" src />
                    <h4>Responsive Web Design</h4>
                    <span className="horizontal-line"></span>
                    <p className="card-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. and typesetting industry and typesetting industry
                    </p>
                  </div>

                  <div className="card-data">
                      <img className="card-img" src />
                      <div>
                        <h4>SEO and Online Marketing</h4>
                        <span className="horizontal-line"></span>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.  and typesetting industry and typesetting industry
                        </p>

                      </div>
                  </div>

                  <div className="card-data">
                      <img className="card-img" src />
                      <div>
                        <h4>Web and Mobile Development</h4>
                        <span className="horizontal-line"></span>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. and typesetting industry and typesetting industry 
                        </p>
                      </div>
                  </div>


                  <div className="card-data">
                      <img className="card-img" src />
                      <div>
                        <h4>E-commerce</h4>
                        <span className="horizontal-line"></span>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.  and typesetting industry and typesetting industry
                        </p>
                      </div>
                  </div>
                </div>
              </ServiceCard>
            </div>
          </div>
        </ServicesRow>
      </div>
    </ServicesWrap>
  )
}

export default ServicesNew;
