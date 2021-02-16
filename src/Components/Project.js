import React from 'react'
import Thumbnails from 'Components/Thumbnails'
import ItemList from 'Components/ItemList'
import { makeId } from 'Utils'
import './Project.css'

const ProjectLinks = props => {
    const { website } = props
    const links = Array.isArray(website)
        ? website
        : [website]

    return (
        <div className='ProjectLinks'>
            { website
                ? links.map(link =>
                    <a
                        className='interactive'
                        href={link.link}
                        key={link.link}
                    >
                        {link.label}
                    </a>
                )
                : null
            }
        </div>
    )
}

const Project = props => {
    const {
        data,
        setImageNum,
        setActiveProject,
        toggleLightbox
    } = props
    const {
        alias,
        items,
        website
    } = data

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
                <ProjectLinks website={website}/>
                <Thumbnails
                    alias={alias}
                    onClick={openLightbox}
                />
                <ItemList items={items} />
            </div>
        </section>
    )
}

export default Project