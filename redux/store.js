import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './reducers/rootReducer';

export default createStore(rootReducer, devToolsEnhancer());