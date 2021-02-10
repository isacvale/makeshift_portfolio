import React from 'react'
// import { projects } from 'Store'
import { makeId } from 'Utils'
import './Project.css'

const ProjectThumbnail = props => {
    const { alias, num } = props

    console.log(`Assets/images/${alias}_0${num}-min.png`)
    return (
        <button className='ProjectThumbnail interactive-l'>
            <img
                src={`${process.env.PUBLIC_URL}/images/${alias}_0${num}-min.png`}
                alt=''
            />
        </button>
    )
}

const Project = props => {
    const { data } = props
    const { alias } = data

    return (
        <section className='Project'>
            <div className='ProjectContent'>
                <h1 id={makeId(data.shortname)}>{data.name}</h1>
                <p>
                    {data.description}
                </p>
                <footer>
                    {
                        data.images.map(num =>
                        <ProjectThumbnail
                            alias={alias}
                            num={num}
                            key={num}
                        />
                    )}
                </footer>
            </div>
        </section>
    )
}

export default Project