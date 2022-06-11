import React from 'react'

const ProjectDetailScreen = (props)=>{
    const project = props.match.params;
    console.log(props.match.params)
    return(
        <div>
            {project.title}
        </div>
    )
}

export default ProjectDetailScreen