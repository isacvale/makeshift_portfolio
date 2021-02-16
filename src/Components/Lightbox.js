import React, { useEffect, useState, useRef } from 'react'
import { projects } from 'Store'
import { setFocusablePage } from 'Utils'
import { useSwipeable } from 'react-swipeable'
import Thumbnails from 'Components/Thumbnails'
import './Lightbox.css'

const LightBoxImage = props => {
    const {
        activeProject,
        imageNum,
        alt,
        onClick,
        setImageNum
    } = props

    const project = projects.find(project => project.alias === activeProject)

    const imageEl = useRef()

    const setNewImage = mod => {
        const project = projects.find(project => project.alias === activeProject)
        const newNumber = imageNum + mod

        if (project.images.includes(newNumber)) {
            setImageNum(newNumber)
            const el = imageEl.current
            const removeClasses = () => {
                el.classList.remove('_enterLeft')
                el.classList.remove('_enterRight')
            }
            const addClass = () => {
                el.classList.add(mod < 0 ? '_enterLeft' : '_enterRight')
            }
            window.requestAnimationFrame(() => {
                removeClasses()
                window.requestAnimationFrame(addClass)
            })
        }
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => setNewImage(1),
        onSwipedRight: () => setNewImage(-1),
        trackMouse: true
    })

    // const project = projects.find(project => project.alias === activeProject)
    const imgSource = project.svgImages
        ? `${process.env.PUBLIC_URL}/images/${activeProject}_0${imageNum}.svg`
        : `${process.env.PUBLIC_URL}/images/${activeProject}_0${imageNum}-min.png`

    return (
        <div
            className={`Lightbox_Anim ${project.svgImages ? '_svg' : ''}`}
            ref={imageEl}
        >
            <img                
                className={`Lightbox_Image`}
                src={imgSource}
                alt={alt}
                onClick={onClick}
                {...handlers}
            />
        </div>
    )
}

const Lightbox = props => {
    const {
        activeProject,
        imageNum,
        lightboxActive,
        toggleLightbox,
        setImageNum
    } = props

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsActive(lightboxActive), 100)
    }, [lightboxActive])

    const activeState = +lightboxActive + +isActive

    useEffect(() => {
        if (activeState)
            setFocusablePage(false)
        else
            setFocusablePage(true)
    }, [activeState])
    
    return activeState
        ? <section
            className={`Lightbox ${activeState === 2 ? '_active' : ''}`}
            onClick={toggleLightbox}
        >
            <button className='Lightbox_Close interactive'>close</button>
            <div className='Lightbox_Content'>
                <Thumbnails
                    alias={activeProject}
                    onClick={setImageNum}
                />
                
                <LightBoxImage
                    activeProject={activeProject}
                    imageNum={imageNum}
                    alt=''
                    onClick={e => e.stopPropagation()}
                    setImageNum={setImageNum}
                />
            </div>
        </section>
        : null
}

export default Lightbox