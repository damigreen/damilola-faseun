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
        <h2>Process</h2>
        <ProcessContent>
          <div className="process-content flex-row">

            <ProcessCard className="process-card flex-med">
              <div className="card">
                <div className="card-bg design flex-md end">
                  <h4>Design</h4>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              </div>
            </ProcessCard>

            <ProcessCard className="process-card flex-med">
              <div className="card">
                <div className="card-bg develop flex-md end">
                  <h4>Develop</h4>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>                
              </div>
            </ProcessCard>

            <ProcessCard className="process-card flex-med">
              <div className="card">
                <div className="card-bg deploy flex-md end">
                  <h4>Deploy</h4>
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
