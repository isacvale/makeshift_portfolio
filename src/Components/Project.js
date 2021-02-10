import React from 'react'
import Thumbnails from 'Components/Thumbnails'
import { makeId } from 'Utils'
import './Project.css'

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
            </div>
        </section>
    )
}

export default Project