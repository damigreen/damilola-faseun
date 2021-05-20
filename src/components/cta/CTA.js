import React from 'react';
import {
  CTAWrap,
} from './CTAStyled';



const CTA = () => {

  return (
    <CTAWrap>
      <div className="cta-wrapper">
        <div className="cta-wrap parallax">
            <p className="cta-text">
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
            </p>

            <div className="button-wrap">
              <button>Hire me</button>
              <button>Get in touch</button>
            </div>
        </div>
      </div>
    </CTAWrap>
  )
}

export default CTA;
