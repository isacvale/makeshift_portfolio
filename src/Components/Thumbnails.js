import React from 'react'
import { projects } from 'Store'
import './Thumbnails.css'

const ProjectThumbnail = props => {
    const { alias, num, onClick, svgImages } = props
    const imgSource = svgImages
        ? `${process.env.PUBLIC_URL}/images/${alias}_0${num}.svg`
        : `${process.env.PUBLIC_URL}/images/${alias}_0${num}s-min.png`

    return (
        <button
            className={`ProjectThumbnail interactive-l ${svgImages ? '_svg' : ''}`}
            onClick={() => onClick(num)}
        >
            <img
                src={imgSource}
                alt=''
                height="48"
                width="48"
            />
        </button>
    )
}

const Thumbnails = props => {
    const { alias, onClick = () => {} } = props
    if (!alias)
        return <section className='Thumbnails' />

    const projectData = projects.find(project => project.alias === alias)
    const { svgImages, images } = projectData

    return (
        <section
            className='Thumbnails'
            onClick={ev => ev.stopPropagation()}
        >
            { images.map(num =>
                <ProjectThumbnail
                    alias={alias}
                    num={num}
                    key={num}
                    onClick={onClick}
                    svgImages={svgImages}
                />
            )}
        </section>
    )
}

export default Thumbnails