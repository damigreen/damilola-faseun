import React from 'react';
import {
  TestimonialWrap,
  TestimonialCard,
} from './TestimonialStyled';


const Testimonial = () => {
  const testQuote = '../../../icons/quote.png';
  const testImage1 = '../../../images/dami.jpg';
  const testImage2 = '../../../images/yomi.png'
  const testImage3 = '../../../images/reymond.jpg'


  return (
    <TestimonialWrap>
      <div className="testimonial-wrap">
        <TestimonialCard>
          <div className="card one">
            <div className="card-quote">
              <img src={testQuote} alt="testimonial icon" />
            </div>
            <p>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
            </p>
            <div className="test-avatar one"></div>
            <div className="avatar-title">
              <p>Damilola Faseun</p>
              <p>CTO Greenmtech</p>
            </div>
          </div>
        </TestimonialCard>

        <TestimonialCard>
          <div className="card two">
            {/* <div>Quote</div> */}
            <p>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
            </p>
            <img src alt="testimonial image thumbnail picture raychan" />
            <div>
              <p>Raymond Olatunji</p>
              <p>Rayckan Herbal Healthcare</p>
            </div>
          </div>
        </TestimonialCard>

        <TestimonialCard>
          <div className="card three">
            <div>Quote</div>
            <p>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
            </p>
            <img src alt="testimonial image thumbnail picture tca" />
            <div>
              <p>Abiola Yomi</p>
              <p>Co Founder TCA </p>
            </div>
          </div>
        </TestimonialCard>

      </div>
    </TestimonialWrap>
  )
}

export default Testimonial;
