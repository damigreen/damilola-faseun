import React from 'react';
import { 
  ProjectWrap
} from './ProjectStyled'


const Project = ({ project }) => {
  console.log(project) 


  return (
    <ProjectWrap>
      <div className='project-wrap'>
        <h1 className='primary-heading flex-center'>Projects</h1>
      </div>
    </ProjectWrap>
  )
}

export default Project;
;
