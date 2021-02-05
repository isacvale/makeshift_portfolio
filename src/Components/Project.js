import React from 'react'
// import { projects } from 'Store'
import './Project.css'

const ProjectThumbnail = () => {
    return (
        <div className='ProjectThumbnail' />
    )
}

const Project = props => {
    const { data } = props

    return (
        <section className='Project'>
            <div className='ProjectContent'>
                <h1>{data.name}</h1>
                <p>
                    {data.description}
                </p>
                <footer>
                    { data.images.map(image =>
                        <ProjectThumbnail
                            key={image}
                        />
                    )}
                    {/* <ProjectThumbnail />
                    <ProjectThumbnail />
                    <ProjectThumbnail />
                    <ProjectThumbnail />
                    <ProjectThumbnail />
                    <ProjectThumbnail /> */}
                </footer>
            </div>
        </section>
    )
}

export default Project