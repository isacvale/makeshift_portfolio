import React from 'react'
import { projects } from 'Store'
import './Thumbnails.css'

const ProjectThumbnail = props => {
    const { alias, num, onClick } = props

    return (
        <button
            className='ProjectThumbnail interactive-l'
            onClick={() => onClick(num)}
        >
            <img
                src={`${process.env.PUBLIC_URL}/images/${alias}_0${num}s-min.png`}
                alt=''
            />
        </button>
    )
}

const Thumbnails = props => {
    const { alias, onClick = () => {} } = props
    if (!alias)
        return <section className='Thumbnails' />

    console.log('uvbuni', alias)
    const projectData = projects.find(project => project.alias === alias)
    const { images } = projectData

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
                />
            )}
        </section>
    )
}

export default Thumbnails