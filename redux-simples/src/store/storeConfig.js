import { createStore, combineReducers } from 'redux';

import numerosReducers from './reducers/numeros';

const reducers = combineReducers({
    numeros: numerosReducers,
    nomes: function (state, action) {
        return [
            'Bia',
            'Carla',
            'João'
        ]
    }
});

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;