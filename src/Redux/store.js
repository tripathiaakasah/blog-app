import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { reducers } from './Reducers/reducers';


const initialstate={
    blogDetails: []
};

const middleware = [thunk];

const store = createStore(reducers,initialstate,composeWithDevTools(applyMiddleware(...middleware)))

export default store;