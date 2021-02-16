import React from 'react'
// import { Link } from 'react-dom-router'
import Icon from 'Components/Icon'
import Contact from 'Components/Contact'
import { makeId } from 'Utils'
import { projects } from 'Store'
import './Header.css'

const Header = () => {
    return (
        <header className='Header'>
            <Contact />
            <div className='HeaderContent'>
                <div className='HeaderSiteTitle'>
                    <h1>My Provisional Portfolio</h1>
                    <h2>by Isac Vale</h2>
                </div>
                <nav>
                    { projects.map(project =>
                        <a
                            className='Header_ProjectLink interactive'
                            href={`#${makeId(project.shortname)}`}
                            key={project.shortname}
                        >
                            <Icon
                                icon={project.icon}
                                size='1.2rem'
                                color={'hsla(240, 20%, 50%, 0.6)'}
                            />
                            <span className='HeaderLabel'>{project.shortname}</span>
                        </a>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header