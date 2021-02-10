import React from 'react'
import IcoMoon from 'react-icomoon'
import iconSet from 'Assets/icon_selection.json'

const Icon = props => {
    const config = {
        iconSet,
        ...props
    }
    
    return <IcoMoon {...config} />
}

export default Icon