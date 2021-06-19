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
                <h1 className="col-header">
                  <span>Building </span>
                  <span>better </span>
                  <span>product</span>
                </h1>
                <ButtonSecondary className="services-button">Services</ButtonSecondary>

              </div>  
            </ServiceInfo>

            <ServiceCard>
              <div className="service-card">
                
                <div className="col-card">
                  <img className="col-img bounce" alt="responsive design icon" src={`../../../icons/responsive.png`} />
                  <div className="col-inner">
                    <h4>Responsive Web Design</h4>
                    <span className="horizontal-line"></span>
                    <p className="card-content">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. and typesetting industry and typesetting industry
                    </p>
                  </div>
                </div>

                <div className="col-card">
                    <img className="col-img bounce" alt="SEO and online marketing icon" src={`../../../icons/seo.png`} />
                    <div className="col-inner">
                      <h4>SEO and Online Marketing</h4>
                      <span className="horizontal-line"></span>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.  and typesetting industry and typesetting industry
                      </p>

                    </div>
                </div>

                <div className="col-card">
                    <img className="col-img bounce" alt="Web and mobiledevelopment icon" src={`../../../icons/dev1.png`} />
                    <div className="col-inner">
                      <h4>Web and Mobile Development</h4>
                      <span className="horizontal-line"></span>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. and typesetting industry and typesetting industry 
                      </p>
                    </div>
                </div>


                <div className="col-card">
                    <img className="col-img bounce" alt="ecommerce solutions icon" src={`../../../icons/ecommerce.png`} />
                    <div className="col-inner">
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
        </ServicesRow>
      </div>
    </ServicesWrap>
  )
}

export default ServicesNew;
