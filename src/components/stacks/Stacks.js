import React from 'react';
import {
  StackWrap,
  TechList,
} from './StackStyled';


const Stacks = () => {

  // var mySkillNames = Object.keys(skills);

  //   const mySkills = mySkillNames.map(sk => {
  //     return (
  //       <Card style={{marginTop: '70px'}} title={sk} >
  //         {skills[sk].map(s => {
  //           var iconName = `images/icons/${s.split("|")[1]}`
  //           console.log(iconName)
  //           var iconUrl = iconName +".svg";
  //           var iconUrlAlt = 'images/icons/'+s.split("|")[1]+".png";
  //           var icon = iconName.includes('PNG') ? iconUrlAlt : iconUrl;

  //           console.log((iconUrl))
  //           return (
  //               <Card.Grid style={gridStyle}>
  //                 <div>{s.split("|")[0]}</div>
  //                 <img src={icon} />
  //               </Card.Grid>
  //           )}
  //         )}
  //       </Card>
  //     )
  //   })


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
                  <img className='icon-stack'src="../../../icons/Javascript.png" alt="javascript icon" />
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
                  <img className='icon-stack'src="../../../icons/Slack.png" alt="slack icon" />
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
