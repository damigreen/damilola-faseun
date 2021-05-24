import React from 'react'
import {
  ProcessWrap,
  ProcessIntro,
  ProcessContent,
} from './ProcessStyled';


const Process = () => {

  return (
    <ProcessWrap>
      <div className="process-wrap">
        <ProcessIntro>
            <h2>Process</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy texthas been the industry's standard dummy text
            </p>
        </ProcessIntro>
        <ProcessContent>
          <div className="process-content">
            <div className="process-title">
              {/* <div>Design</div> */}
              <div>Prototype</div>
              <div>Develop</div>
              <div>Testing</div>
              <div>Deploy</div>
              <div>QA</div>
            </div>

            <div className="process-text">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets </p>
            </div>

          </div>
        </ProcessContent>

      </div>
    </ProcessWrap>
  )
}

export default Process;
