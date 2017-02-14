import React from 'react'
import { connect } from 'react-redux'
import { moveItem } from '../../actions'
import classNames from 'classnames'
import Item from '../Item/Item.jsx'
import './Bin.css'

// TODO: вынести отдельно
const getItemsBySide = (items, side) => {
    return items.filter(item => item.side === side);
}

const mapStateToProps = (state, ownProps) => {
    return {
        isFull: ownProps.isFull,
        isLocked: ownProps.isLocked,
        isComplete: ownProps.isComplete,
        items: getItemsBySide(state.items, ownProps.side)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (id) => {
        dispatch(moveItem(id))
    }
});

let Bin = (state) => {
    const items = state.items;
    const binClasses = classNames({
        Bin: true,
        Bin_full: state.isFull,
        Bin_locked: state.isLocked,
        Bin_completed: state.isComplete
    });

    return (
        <div className={binClasses}>
            {items.map(item =>
                <Item
                    key={item.id}
                    {...item}
                    onClick={() => {
                        state.onClick(item.id);
                    }}
                />
            )}
        </div>
    );
}


Bin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Bin);

export default Bin
