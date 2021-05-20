import React from 'react';
import {
  StackWrap,
  TechList,
  
} from './StackStyled';


const Stacks = () => {

  return (
    <StackWrap> 
      <div className="stack-wrap">
          <h3>Technology Stacks</h3>
          <nav className="tech-nav">
            <ul>
              <li>Frontend</li>
              <li>Backend</li>
              <li>Database</li>
              <li>Others</li>
            </ul>
          </nav>

          <TechList>
            <div className="tech-list frontend">
              <ul>
                <li className="item-list frontend">HTML5</li>
                <li className="item-list frontend">CSS3</li>
                <li className="item-list frontend">ReactJS</li>
                <li className="item-list listfrontend">JQuery</li>
                <li className="item-list frontend">VueJS</li>
                <li className="item-list backend">NodeJS</li>
                <li className="item-list backend">GraphQL</li>
                <li className="item-list backend">Express</li>
              </ul>
            </div>
          </TechList>
      </div>
    </StackWrap>
  )
}

export default Stacks;
