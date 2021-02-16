import React from 'react'
import './ItemList.css'

const Item = props => {
    const {
        name,
        label,
        category,
        link
    } = props.item

    return (
        <div
            className='ItemList_Item '
        >
            <a
                className='interactive'
                href={link}           
            >
                <span className='ItemList_Name'>{name}</span>
                <span className='ItemList_Category'>{category}</span>
            </a>
            <p className='ItemList_Description'>
                { label }
            </p>
        </div>
    )
}

const ItemList = props => {
    const { items } = props

    const reorderedItems = (items || [])
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => a.category.localeCompare(b.category))

    return (
        !items ? null
        : <div className='ItemList'>
            { reorderedItems.map(item =>
                <Item item={item} key={item.name} />
            )}
        </div>
    )
}

export default ItemList