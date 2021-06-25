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
          {/* <StacksNav>
            <nav className="stacks-nav">
              <ul>
                <li>All</li>
                <li>Frontend</li>
                <li>Backend</li>
                <li>Database</li>
                <li>Others</li>
              </ul>
            </nav>
          </StacksNav> */}

          <TechList>
            <div className="tech-list frontend">
              <ul>
                <li className="item-list frontend">
                  <img className='icon-stack'src="../../../icons/javascript.png" alt="javascript icon" />
                </li>
                <li className="item-list frontend">
                  <img className='icon-stack'src="../../../icons/node.png" alt="node js icon" />
                </li>
                <li className="item-list frontend">
                  <img className='icon-stack'src="../../../icons/mysql.png" alt="mysql icon" />
                </li>
                <li className="item-list frontend">
                  <img className='icon-stack'src="../../../icons/git.png" alt="git icon" />
                </li>
                <li className="item-list frontend">
                  <img className='icon-stack'src="../../../icons/react.png" alt="react icon" />
                </li>
                <li className="item-list frontend">
                  <img className='icon-stack'src="../../../icons/python.png" alt="python icon" />
                </li>
                <li className="item-list frontend">
                  <img className='icon-stack'src="../../../icons/wordpress.png  " alt="wordpress icon" />
                </li>
                <li className="item-list frontend">
                  <img className='icon-stack'src="../../../icons/graphql.png" alt="graphql icon" />
                </li>
                <li className="item-list frontend">
                  <img className='icon-stack'src="../../../icons/slack.png" alt="slack icon" />
                </li>
                <li className="item-list frontend">
                  <img className='icon-stack'src="../../../icons/figma.png" alt="figma icon" />
                </li>
                <li className="item-list frontend">
                  <img className='icon-stack'src="../../../icons/sqlite.png" alt="sqlite icon" />
                </li>
                <li className="item-list frontend">
                  <img className='icon-stack'src="../../../icons/css.png" alt="css icon" />
                </li>
                <li className="item-list frontend">
                  <img className='icon-stack'src="../../../icons/webpack.png" alt="webpack icon" />
                </li>
              </ul>
            </div>
          </TechList>
      </div>
    </StackWrap>
  )
}

export default Stacks;
