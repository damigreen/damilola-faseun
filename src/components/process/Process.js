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
                <p>I create wireframes, and sketch designs to represent the idea I want to implement.</p>
              </div>
            </ProcessCard>

            <ProcessCard className="process-card flex-med">
              <div className="card">
                <div className="card-bg develop flex-md end">
                  <h4>Develop</h4>
                </div>
                <p>After crafting the right design prototype for the product, I proceed to developing the product</p>                
              </div>
            </ProcessCard>

            <ProcessCard className="process-card flex-med">
              <div className="card">
                <div className="card-bg deploy flex-md end">
                  <h4>Deploy</h4>
                </div>
                <p>Following implementation, I host the website over a secured server and deploy apps to google and apple stores</p>
              </div>
            </ProcessCard>
          </div>
        </ProcessContent>
      </div>
    </ProcessWrap>
  )
}

export default Process;
