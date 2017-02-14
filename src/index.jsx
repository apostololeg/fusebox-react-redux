import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './components/App/App.jsx'
import reducer from './reducers'

const store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch({
    type: 'ADD_ITEMS',
    items: [
        {id: 1, side: 'left', color: 'white'},
        {id: 2, side: 'left', color: 'white'},
        {id: 3, side: 'left', color: 'black'},
        {id: 4, side: 'left', color: 'white'},
        {id: 5, side: 'left', color: 'white'},
        {id: 6, side: 'left', color: 'white'},
        {id: 7, side: 'left', color: 'white'},
        {id: 8, side: 'left', color: 'black'},
        {id: 9, side: 'right', color: 'black'},
        {id: 10, side: 'right', color: 'black'},
        {id: 11, side: 'right', color: 'black'},
        {id: 12, side: 'right', color: 'black'},
        {id: 13, side: 'right', color: 'white'},
        {id: 14, side: 'right', color: 'black'},
        {id: 15, side: 'right', color: 'white'},
        {id: 16, side: 'right', color: 'black'}
    ]
});
