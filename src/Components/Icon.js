import React from 'react'
import IcoMoon from 'react-icomoon'
import iconSet from 'Assets/icon_selection.json'

const Icon = props =>
    <IcoMoon
        iconSet={iconSet}
        {...props}
    />

export default Icon