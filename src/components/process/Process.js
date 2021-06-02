import React from 'react'
import {
  ProcessWrap,
  ProcessIntro,
  ProcessContent,
  ProcessCard,

} from './ProcessStyled';



const Process = () => {

  return (
    <ProcessWrap>
      <div className="process-wrap">
        {/* <h3>Lorem Ipsum is simply dummy</h3> */}
        <h2>Process</h2>
        <ProcessContent>
          <div className="process-content">

            <ProcessCard>
              <div className="process-card">
                <div className="bg bg-design">
                  <h4>Design</h4>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              </div>
            </ProcessCard>

            <ProcessCard>
              <div className="process-card">
                <div className="bg bg-develop">
                  <h4>Design</h4>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>                
              </div>
            </ProcessCard>

            <ProcessCard>
              <div className="process-card">
                <div className="bg bg-deploy">
                  <h4>Design</h4>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              </div>
            </ProcessCard>
          </div>
        </ProcessContent>
      </div>
    </ProcessWrap>
  )
}


export default Process;
