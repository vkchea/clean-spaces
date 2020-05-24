import { USER_ACC} from '../constants';

const initialState = {
    userRepo: [

    ]
}

const accumulativeReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACC:
            return{
                userRepo: action.payload
            }
        default:
            return state;
    }
}
export default accumulativeReducer;