import React from 'react';
import {
  StackWrap,
  TechList,
  StacksNav,
} from './StackStyled';


const Stacks = () => {

  return (
    <StackWrap> 
      <div className="stack-wrap">
          <h3>Technology Stacks</h3>
          <StacksNav>
            <nav className="stacks-nav">
              <ul>
                <li>All</li>
                <li>Frontend</li>
                <li>Backend</li>
                <li>Database</li>
                <li>Others</li>
              </ul>
            </nav>
          </StacksNav>

          <TechList>
            <div className="tech-list frontend">
              <ul>
                <li className="item-list frontend">HTML5</li>
                <li className="item-list frontend">CSS3</li>
                <li className="item-list frontend">ReactJS</li>
                <li className="item-list listfrontend">JQuery</li>
                <li className="item-list frontend">VueJS</li>
                <li className="item-list backend">NodeJS</li>
                <li className="item-list backend">PHP</li>
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
