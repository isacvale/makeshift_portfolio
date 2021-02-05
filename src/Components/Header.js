import React from 'react'
// import { Link } from 'react-dom-router'
import Icon from 'Components/Icon'
import { makeId } from 'Utils'
import { projects } from 'Store'
import './Header.css'

const Header = () => {
    return (
        <header className='Header'>
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
                        >
                            <Icon
                                icon={project.icon}
                                size='1.2rem'
                                // color={'hsla(140, 50%, 50%, 0.4)'}
                                color={'hsla(240, 20%, 50%, 0.6)'}
                            />
                            <span className='HeaderLabel'>{project.shortname}</span>
                        </a>
                    )}
                    {/* <a>Governa system</a>
                    <a>E-sial system</a>
                    <a>Weather app</a>
                    <a>Tic-tac-toe</a>
                    <a>Stamp components</a>
                    <a>Vector art</a>
                    <a>DIY Tabletop Games</a>
                    <a>Ye olde website</a>
                    <a>My current project</a>
                    <a>Who am I</a>
                    <a>Stuff I like</a> */}
                </nav>
            </div>
        </header>
    )
}

export default Header