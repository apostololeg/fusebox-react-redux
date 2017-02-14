// import { createAction, handleAction } from 'redux-actions';

// const addItems = createAction('ADD_ITEMS');
// const moveItem = createAction('MOVE_ITEM');

// handleAction('ADD_ITEMS', (state = {items: []}, action) => ({
//     ...state,
//     items: [...state.items, action.payload]
// }));

// handleAction('MOVE_ITEM', (state = {items: []}, action) => ({
//     ...state,
//     items: state.items.map(item => {
//         if (item.id !== action.id) {
//             return item
//         }

//         return {
//             id: item.id,
//             color: item.color,
//             side: item.side === 'left' ? 'right' : 'left'
//         }
//     })
// }));

const moveItem = (state, action) => {
    switch (action.type) {
        case 'MOVE_ITEM':
            if (state.id !== action.id) {
                return state
            }

            return {
                ...state,
                side: state.side === 'left' ? 'right' : 'left'
            }
        default:
            return state;
    }
}

const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return state.concat(action.items);
        case 'MOVE_ITEM':
            return state.map(item => {
                return moveItem(item, action)
            });
        default:
            return state;
    }
}

export default items
