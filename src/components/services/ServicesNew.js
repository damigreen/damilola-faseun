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
                      Get visually impressive web design and development solutions for your brand that functions on all platforms and offers the ultimate user experience.
                    </p>
                  </div>
                </div>

                <div className="col-card">
                    <img className="col-img bounce" alt="SEO and online marketing icon" src={`../../../icons/seo.png`} />
                    <div className="col-inner">
                      <h4>SEO and Online Marketing</h4>
                      <span className="horizontal-line"></span>
                      <p>
                        Improve your visibility and website ranking by generating organic traffic using optimized SEO analytics and marketing strategy
                      </p>

                    </div>
                </div>

                <div className="col-card">
                    <img className="col-img bounce" alt="Web and mobiledevelopment icon" src={`../../../icons/dev1.png`} />
                    <div className="col-inner">
                      <h4>Web and Mobile Development</h4>
                      <span className="horizontal-line"></span>
                      <p>
                      I offer custom web and mobile development services using the latest and cutting edge technologies to produce exclusive and high quality products specifically tailored for you and your business needs.
                      </p>
                    </div>
                </div>


                <div className="col-card">
                    <img className="col-img bounce" alt="ecommerce solutions icon" src={`../../../icons/ecommerce.png`} />
                    <div className="col-inner">
                      <h4>E-commerce</h4>
                      <span className="horizontal-line"></span>
                      <p >
                        Own your own store and start selling your products online by leveraging several ecommerce platforms that will help you to deliver your products to more people around the world 
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
