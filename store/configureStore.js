import { createStore, combineReducers } from 'redux';
import userReducer from '../src/components/reducers/userReducer';
import accumulativeReducer from '../src/components/reducers/accumulativeReducer';
const rootReducer = combineReducers(
    { user: userReducer, acc: accumulativeReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;