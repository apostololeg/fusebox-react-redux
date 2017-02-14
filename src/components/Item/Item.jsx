import React from 'react'
import { connect } from 'react-redux'
import { moveItem } from '../../actions'
import classNames from 'classnames'
import './Item.css'

const Item = ({onClick, color, side}) => {
    const itemClasses = classNames({
        Item: true,
        Item_color_: color
    });

    return (
        <div className={'Item Item_color_' + color}
            onClick={onClick}
            >
        </div>
    );
}


export default Item
