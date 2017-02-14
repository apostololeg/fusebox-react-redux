import React from 'react'
import { connect } from 'react-redux'
import Bin from '../Bin/Bin.jsx'
import './Game.css'

// TODO: вынести отдельно
const getItemsBySide = (items, side) => {
    return items.filter(item => item.side === side);
}

// NOTE: расчёты в игре основаны на допущении, что цветов шариков всего 2
let Game = (state) => {
    const maxItemsInBox = 9;
    const leftItems = getItemsBySide(state.items, 'left');
    const rightItems = getItemsBySide(state.items, 'right');
    const isLeftFull = leftItems.length === maxItemsInBox;
    const isRightFull = rightItems.length === maxItemsInBox;
    const leftItemsCount = leftItems.length;
    const whiteItemsCount = leftItems.filter(item => item.color === 'white').length;
    const blackItemsCount = leftItems.filter(item => item.color === 'black').length;
    const isComplete = leftItemsCount === (maxItemsInBox-1) && (
        leftItemsCount === whiteItemsCount ||
        leftItemsCount === blackItemsCount
    );

    return (
        <div className="Game">
            <Bin side='left'
                isFull={isLeftFull}
                isLocked={isRightFull}
                isComplete={isComplete}
                />
            <Bin side='right'
                isFull={isRightFull}
                isLocked={isLeftFull}
                isComplete={isComplete}
                />
        </div>
    );
}


const mapStateToProps = (state, ownProps) => ({
    items: state.items
});

Game = connect(mapStateToProps)(Game);

export default Game
