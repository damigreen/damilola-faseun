import React from 'react';
import {
  CTAWrap,
} from './CTAStyled';



const CTA = () => {

  return (
    <CTAWrap>
      <div className="cta-wrap">
        <div>
          <p>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
          </p>
          <div>
            <button>Hire me</button>
            <button>Get in touch</button>
          </div>
        </div>
      </div>
    </CTAWrap>
  )
}

export default CTA;
