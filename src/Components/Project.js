import React, { useState } from 'react'
// import { projects } from 'Store'
import Thumbnails from 'Components/Thumbnails'
import { makeId } from 'Utils'
import './Project.css'

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

const Project = props => {
    const {
        data,
        setImageNum,
        setActiveProject,
        toggleLightbox
    } = props
    const { alias } = data

    const openLightbox = num => {
        setActiveProject(data.alias)
        setImageNum(num)
        toggleLightbox()
    }

    return (
        <section className='Project'>
            <div className='ProjectContent'>
                <h1 id={makeId(data.shortname)}>{data.name}</h1>
                <p>
                    {data.description}
                </p>
                <Thumbnails
                    alias={alias}
                    onClick={openLightbox}
                />
                {/* <footer>
                    {
                        data.images.map(num =>
                        <ProjectThumbnail
                            alias={alias}
                            num={num}
                            key={num}
                            onClick={openLightbox}
                        />
                    )}
                </footer> */}
            </div>
        </section>
    )
}

export default Project