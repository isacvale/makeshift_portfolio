import React, { useEffect, useState } from 'react'
import Icon from 'Components/Icon'
import { debouncer } from 'Utils'
import './Contact.css'

const ContactBanner = props => {
    const isOutside = props.to.slice(0, 5) === 'https'
    return (
        <a
            className={`ContactBanner interactive ${props.hidden ? '_hidden' : ''}`}
            aria-label={props.alt}
            href={props.to}
            target={isOutside ? '_blank' : null}
        >

            { props.icon
                ? <Icon
                    className='interactive'
                    icon={props.icon}
                    size='1.2rem'
                    color={'hsla(170, 40%, 0%, 0.4)'}
                    aria-label='hidden'
                />
                : null
            }

            { props.label ?? null }
            
        </a>
    )
}

const Contact = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [showToTop, setShowToTop] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const scroll = window.scrollY
            if (scroll > 400)
                setIsScrolled(true)
            else
                setIsScrolled(false)
        }

        const debouncedOnScroll = debouncer(onScroll, 100)

        window.addEventListener('scroll', debouncedOnScroll)
    }, [])

    useEffect(() => {
        if (isScrolled === true)
            setTimeout(() => setShowToTop(true), 200)
        else
            setTimeout(() => setShowToTop(false), 200)
    }, [isScrolled])

    return(
        <div className='Contact'>
            { isScrolled || showToTop
                ? <ContactBanner
                    label='back to top'
                    to='#html'
                    hidden={!(isScrolled && showToTop)}
                />
                : null
            }
            <ContactBanner
                icon='phone'
                alt='Call me.'
                to='tel:+1-604-518-7690'
            />
            <ContactBanner
                icon='envelop'
                alt='Mail me.'
                to='mailto:isac.dvo+portfolio@gmail.com?subject=Let us have a chat'
            />
            <ContactBanner
                icon='linkedin2'
                alt='Catch me at LinkedIn.'
                to='https://www.linkedin.com/in/isac-vale-he-him-76272514b/'
            />
        </div>
    )
}

export default Contact